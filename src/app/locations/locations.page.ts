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
    this.dialogheight = Math.round(window.innerHeight * 0.9);
  }

  ionViewWillEnter(){
    console.log('CHAMBERS VIEW WILL ENTER ');
    this.locationobj = <Location>this.dataService.crudobject;
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

  viewStorage() {
      this._router.navigate(['/storage']);
  }
  viewSensor() {
    this._router.navigate(['/sensors']);
  }
}
