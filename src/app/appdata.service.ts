import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Constants } from './constants';
import { Company, Location, Locationtype, Sensor,Sensortype } from './domain/thmonitorschema';
import { Dynamodbservice } from './services/dynamodbservice';
import * as cloneDeep from 'lodash/cloneDeep';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  locationtypelist: Locationtype[];
  locationlist: Location[];
  sensortypelist: Sensortype[];
  sensorlist : Sensor[];

  company: Company; //Currently logged in company
  isloggedin;
  crudobject: any;
  crudpurpose;

  cognitoid;

  dashboardlocationtypeid;
  dashboardlocationlist;


  constructor(public dbService : Dynamodbservice) { }

  updateSensorList(newsensor: Sensor, crudoperation) {
    if (crudoperation == Constants.CREATE) {
      this.sensorlist.push(newsensor);
    } else if (crudoperation == Constants.EDIT) {
      for (let i = 0; i < this.sensorlist.length; i++) {
        if (this.sensorlist[i].id === newsensor.id) {
          this.sensorlist[i] = newsensor;
          return;
        }
      }
    } else if (crudoperation == Constants.DELETE) {
      //code for delete
      for (let i = 0; i < this.sensorlist.length; i++) {
        if (this.sensorlist[i].id === newsensor.id) {
          this.sensorlist.splice(i, 1);
          return;
        }
      }
    }

    this.sensorlist.sort((a:Sensor, b: Sensor)=> (a.serialnumber)  < (b.serialnumber)  ? -1 : 1 );

  }

  updateLocationtypeList(newlocationtype: Locationtype, crudoperation) {
    if (crudoperation == Constants.CREATE) {
      this.locationtypelist.push(newlocationtype);
    } else if (crudoperation == Constants.EDIT) {
      for (let i = 0; i < this.locationtypelist.length; i++) {
        if (this.locationtypelist[i].id === newlocationtype.id) {
          this.locationtypelist[i] = newlocationtype;
          return;
        }
      }
    } else if (crudoperation == Constants.DELETE) {
      //code for delete
      for (let i = 0; i < this.locationtypelist.length; i++) {
        if (this.locationtypelist[i].id === newlocationtype.id) {
          this.locationtypelist.splice(i, 1);
          return;
        }
      }
    }
    this.locationtypelist.sort((a:Locationtype, b: Locationtype)=> (a.name)  < (b.name)  ? -1 : 1 );

  }

  getLocationtypeName(locationtypeId)
  {

    for (let i = 0; i < this.locationtypelist.length; i++) {
      if (this.locationtypelist[i].id === locationtypeId) {
        return this.locationtypelist[i].name;
      }
    }
    return "";
  }

  getLocationName(locationId)
  {

    for (let i = 0; i < this.locationlist.length; i++) {
      if (this.locationlist[i].id === locationId) {
        return this.locationlist[i].name;
      }
    }
    return "";
  }


  getSensortypeName(typeid)
  {

    for (let i = 0; i < this.sensortypelist.length; i++) {
      if (this.sensortypelist[i].id === typeid) {
        return this.sensortypelist[i].name;
      }
    }
    return "";
  }

  getLocationForId(locationid){
    for(var location of this.locationlist){
      if(location.id == locationid) return location;
    }
    return null;
  }

  getLocationtypeForId(locationtypeid){
    for(var locationtype of this.locationtypelist){
      if(locationtype.id == locationtypeid) return locationtype;
    }
    return null;
  }


  setDashboardLocationList(){
    this.dashboardlocationlist = [];
    for(var location of this.locationlist){
      if(location.locationtypeID == this.dashboardlocationtypeid) this.dashboardlocationlist.push(location);
    }

    this.dashboardlocationlist.sort((a:Location, b: Location)=> (a.name)  < (b.name)  ? -1 : 1 );
    this.dashboardlocationlist = [... this.dashboardlocationlist];
  }

  updateLocationList(newloc: Location, crudoperation) {
    newloc.locationtypename = this.getLocationtypeName(newloc.locationtypeID);

    this.setSensorString(newloc);

    if (crudoperation == Constants.CREATE) {
      this.locationlist.push(newloc);
    } else if (crudoperation == Constants.EDIT) {
      for (let i = 0; i < this.locationlist.length; i++) {
        if (this.locationlist[i].id === newloc.id) {
          this.locationlist[i] = newloc;
          return;
        }
      }
    } else if (crudoperation == Constants.DELETE) {
      //code for delete
      for (let i = 0; i < this.locationlist.length; i++) {
        if (this.locationlist[i].id === newloc.id) {
          this.locationlist.splice(i, 1);
          return;
        }
      }
    }

    this.setDashboardLocationList();

  }

  async initLocationtypes() {
      this.locationtypelist = await this.dbService.queryDB ("thmonitor_locationtype",null,
                          "userid = :userid",  null,null,{":userid" : this.cognitoid},null,null,null,true,true);

      if(this.locationtypelist == null) return false;
      this.locationtypelist.sort((a:Locationtype, b: Locationtype)=> (a.name)  < (b.name)  ? -1 : 1 );

      console.log('***Setting dashboard locaiton type ');
      if(this.locationtypelist.length > 0){
        this.dashboardlocationtypeid = this.locationtypelist[0].id;
      }
      console.log('***Setting dashboard locaiton type ' + this.dashboardlocationtypeid);
      return true;

  }


  async  getLocations() {
    return await this.dbService.queryDB ("thmonitor_location",null,
                        "userid = :userid",  null,null,{":userid" : this.cognitoid},null,null,null,true,true);

  }


  async  getSensorReadings(startloctimestamp, endloctimestamp) {
    return await this.dbService.queryDB ("thmonitor_readings",null,
                        "userid = :userid and locationtimestamp between :starttime and :endtime",  null,null,{":userid" : this.cognitoid, ":starttime" : startloctimestamp, ":endtime" : endloctimestamp},null,null,null,true,true);

  }


  setSensorString(location : Location){
    if(location.sensors && location.sensors.length > 0){
        var sensorstring = "";
        for(var sensor of location.sensors){
          sensorstring = sensorstring + this.getSensorSerial(sensor) + ", ";
        }

        if(sensorstring.length > 2)
        sensorstring = sensorstring.substring(0,sensorstring.length - 2);
        location.sensorsasstring = sensorstring;

    }
  }

  getSensorSerial(sensorid){
    for(var sensor of this.sensorlist){
      if(sensor.id == sensorid) return sensor.serialnumber;
    }
    return "";
  }

  async initLocations() {

    this.locationlist = await this.dbService.queryDB ("thmonitor_location",null,
    "userid = :userid",  null,null,{":userid" : this.cognitoid},null,null,null,true,true);

    if(this.locationlist == null) return false;
    this.locationlist.sort((a:Location, b: Location)=> (a.name)  < (b.name)  ? -1 : 1 );

    for (var location of this.locationlist) {
          location.locationtypename = this.getLocationtypeName(location.locationtypeID);
          this.setSensorString(location);
    }

    return true;
 }

  async initSensors() {
    this.sensorlist = await this.dbService.queryDB ("thmonitor_sensor",null,
                        "userid = :userid",  null,null,{":userid" : this.cognitoid},null,null,null,true,true);

    
    for (var sensor of this.sensorlist){
      sensor.locationname = this.getLocationName(sensor.locationID);
      sensor.sensortypename = this.getSensortypeName(sensor.sensortypeID);
    
    }

    if(this.sensorlist == null) return false;
    return true;
  }

  
  async initSensortypes() {
      this.sensortypelist = await this.dbService.queryDB ("thmonitor_sensortype",null,
                        "userid = :userid",  null,null,{":userid" : this.cognitoid},null,null,null,true,true);
      if(this.sensortypelist == null) return false;
      return true;
  }


  async initAppData(){
    try{
      console.log('In init App data ...');
      await this.initLocationtypes();
      console.log('Location types initialzied ...');

      await this.initLocations();
      console.log('Dat aInitiazlied ...');

      await this.initSensortypes();
      console.log('Sensor types initialized ...');

      await this.initSensors();
      console.log('Sensors initialized ...');

      
      
      return true;
    } catch (err) {

      console.log('Error ' + JSON.stringify(err));
      return false;
    }
  }

  getClone(object) {
    //return JSON.parse(JSON.stringify(object));
    return cloneDeep(object);
  }

  clearTimer(){
  }

  /********* NEW DML FUNCTIONS */
  /* Location type */
  public async addLocationtype(locationtype : Locationtype) {
    locationtype.id = "" + this.dbService.getTime();
    return await this.dbService.putItem("thmonitor_locationtype",locationtype,true,false,"attribute_not_exists(id)",null);
  }

  public async editLocationtype(locationtype : Locationtype) {
    return await this.dbService.editItem("thmonitor_locationtype",locationtype);
  }

  public async deleteLocationtype(locationtype : Locationtype) {
    return await this.dbService.putItem("thmonitor_locationtype",locationtype,false,true,null,null);
  }


  /* Location */
  public async addLocation(location : Location) {
    location.id = "" +  this.dbService.getTime();
    return await this.dbService.putItem("thmonitor_location",location,true,false,"attribute_not_exists(id)",null);
  }

  public async editLocation(location : Location) {
    return await this.dbService.editItem("thmonitor_location",location);
  }

  public async deleteLocation(location : Location) {
    return await this.dbService.putItem("thmonitor_location",location,false,true,null,null);
  }


  /* Sensor */
  public async addSensor(sensor : Sensor) {
    sensor.id = "" +  this.dbService.getTime();
    return await this.dbService.putItem("thmonitor_sensor",sensor,true,false,"attribute_not_exists(id)",null);
  }

  public async editSensor(sensor : Sensor) {
    return await this.dbService.editItem("thmonitor_sensor",sensor);
  }

  public async deleteSensor(sensor : Sensor) {
    return await this.dbService.putItem("thmonitor_sensor",sensor,false,true,null,null);
  }




}
