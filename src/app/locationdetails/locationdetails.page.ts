import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { AppdataService } from 'src/app/appdata.service';
import { APIService, CreateLocationInput, Location, UpdateLocationInput } from 'src/app/API.service';
import { Constants } from 'src/app/constants';

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
    public apiService: APIService,
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
      this.operation = 'Add';
      this.locationobj = {} as Location;
    } else {
      this.operation = 'Edit';
      this.locationobj = <Location>this.dataService.crudobject;

    }
  }

  ionViewWillEnter(){
    this.initObject();
  }


  closeDialog() {
    //this.modalController.dismiss();
    this._router.navigate(['/dashboard']);
  }

  async editLocation() {
    if (this.validateLocation()) {
      const locationData = {} as UpdateLocationInput;
      locationData.id = this.locationobj.id;
      locationData.locationtypeID = this.locationobj.locationtypeID;
      locationData.name = this.locationobj.name;
      locationData.temperaturemin = this.locationobj.temperaturemin;
      locationData.temperaturemax = this.locationobj.temperaturemax;
      locationData.sensors = this.locationobj.sensors;
      locationData._version = this.locationobj._version;

      try {
        const ret = await this.apiService.UpdateLocation(locationData);
        this.dataService.updateLocationList(ret, Constants.EDIT);
        this.alertService.displayToast('Location updated successfully', Constants.SUCCESS)
      } catch (err) {
        this.alertService.displayToast('Error updating Location, please try again!', Constants.FAIL);
        return;
      }

      this.closeDialog();
    }

  }


  validateLocation() {


    if (!this.locationobj.name || this.locationobj.name.trim().length == 0) {
      this.alertService.displayToast('Please enter location number', Constants.WARNING);
      return false;
    }

    if (!this.locationobj.locationtypeID || this.locationobj.locationtypeID.trim().length == 0) {
      this.alertService.displayToast('Please enter material category', Constants.WARNING);
      return false;
    }

    if (!this.locationobj.temperaturemin || this.locationobj.temperaturemin.toString().length == 0) {
      this.alertService.displayToast('Please enter min temperature', Constants.WARNING);
      return false;
    }

    if (!this.locationobj.temperaturemax || this.locationobj.temperaturemax.toString().length == 0) {
      this.alertService.displayToast('Please enter max temperature', Constants.WARNING);
      return false;
    }

    return true;
  }

  async addLocation() {

    if (this.validateLocation()) {
      const locationData = {} as CreateLocationInput;
      locationData.locationtypeID = this.locationobj.locationtypeID;
      locationData.name = this.locationobj.name;
      locationData.temperaturemin = this.locationobj.temperaturemin;
      locationData.temperaturemax = this.locationobj.temperaturemax;
      locationData.sensors = this.locationobj.sensors;

      try {
        const ret = await this.apiService.CreateLocation(locationData);
        this.dataService.updateLocationList(ret, Constants.CREATE);
        this.alertService.displayToast('Location added successfully', Constants.SUCCESS)

      } catch (err) {
        this.alertService.displayToast('Error adding Location, please try again!', Constants.FAIL);
        return;
      }

      this.closeDialog();

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
