import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppdataService } from '../appdata.service';
import { ResolveStart, Router } from '@angular/router';
import { Constants } from '../constants';
//import { SensordetailsPage } from '../modals/sensordetails/sensordetails.page';
import { AlertController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { SensordetailsPage } from '../modals/sensordetails/sensordetails.page';
import { Sensor } from '../domain/thmonitorschema';

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
      ) {

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
      const ret = await this.dataService.deleteSensor(this.sensorobj);
      if(!ret){
        this.alertService.displayToast('Error deleting the sensor, please try again!',Constants.FAIL);
        return;  
      }
      this.dataService.updateSensorList(ret,Constants.DELETE);
      this.alertService.displayToast('Sensor deleted successfully',Constants.SUCCESS)
    
  
  }

  back(){
    this._router.navigate(['/'])
  }
  next(){
      this._router.navigate(['/customers'])
  }
}
