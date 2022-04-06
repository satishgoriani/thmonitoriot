import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { AppdataService } from 'src/app/appdata.service';
import { APIService, Location } from 'src/app/API.service';
import { Constants } from 'src/app/constants';
import { LocationdetailsPage } from '../locationdetails/locationdetails.page';
import { SensorsPage } from '../sensors/sensors.page';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  locationobj: Location;
  dialogheight;
  statuscolor;
  statusmsg;
  statusimg;
  tempcolor;
  humiditycolor;

  constructor(
    private _router: Router,
    public alertService: AlertuiService,
    public dataService: AppdataService,
    public modalController: ModalController,
    public toastController: ToastController,
    public apiService: APIService
  ) {
    if (!this.dataService.isloggedin) {
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    //this.locationobj = <Location>this.dataService.crudobject;
    //console.log(JSON.stringify(this.locationobj));
    console.log('LOCATION INIT');
    this.locationobj = <Location>this.dataService.crudobject;
    //this.dialogheight = Math.round(window.innerHeight * 0.9);

    this.checkStatus();
  }

  ionViewWillEnter(){
    console.log('LOCATION VIEW WILL ENTER ');
    this.locationobj = <Location>this.dataService.crudobject;
    this.checkStatus();
  }

  closeDialog(){
    this._router.navigate(['/dashboard']);
  }


  async openForm(typ) {

    let root = document.documentElement;
    root.style.setProperty('--crud-form-height', this.dialogheight + 'px');

    if (typ == 'location') {
      const modal = await this.modalController.create({
        component: LocationdetailsPage,
        cssClass: 'crud-form-wrapper',
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    else{
      const modal = await this.modalController.create({
        component: SensorsPage,
        cssClass: 'crud-form-wrapper',
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }

  }


  async editLocation() {
    this.dataService.crudpurpose = Constants.EDIT;
    this.dataService.crudobject = this.dataService.getClone(this.locationobj);
    this._router.navigate(['/locationdetails']);
  }

  viewSensor() {
    this._router.navigate(['/sensors']);
  }

  checkStatus(){
    console.log("In check status..");
    this.statuscolor="success";
    this.statusmsg="All Good";
    this.tempcolor="primary";
    this.humiditycolor="accent";
    this.statusimg="../../assets/icon/smile.png";


    if(!this.checkTemp())
      this.setAlert();

    if(!this.checkHumidity())
    {
      this.setAlert();
      return;
    }

    /* SATISH PLEASE CHECK
    if(!this.locationobj.currentco2level || (this.locationobj.currentco2level < this.locationobj.co2levelmin) || (this.locationobj.currentco2level > this.locationobj.co2levelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentbarometricpressure || (this.locationobj.currentbarometricpressure < locationobj.barometricpressuremin) || (this.locationobj.currentbarometricpressure > locationobj.barometricpressuremax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentpm2pt5level || (this.locationobj.currentpm2pt5level < this.locationobj.pm2pt5levelmin) ||  (this.locationobj.currentpm2pt5level > this.locationobj.pm2pt5levelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentpm10level || (this.locationobj.currentpm10level < this.locationobj.pm10levelmin) ||  (this.locationobj.currentpm10level > this.locationobj.pm10levelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currenttvoclevel || (this.locationobj.currenttvoclevel < this.locationobj.tvoclevelmin) ||  (this.locationobj.currenttvoclevel > this.locationobj.tvoclevelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currenthcholevel || (this.locationobj.currenthcholevel < this.locationobj.hcholevelmin) ||  (this.locationobj.currenthcholevel > this.locationobj.hcholevelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentozonelevel || (this.locationobj.currentozonelevel < this.locationobj.ozonelevelmin) ||  (this.locationobj.currentozonelevel > this.locationobj.illuminationmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentillumination || (this.locationobj.currentillumination < this.locationobj.illuminationmin) ||  (this.locationobj.currentillumination > this.locationobj.illuminationmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentsoundlevel || (this.locationobj.currentsoundlevel < this.locationobj.soundlevelmin) ||  (this.locationobj.currentsoundlevel > this.locationobj.soundlevelmax))
    {
      this.setAlert();
      return;
    } */

  }

  checkTemp(){
    if(!this.locationobj.currenttemp || (this.locationobj.currenttemp < this.locationobj.temperaturemin) ||  (this.locationobj.currenttemp >  this.locationobj.temperaturemax))
    {
      this.tempcolor="danger";
      return false;
    }
    else
      return true;
  }

  checkHumidity(){
    if(!this.locationobj.currenthumidity || (this.locationobj.currenthumidity < this.locationobj.humiditymin) ||  (this.locationobj.currenthumidity >  this.locationobj.humiditymax))
    {
      this.humiditycolor="danger";
      return false;
    }
    else
      return true;
  }

  setAlert(){
    this.statuscolor="warning";
    this.statusmsg="Alert!";
    this.statusimg="../../assets/icon/sad.png";
  }


}
