export interface Locationtype {
    name: string;
    userid: string;   //Cognito Id of logged in company user, this will be partion key
    id: string;
    temperaturemin?: number | null;
    temperaturemax?: number | null;
    humiditymin?: number | null;
    humiditymax?: number | null;
    barometricpressuremin?: number | null;
    barometricpressuremax?: number | null;
    co2levelmin?: number | null;
    co2levelmax?: number | null;
    pm2pt5levelmin?: number | null;
    pm2pt5levelmax?: number | null;
    pm10levelmin?: number | null;
    pm10levelmax?: number | null;
    tvoclevelmin?: number | null;
    tvoclevelmax?: number | null;
    hcholevelmin?: number | null;
    hcholevelmax?: number | null;
    ozonelevelmin?: number | null;
    ozonelevelmax?: number | null;
    illuminationmin?: number | null;
    illuminationmax?: number | null;
    soundmin?: number | null;
    soundmax?: number | null;
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
    humiditymin?: number | null;
    humiditymax?: number | null;
    barometricpressuremin?: number | null;
    barometricpressuremax?: number | null;
    co2levelmin?: number | null;
    co2levelmax?: number | null;
    pm2pt5levelmin?: number | null;
    pm2pt5levelmax?: number | null;
    pm10levelmin?: number | null;
    pm10levelmax?: number | null;
    tvoclevelmin?: number | null;
    tvoclevelmax?: number | null;
    hcholevelmin?: number | null;
    hcholevelmax?: number | null;
    ozonelevelmin?: number | null;
    ozonelevelmax?: number | null;
    illuminationmin?: number | null;
    illuminationmax?: number | null;
    soundmin?: number | null;
    soundmax?: number | null;
    currenttemp?: number | null;
    currenthumidity?: number | null;
    currentbarometricpressure?: number | null;
    currentco2level?: number | null;
    currentpm2pt5level?: number | null;
    currentpm10level?: number | null;
    currenttvoclevel?: number | null;
    currenthcholevel?: number | null;
    currentozonelevel?: number | null;
    currentillumination?: number | null;
    currentsound?: number | null;
    locationtypename?: string | null;
    sensors?: Array<string | null> | null;
    sensorsasstring?: string | null;
    highpriority?: boolean | null;
    createdAt: number;    //Timestamp
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
    companyID?: string | null;
    locationID?: string | null;
    locationname?:string | null;
    sensortypeID?: string | null;
    sensortypename?: string | null;
    model?: string | null;
    createdAt: number;  //Timestamp
    updatedAt: number;  //Timestamp
    createdBy: string | null;
    updatedBy: string | null;
    objectversion: number;
    _deleted?: boolean | null;
    _lastChangedAt: number; //Timestamp
};

export interface User {
  userid:string;
  id: string; //Sort key
  name: string;
  mobileno?: string | null;
  email?: string | null;
  usertype?: string;
  password?: string | null;
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

export interface Sensortype {
  id: string;
  name: string;
}

