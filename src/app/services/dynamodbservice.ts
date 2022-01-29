import { openDB, deleteDB, wrap, unwrap } from 'idb';
import {Injectable} from '@angular/core';
import {OnInit} from '@angular/core';

import * as AWS from 'aws-sdk';
import { DatePipe } from '@angular/common';
import { DynamoqueryParams } from './dynamoqueryparams';

import * as cloneDeep from 'lodash/cloneDeep';
import { Httpdataservice } from './httpdataservice';
import { JS } from 'aws-amplify';
import { isNgContent } from '@angular/compiler/src/ml_parser/tags';


@Injectable({
    providedIn: "root"
})
export class Dynamodbservice {

    private servertimeurl = 'https://hjc7g4pb48.execute-api.ap-south-1.amazonaws.com/prod/a-getservertime';  // URL to web API

    constructor(private httpdataService: Httpdataservice) { }


    dbClient : AWS.DynamoDB.DocumentClient;
    credentials; //Connect credentials returned from Auth function 
    debugmode;
    offset;
    loggedinusername;
    
    async getServerTime(){
        if(!this.offset){
            var resp = await this.httpdataService.httpRequest(this.servertimeurl,'POST','{}');
            if(resp){
                this.offset = resp.body.servertime - new Date().getTime();
                return true;
            }else{
                return false; 
            }
        }
    }

    getTime(){
        return new Date().getTime() + this.offset;
    }

    async initializeCredsAndService(credentials,username,debugmode){
        this.credentials = credentials;
        this.debugmode =debugmode;
        this.loggedinusername = username;
        
        return await this.getServerTime();
    }

    connect(){
        this.dbClient = new AWS.DynamoDB.DocumentClient({region : 'ap-south-1', credentials: this.credentials, convertEmptyValues : true});
    }

    /**
     * 
     * @param tablename  
     * @param key - Primary key of item (Both partition and sort key if it is composite primary key)
     * @returns item or null
     */
    async getItem(tablename, key){
        try{
            this.connect();
            var params = {TableName: tablename, Key:key};

            var retpromise= await this.dbClient.get(params).promise();
            if(retpromise.$response.data){
                return retpromise.$response.data.Item; 
            }else{
                if(this.debugmode) console.error('|DBGETERR| Table Name ' + tablename + ', Error: ' + retpromise.$response.error);
                return null; 
            }
        }catch(err){
            if(this.debugmode) console.error('|DBGETERR| Table Name ' + tablename + ', Error: ' + err);
            return null; 
            
        }
    }

    
    /**
     * 
     * @param transactionitems 
     * @returns true : If transaction succesful, else false
     */
    async transactionWrite(transactionitems){
        var retpromise;
        try{
            this.connect();
            var params ={"TransactItems" : transactionitems};
            retpromise = await this.dbClient.transactWrite(params).promise();

            if(retpromise.$response.data){
                return true; 
            }else{
                if(this.debugmode) console.error(retpromise.$response.error);
                return false; 
            }
        }catch(err){
            if(this.debugmode) console.error(retpromise.$response.error);
            return false; 
        }
    }

    /**
     * @param tablename 
     * @param item - Item to be updated 
     * @returns 
     */
    async editItem(tablename, item){
        try{ 
            var clonedItem = cloneDeep(item);
            this.connect();
            var curversion = item.objectversion; 
            var conditionexpression = "objectversion = :version" ;  
            var attribparams= {":version" : curversion};

            clonedItem.objectversion = curversion + 1;
            clonedItem._lastChangedAt = this.getTime();
            clonedItem.updatedAt = this.getTime();
            
            //clonedItem.updatedAt = 
            var params = { TableName: tablename,Item: clonedItem,"ConditionExpression": conditionexpression,
                "ExpressionAttributeValues" : attribparams
            };
            var retpromise= await this.dbClient.put(params).promise();
            if(retpromise.$response.data){
                return clonedItem; 
            }else{
                if(this.debugmode) console.error(retpromise.$response.error);
                return null; 
            }
        }catch(err){
            if(this.debugmode) console.log('|DYNAMODBSERVICE| EXCEPTION putting item in  :' + tablename + err );
            return null; 
        }

    
    }

    /**
     * @param tablename 
     * @param item - Item to be updated 
     * @returns 
     */
    async putItem(tablename, item,forcreate, fordelete, conditionexpression?,expressionattributvalues?){
        var retpromise;
        var params; 

        var clonedItem = cloneDeep(item);
        clonedItem.updatedAt = this.getTime();
        clonedItem._lastChangedAt = this.getTime();
        clonedItem.updatedBy = this.loggedinusername;

        if(forcreate){
            clonedItem.createdAt = this.getTime();
            clonedItem.createdBy = this.loggedinusername;
            clonedItem.objectversion = 1;
        }
        if(fordelete){
            clonedItem._deleted = true;
        }


        params = {
            TableName: tablename,
            ConditionExpression : conditionexpression,
            ExpressionAttributeValues: expressionattributvalues,
            Item: clonedItem
        };

        try{
            this.connect();
            retpromise= await this.dbClient.put(params).promise();
            if(retpromise.$response.data){
                return clonedItem; 
            }else{
                if(this.debugmode) console.error('|DBPUTERR|Error while putting item ' + retpromise.$response.error);
                return null; 
            }
        }catch(err){
            if(this.debugmode) console.error('|DBPUTERR|Error while putting item ' +  tablename + err );
            return null; 
        }
    
    }

    
    /**
     * @param tablename 
     * @param filterexpression - Optional parameter for filter expression 
     * @param expressionattributvalues - Optional parameter for attribute values 
     * @returns Table data or null 
     */
     async scanTable(tablename, filterexpression? , expressionattributvalues?){
        
        try{
            this.connect();
            
            var items : any[] = [];
            var lastkey = null;
            
            while(true){
                    var retpromise;
                    var params;

                    if(lastkey != null){
                        params = {"TableName": tablename,"ExclusiveStartKey" : lastkey};
                        if(filterexpression && filterexpression.length > 0){
                            params = {"TableName": tablename,"FilterExpression": filterexpression,
                            "ExpressionAttributeValues": expressionattributvalues, "ExclusiveStartKey" : lastkey};
                        }
                       
                    }else{
                        params = {"TableName": tablename};
                        if(filterexpression && filterexpression.length > 0){
                            params = {"TableName": tablename,"FilterExpression": filterexpression, "ExpressionAttributeValues": expressionattributvalues};
                        }
                    }
                    retpromise= await this.dbClient.scan(params).promise();
                    if(retpromise.$response.data){
                        if(retpromise.$response.data.LastEvaluatedKey && retpromise.$response.data.LastEvaluatedKey != null){
                            lastkey = retpromise.$response.data.LastEvaluatedKey;
                            items = items.concat(retpromise.$response.data.Items);
                        }else{
                            items = items.concat(retpromise.$response.data.Items);
                            return items; 
                        } 
                    }else{
                        if(this.debugmode) console.error('|DBERR|Error fetching data from : ' + tablename + ':' +  retpromise.$response.error); 
                        return null; 
                    }
            }
        }catch(err){
            if(this.debugmode) console.log('|DBERR|Error fetching data from  :' + tablename  + ':' + err);
            //console.error('Error fetching data: ' + err); 
            return null;
        }

    }

    /**
     * This funciton is for querying dynamodb 
     *  
     * The parameters not used, should be passed as null to this function 
     * 
     * @param TableName - Name of table to be queried
     * @param IndexName  - Name of index 
     * @param KeyConditionExpression - Condition expression 
     * @param FilterExpression - Filter expression Run @ DB Lebel 
     * @param ProjectionExpression  - Attributes to be projected 
     * @param ExpressionAttributeValues  - Values passed to Expressions above 
     * @param ExpressionAttributeNames  - Attribute names passed in expression, this is applicable when column names are using keywords, like *status*
     * @param ExclusiveStartKey - Start reading from 
     * @param Limit  - No of rows to be returned 
     * @param ScanIndexForward - If to be queried in forward direction or reverse
     * @returns Resultset - Array of items  
     */
    async queryDB(TableName, IndexName, KeyConditionExpression,FilterExpression,ProjectionExpression,
         ExpressionAttributeValues, ExpressionAttributeNames,ExclusiveStartKey,Limit, ScanIndexForward,
         filterdeleted){

        try{
        
            var queryparams = this.getQueryObject(TableName,IndexName,KeyConditionExpression,FilterExpression,ProjectionExpression,
                ExpressionAttributeValues,ExpressionAttributeNames,ExclusiveStartKey,Limit, ScanIndexForward);
            
            this.connect();
            var items : any[] = [];
            var lastkey = null;

            while(true){
                    var retpromise;
                    if(lastkey != null){
                        queryparams.ExclusiveStartKey = lastkey;
                        retpromise= await this.dbClient.query(queryparams).promise();
                    }else{
                        retpromise= await this.dbClient.query(queryparams).promise();
                    }

                    if(retpromise.$response.data){
                        if(retpromise.$response.data.LastEvaluatedKey && retpromise.$response.data.LastEvaluatedKey != null){
                            lastkey = retpromise.$response.data.LastEvaluatedKey;
                            items = items.concat(retpromise.$response.data.Items);
                        }else{
                            items = items.concat(retpromise.$response.data.Items);
                            if(!filterdeleted) return items;
                            else return this.removeDeletedRows(items); 
                        } 
                    }else{
                        console.error('|DBQUERYERR| ERror fetching data from  :' + queryparams.TableName  + ' -- ' + retpromise.$response.error);
                        console.error(retpromise.$response.error); 
                        return null; 
                    }
            }
        }catch(err){
            console.error('|DBQUERYERR| ERror fetching data from  :' + queryparams.TableName  + ' -- ' + err);
            return null; 
        }


    }


  
    

  

    //Helper functions

    /**
     * Removes soft - deleted rows from array 
     * @param items - Original array
     * @returns Array of items without deleted values 
     */
    removeDeletedRows(items : any[]){
        var retarr = [];
        for(var item of items){
            if(!item._deleted) retarr.push(item);
        }
        return retarr;
    }

    /**
     * 
     * Creates an object which directly maps with dynamodb qurey command 
     * @param TableName - Name of table to be queried
     * @param IndexName  - Name of index 
     * @param KeyConditionExpression - Condition expression 
     * @param FilterExpression - Filter expression Run @ DB Lebel 
     * @param ProjectionExpression  - Attributes to be projected 
     * @param ExpressionAttributeValues  - Values passed to Expressions above 
     * @param ExpressionAttributeNames  - Attribute names passed in expression, this is applicable when column names are using keywords, like *status*
     * @param ExclusiveStartKey - Start reading from 
     * @param Limit  - No of rows to be returned 
     * @param ScanIndexForward - If to be queried in forward direction or reverse
     * @returns  Object which can be passed as parameter to dynamodb Query API
     */
    getQueryObject(TableName, IndexName, KeyConditionExpression,
        FilterExpression,ProjectionExpression, ExpressionAttributeValues,
         ExpressionAttributeNames,ExclusiveStartKey,Limit,ScanIndexForward){
        var queryobj = <DynamoqueryParams>{};
        queryobj.TableName = TableName;
        queryobj.IndexName = IndexName;
        queryobj.KeyConditionExpression = KeyConditionExpression;
        queryobj.FilterExpression = FilterExpression;
        queryobj.ProjectionExpression = ProjectionExpression;
        queryobj.ExpressionAttributeValues = ExpressionAttributeValues;
        queryobj.ExpressionAttributeNames = ExpressionAttributeNames;
        queryobj.ExclusiveStartKey = ExclusiveStartKey;
        queryobj.Limit = Limit;
        queryobj.ScanIndexForward = ScanIndexForward;
        return queryobj;
    }



}