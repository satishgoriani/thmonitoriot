import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})
export class Httpdataservice {

    constructor(private http: HttpClient) { }

    async httpRequest(url,method,body,headers?)  {
        try{
            var response;
            if(!headers) headers = { 'content-type': 'application/json'}  
           
            switch (method){
                case 'GET':
                    response = await this.http.get(url,{'headers' : headers}).toPromise();
                    return response;
                case 'POST':
                    response = await this.http.post(url,body,{'headers' : headers}).toPromise();
                    return response;
                case 'PUT':
                    response = await this.http.put(url,body,{'headers' : headers}).toPromise();
                    return response;
            }
            
        }catch(err){
            console.error('Error in fetching data from: ' + url + ' -- ' + err.toString());
            return null;
        }
    }




}