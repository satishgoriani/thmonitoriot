import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { APIService, Location, Company, Sensor, Locationtype} from './API.service';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  locationtypelist: Locationtype[];
  locationlist: Location[];
  sensorlist : Sensor[];

  company: Company; //Currently logged in company
  isloggedin;
  crudobject: any;
  crudpurpose;

  dashboardlocationtypeid;
  dashboardlocationlist;

  constructor(public apiService: APIService) { }

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
    if(locationtypeId === "0")
      return "All";

    for (let i = 0; i < this.locationtypelist.length; i++) {
      if (this.locationtypelist[i].id === locationtypeId) {
        return this.locationtypelist[i].name;
      }
    }
  }

  getLocationForId(locationid){
    for(var location of this.locationlist){
      if(location.id == locationid) return location;
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
    this.locationtypelist = [];

    const locationtypes = await this.apiService.ListLocationtypes();
    if (locationtypes && locationtypes.items) {
      for (var locationtype of locationtypes.items) {
        if (!locationtype._deleted) {
          this.locationtypelist.push(locationtype);
        }
      }
    }

    this.locationtypelist.sort((a:Locationtype, b: Locationtype)=> (a.name)  < (b.name)  ? -1 : 1 );
  }

  setSensorString(location : Location){
    console.log('SENSORS **' + JSON.stringify(location.sensors));
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
    this.locationlist = [];

    const locations = await this.apiService.ListLocations();
    if (locations && locations.items) {
      for (var location of locations.items) {
        if (!location._deleted) {
          location.locationtypename = this.getLocationtypeName(location.locationtypeID);
          this.setSensorString(location);
          this.locationlist.push(location);
        }
      }
    }
  }

  async initSensors() {
    this.sensorlist = [];

    const sensors = await this.apiService.ListSensors();
    if (sensors && sensors.items) {
      for (var sensor of sensors.items) {
        if (!sensor._deleted) {
          this.sensorlist.push(sensor);
        }
      }
    }

  }

  async initAppData(){
    try{
      await this.initLocationtypes();
      await this.initSensors();
      await this.initLocations();
      return true;
    } catch (err) {
      console.log('Error ' + JSON.stringify(err));
      return false;
    }
  }

  getClone(object) {
    return JSON.parse(JSON.stringify(object));
  }

  clearTimer(){
  }
}
