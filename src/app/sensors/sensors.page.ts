import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { APIService, Sensor,DeleteSensorInput } from 'src/app/API.service';
import { AppdataService } from '../appdata.service';
import { ResolveStart, Router } from '@angular/router';
import { Constants } from '../constants';
//import { SensordetailsPage } from '../modals/sensordetails/sensordetails.page';
import { AlertController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { SensordetailsPage } from '../modals/sensordetails/sensordetails.page';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.page.html',
  styleUrls: ['./sensors.page.scss'],
})
export class SensorsPage implements OnInit {

  sensorobj : Sensor;
  strsearch = '';

  constructor(
      private _router : Router,
      public dataService : AppdataService,
      public modalController: ModalController,
      public alertController: AlertController,
      public alertService : AlertuiService,
      private apiService: APIService) {

      if(!this.dataService.isloggedin){
      this._router.navigate(['/']);
    }
  }


  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.modalController.dismiss();
  }


  dialogheight;

  ngOnInit() {
    this.dialogheight = Math.round(window.innerHeight * 0.4);
  }

  async openForm(){

        let root = document.documentElement;
        root.style.setProperty('--crud-form-height', this.dialogheight + 'px');


        const modal = await this.modalController.create({
          component: SensordetailsPage,
          cssClass: 'crud-form-wrapper',
          swipeToClose: true,
          backdropDismiss: true,
      });
      return await modal.present();
  }

  async addSensor(){
      this.dataService.crudpurpose = Constants.CREATE;
      this.openForm();
  }

  async editSensor(sensor){
    this.dataService.crudpurpose = Constants.EDIT;
    this.dataService.crudobject = this.dataService.getClone(sensor);
    this.openForm();
  }

  async confirmDelete(sensor){
    this.sensorobj = {} as Sensor;
    this.sensorobj = <Sensor> this.dataService.getClone(sensor);

    const headerstr = 'Delete Sensor';
    const messagestr = 'Do you want to delete sensor: ' + this.sensorobj.serialnumber + '?';

    const isconfirmed = await this.alertService.confirmDelete(headerstr,messagestr);
    if (isconfirmed){
      //console.log('Deleting sensor...');
      this.deleteSensor();
    }
  }

  async deleteSensor(){
    if(this.sensorobj.id && this.sensorobj.id.length > 0){
        const sensorData = {} as DeleteSensorInput;
        sensorData.id = this.sensorobj.id;
        sensorData._version = this.sensorobj._version;
        //console.log('Valid sensor id...');

        try{
          const ret = await this.apiService.DeleteSensor(sensorData);
          //console.log('Inside try-->', ret);
          this.dataService.updateSensorList(ret,Constants.DELETE);
          this.alertService.displayToast('Sensor deleted successfully',Constants.SUCCESS)
        }catch(err){
          this.alertService.displayToast('Error deleting the sensor, please try again!',Constants.FAIL);
          return;
        }
    }else{
      console.log('Invalid sensor id...');
    }
  }

  back(){
    this._router.navigate(['/'])
  }
  next(){
      this._router.navigate(['/customers'])
  }
}
