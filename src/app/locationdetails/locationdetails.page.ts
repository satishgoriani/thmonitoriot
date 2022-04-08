import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { AppdataService } from 'src/app/appdata.service';
import { Constants } from 'src/app/constants';
import { Location } from '../domain/thmonitorschema';

@Component({
  selector: 'app-locationdetails',
  templateUrl: './locationdetails.page.html',
  styleUrls: ['./locationdetails.page.scss'],
})
export class LocationdetailsPage implements OnInit {

  operation;
  locationobj: Location;

  constructor(
    private _router: Router,
    public alertService: AlertuiService,
    public dataService: AppdataService,
    public modalController: ModalController,
    public toastController: ToastController,

    public cdr: ChangeDetectorRef
  ) {
    if(!this.dataService.isloggedin){
      this._router.navigate(['/']);
    }
    this.locationobj = {} as Location;
   }

  ngOnInit() {
      console.log('*** location details *** HERE IN INIT');
      this.initObject();
  }

  initObject(){

    if (this.dataService.crudpurpose == Constants.CREATE) {
      this.operation = 'New';
      this.locationobj = {} as Location;
      this.locationobj.userid = this.dataService.company.id;
    } else {
      this.operation = 'Edit';
      this.locationobj = <Location>this.dataService.crudobject;

    }
  }

  ionViewWillEnter(){
    this.initObject();
  }


  close() {
    //this.modalController.dismiss();
    this._router.navigate(['/dashboard']);
  }

  segmentChanged() {
    console.log("in segment changed");

    if(this.operation == 'Edit')
      return;

    if(this.locationobj.locationtypeID)
    {
      console.log("option selected...");
      try{
        const locationtype = this.dataService.getLocationtypeForId(this.locationobj.locationtypeID);
        if (locationtype) {
          //use default from locationtype
          if(locationtype.temperaturemin!=null)
            this.locationobj.temperaturemin = locationtype.temperaturemin;

          if(locationtype.temperaturemax!=null)
            this.locationobj.temperaturemax = locationtype.temperaturemax;

          if(locationtype.humiditymin!=null)
            this.locationobj.humiditymin = locationtype.humiditymin;

          if(locationtype.humiditymax!=null)
            this.locationobj.humiditymax = locationtype.humiditymax;

          if(locationtype.co2levelmin!=null)
            this.locationobj.co2levelmin = locationtype.co2levelmin;

          if(locationtype.co2levelmax!=null)
            this.locationobj.co2levelmax = locationtype.co2levelmax;

          if(locationtype.barometricpressuremin!=null)
            this.locationobj.barometricpressuremin = locationtype.barometricpressuremin;

          if(locationtype.barometricpressuremax!=null)
            this.locationobj.barometricpressuremax = locationtype.barometricpressuremax;

          if(locationtype.pm2pt5levelmin!=null)
            this.locationobj.pm2pt5levelmin = locationtype.pm2pt5levelmin;

          if(locationtype.pm2pt5levelmax!=null)
            this.locationobj.pm2pt5levelmax = locationtype.pm2pt5levelmax;

          if(locationtype.pm10levelmin!=null)
            this.locationobj.pm10levelmin = locationtype.pm10levelmin;

          if(locationtype.pm10levelmax!=null)
            this.locationobj.pm10levelmax = locationtype.pm10levelmax;

          if(locationtype.tvoclevelmin!=null)
            this.locationobj.tvoclevelmin = locationtype.tvoclevelmin;

          if(locationtype.tvoclevelmax!=null)
            this.locationobj.tvoclevelmax = locationtype.tvoclevelmax;

          if(locationtype.hcholevelmin!=null)
            this.locationobj.hcholevelmin = locationtype.hcholevelmin;

          if(locationtype.hcholevelmax!=null)
            this.locationobj.hcholevelmax = locationtype.hcholevelmax;

          if(locationtype.ozonelevelmin!=null)
            this.locationobj.ozonelevelmin = locationtype.ozonelevelmin;

          if(locationtype.ozonelevelmax!=null)
            this.locationobj.ozonelevelmax = locationtype.ozonelevelmax;

          if(locationtype.illuminationmin!=null)
            this.locationobj.illuminationmin = locationtype.illuminationmin;

          if(locationtype.illuminationmax!=null)
            this.locationobj.illuminationmax = locationtype.illuminationmax;

          if(locationtype.soundmin!=null)
            this.locationobj.soundmin = locationtype.soundmin;

          if(locationtype.soundmax!=null)
            this.locationobj.soundmax = locationtype.soundmax;
        }
     }catch(err){
       console.log("Error in fetching locationtype from list");
     }
    }
  }


  async editLocation() {
    if (this.validateLocation()) {

    const ret = await this.dataService.editLocation(this.locationobj);
    if(!ret){
      this.alertService.displayToast('Error updating Location, please try again!', Constants.FAIL);
      return;
    }
    this.dataService.updateLocationList(ret, Constants.EDIT);
    this.alertService.displayToast('Location updated successfully', Constants.SUCCESS)

      this.close();
    }
  }

  validateLocation() {
    if (!this.locationobj.name || this.locationobj.name.trim().length == 0) {
      this.alertService.displayToast('Please enter location name', Constants.WARNING);
      return false;
    }

    if (this.locationobj.temperaturemin==null || this.locationobj.temperaturemax==null) {
      this.alertService.displayToast('Please enter permissible temperature range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.humiditymin==null || this.locationobj.humiditymax==null) {
      this.alertService.displayToast('Please enter permissible humidity range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.co2levelmin==null || this.locationobj.co2levelmax==null) {
      this.alertService.displayToast('Please enter permissible CO2 range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.barometricpressuremin==null || this.locationobj.barometricpressuremax==null) {
      this.alertService.displayToast('Please enter permissible barometric pressure range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.pm2pt5levelmin==null || this.locationobj.pm2pt5levelmax==null) {
      this.alertService.displayToast('Please enter permissible PM2.5 range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.pm10levelmin==null || this.locationobj.pm10levelmax==null) {
      this.alertService.displayToast('Please enter permissible PM10 range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.tvoclevelmin==null || this.locationobj.tvoclevelmax==null) {
      this.alertService.displayToast('Please enter permissible TVOC range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.hcholevelmin==null || this.locationobj.hcholevelmax==null) {
      this.alertService.displayToast('Please enter permissible HCHO range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.ozonelevelmin==null || this.locationobj.ozonelevelmax==null) {
      this.alertService.displayToast('Please enter permissible Ozone range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.illuminationmin==null || this.locationobj.illuminationmax==null) {
      this.alertService.displayToast('Please enter permissible Light range',Constants.WARNING);
      return false;
    }

    if (this.locationobj.soundmin==null || this.locationobj.soundmax==null) {
      this.alertService.displayToast('Please enter permissible Sound range',Constants.WARNING);
      return false;
    }

    return true;
  }

  async addLocation() {

    if (this.validateLocation()) {
      try {
        const ret = await this.dataService.addLocation(this.locationobj);
        this.dataService.updateLocationList(ret, Constants.CREATE);
        this.alertService.displayToast('Location added successfully', Constants.SUCCESS)
      } catch (err) {
        this.alertService.displayToast('Error adding Location, please try again!', Constants.FAIL);
        return;
      }

      this.close();
    }
  }

  public save() {
    if (this.dataService.crudpurpose == Constants.CREATE) {
      this.addLocation();
    } else {
      this.editLocation();
    }
  }
}
