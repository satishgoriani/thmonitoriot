import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { APIService, CreateSensorInput, Sensor, UpdateSensorInput } from 'src/app/API.service';
import { AppdataService } from 'src/app/appdata.service';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-sensordetails',
  templateUrl: './sensordetails.page.html',
  styleUrls: ['./sensordetails.page.scss'],
})
export class SensordetailsPage implements OnInit {

  operation;
  sensorobj : Sensor;

  constructor(
            private _router : Router,
            public alertService : AlertuiService,
            public dataService : AppdataService,
            public modalController: ModalController,
            public apiService: APIService) {

              if(!this.dataService.isloggedin){
                this._router.navigate(['/']);
              }
        }

  ngOnInit() {
    if(this.dataService.crudpurpose == Constants.CREATE){
      this.operation = 'Add';
      this.sensorobj = {} as Sensor;
      //this.sensorobj. = this.dataService.company.id;

    }else{
      this.operation = 'Edit';
      this.sensorobj = <Sensor> this.dataService.crudobject;

    }
  }

  checkDuplicate(){
    for(var sensor of this.dataService.sensorlist){
      if(sensor.id != this.sensorobj.id && sensor.serialnumber.trim().toLowerCase() == this.sensorobj.serialnumber.trim().toLowerCase()){
        this.alertService.displayToast('Sensor serial number already exists',Constants.WARNING);
        return false; 
      }
    }
    return true;
  }

  ionViewWillEnter(){

  }

  closeDialog(){
    this.modalController.dismiss();
  }

  async editSensor(){
    if(this.validateSensor()){

      const sensorData = {} as UpdateSensorInput;
      sensorData.id = this.sensorobj.id;
      sensorData.companyID = this.sensorobj.companyID;
      sensorData.remarks = this.sensorobj.remarks;
      sensorData.serialnumber = this.sensorobj.serialnumber;
      sensorData._version = this.sensorobj._version;

      try{
        const ret = await this.apiService.UpdateSensor(sensorData);
        this.dataService.updateSensorList(ret,Constants.EDIT);
        this.alertService.displayToast('Sensor updated successfully',Constants.SUCCESS);
      }catch(err){
        this.alertService.displayToast('Error updating sensor, please try again!',Constants.FAIL);
        return;
      }
      this.closeDialog();
    }

 }

 
 validateSensor(){
  if(!this.sensorobj.serialnumber || this.sensorobj.serialnumber.trim().length == 0){
    this.alertService.displayToast('Please enter serial number',Constants.WARNING);
      return false;
  }

  if (!this.sensorobj.remarks || this.sensorobj.remarks.trim().length == 0) {
    this.alertService.displayToast('Please enter sensor details',Constants.WARNING);
    return false;
  }
  
  return this.checkDuplicate();
}


  async addSensor(){

     if(this.validateSensor()){

          const sensorData = {} as CreateSensorInput;
          sensorData.companyID = this.sensorobj.companyID;
          sensorData.serialnumber = this.sensorobj.serialnumber;
          sensorData.remarks = this.sensorobj.remarks;

          try{
            const ret = await this.apiService.CreateSensor(sensorData);
            this.dataService.updateSensorList(ret,Constants.CREATE);
            this.alertService.displayToast('Sensor added successfully',Constants.SUCCESS);
          }catch(err){
            this.alertService.displayToast('Error adding sensor, please try again!', Constants.FAIL);
            return;
          }
          this.closeDialog();
     }

  }

  public save(){
    if(this.dataService.crudpurpose == Constants.CREATE){
      this.addSensor();
    }else{
      this.editSensor();
    }
  }

}
