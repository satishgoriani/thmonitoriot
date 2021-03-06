import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from '../appdata.service';
import { LocationdetailsPage } from '../locationdetails/locationdetails.page';
import { MenuController, ModalController } from '@ionic/angular';
import { Constants } from '../constants';
import { AlertController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { LocationsPage } from '../locations/locations.page';
import { DatePipe } from '@angular/common';

import { HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  locationtypeList: any = [];
  n: number = 1;
  selectedId: any;
  dialogheight;
  defaultlocationtype: any;
  defaultfilter: any;
  curdatetime;

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
    this.modalController.dismiss();
    this.menuCtrl.enable(false);
    //this.dataService.isloggedin = false;

    //this._router.navigate(['/']);
    //this._router.navigate(['/'], { replaceUrl: true });


  }

  filterlist = [
    /*
    {type: "All"},{type: "Temp-High-alert"},{type: "Temp-low-alert"},{type: "Storage-Empty"},
    {type: "Storage < 50% occupied"},{type: "Storage > 50% occupied"},{type: "Dairy Products"},
    {type: "Frozen Foods"},{type: "Grains"}*/
    { type: "All Locations"},{ type: "Any Alert" },{ type: "Temperature alert"}, { type: "Humidity alert"},{ type: "CO2 alert"},{ type: "Barometer pressure alert"},{ type: "PM2.5 alert"},{ type: "PM10 alert"},{ type: "TVOC alert"},{ type: "HCHO alert"},{ type: "Light alert" },{ type: "Sound alert" }, { type: "No alert (All Okay)" }
  ]

  constructor(
    private _router: Router,
    public dataService: AppdataService,
    public modalController: ModalController,
    public alertController: AlertController,
    public alertService: AlertuiService,
    public datePipe : DatePipe,
    public menuCtrl: MenuController
  ) {

    if(!this.dataService.isloggedin){
        this._router.navigate(['/']);
    }

    this.curdatetime = new Date().getTime();
    this.defaultfilter = this.filterlist[0].type;
  }

  ngOnInit() {
    this.dialogheight = Math.round(window.innerHeight * .9);
    this.menuCtrl.enable(true);
    console.log('Location type ' + this.dataService.dashboardlocationtypeid);
  }


  ionViewWillEnter(){
    this.segmentChanged();
    this.startLocationPolling();
    this.menuCtrl.enable(true);

  }

  ionViewWillLeave(){
    console.log('|Clearingtimeout')
    clearTimeout(this.refreshTimer);
  }

  async openForm(typ: string) {

    let root = document.documentElement;
    root.style.setProperty('--crud-form-height', this.dialogheight + 'px');

    if (typ === 'add') {
      const modal = await this.modalController.create({
        component: LocationdetailsPage,
        cssClass: 'crud-form-wrapper',
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    } else {
      const modal = await this.modalController.create({
        component: LocationsPage,
        cssClass: 'crud-form-wrapper',
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }

  }

  async addLocation() {
    this.dataService.crudpurpose = Constants.CREATE;
    //this.openForm('add');
    this._router.navigate(['/locationdetails']);
  }

  async segmentChanged() {

    if(this.dataService.locationtypelist)
      this.defaultlocationtype = this.dataService.locationtypelist[0].id;

    /*on dashboard page load first locationtype name value is set as active segment */
    if (!this.dataService.dashboardlocationtypeid) {
      this.dataService.dashboardlocationtypeid = this.defaultlocationtype;
    }
    this.dataService.setDashboardLocationList();

  }

    refreshTimer;

    
    async startLocationPolling(){
      try{
          const locations = await this.dataService.getLocations();
          if (locations && locations.length > 0) {
            for (var location of locations) {
              //var curlocation = this.dataService.getLocationForId(location.id);
              //if ( curlocation && location.currenttemp != curlocation.currenttemp) {
                  this.dataService.updateLocationList(location, Constants.EDIT);
                  this.segmentChanged();
              //}
            }
          }

      }catch(err){}

      //if(this.dataService.isuserloggedin)
      this.refreshTimer = setTimeout(()=>{this.startLocationPolling()},10000);
    }



  async viewLocation(chamb) {
    this.dataService.crudobject = this.dataService.getClone(chamb);
    this._router.navigate(['/locations']);
    //this.openForm('view');
  }

}
