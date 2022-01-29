export interface Locationtype {
    name: string;       
    userid: string;   //Cognito Id of logged in company user, this will be partion key 
    id: string;        
    
    createdAt: number;   //Timestamp           
    updatedAt: number;   //Timestamp
    createdBy: string | null;
    updatedBy: string | null; 
    objectversion: number;           
    _deleted?: boolean | null;  
    _lastChangedAt: number; //Timestamp 
}


export interface Location{
    name: string;       //Location Name
    userid: string;  //Cognito Id of logged in company user, this will be partion key 
    id: string;    //Sort key 
    
    locationtypeID: string; 
    temperaturemin?: number | null;
    temperaturemax?: number | null;
    humiditymi?: number | null;
    humiditymax?: number | null;
    currenttemp?: number | null;
    currenthumidity?: number | null;
    locationtypename?: string | null;
    sensors?: Array<string | null> | null;
    sensorsasstring?: string | null;
    createdAt: number;          //Timestamp           
    updatedAt: number;   //Timestamp 
    createdBy: string | null;
    updatedBy: string | null; 
    objectversion: number;           
    _deleted?: boolean | null;  
    _lastChangedAt: number; //Timestamp 
}

export interface Sensor {
    userid:string; 
    id: string; //Sort key
    serialnumber: string;
    remarks?: string | null;
    lastreadtemp?: number | null;
    lastreadhumidity?: number | null;
    lastreceivedon?: number | null;
    companyID?: string | null;
    createdAt: number;  //Timestamp           
    updatedAt: number;  //Timestamp 
    createdBy: string | null;
    updatedBy: string | null; 
    objectversion: number;           
    _deleted?: boolean | null;  
    _lastChangedAt: number; //Timestamp 
};


export interface Company {
    id: string;
    name: string;

}





