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
      this.operation = 'Add';
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


  closeDialog() {
    //this.modalController.dismiss();
    this._router.navigate(['/dashboard']);
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
  
      this.closeDialog();
    }
  }

  validateLocation() {
    if (!this.locationobj.name || this.locationobj.name.trim().length == 0) {
      this.alertService.displayToast('Please enter location number', Constants.WARNING);
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

    if (!this.locationobj.humiditymi || this.locationobj.humiditymi.toString().length == 0) {
      this.alertService.displayToast('Please enter min humidity', Constants.WARNING);
      return false;
    }

    if (!this.locationobj.humiditymax || this.locationobj.humiditymax.toString().length == 0) {
      this.alertService.displayToast('Please enter max humidity', Constants.WARNING);
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
