import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
//import { APIService, CreateLocationtypeInput, Locationtype, UpdateLocationtypeInput } from 'src/app/API.service';
import { AppdataService } from 'src/app/appdata.service';
import { Constants } from 'src/app/constants';
import { Locationtype } from 'src/app/domain/thmonitorschema';

@Component({
  selector: 'app-locationtypedetails',
  templateUrl: './locationtypedetails.page.html',
  styleUrls: ['./locationtypedetails.page.scss'],
})
export class LocationtypedetailsPage implements OnInit {

  operation;
  locationtypeobj : Locationtype;

  constructor(
            private _router : Router,
            public alertService : AlertuiService,
            public dataService : AppdataService,
            public modalController: ModalController,
            ) {

              if(!this.dataService.isloggedin){
                this._router.navigate(['/']);
              }
        }

  ngOnInit() {
    if(this.dataService.crudpurpose == Constants.CREATE){
      this.operation = 'New';
      this.locationtypeobj = {} as Locationtype;
      this.locationtypeobj.userid = this.dataService.company.id;

    }else{
      this.operation = 'Edit';
      this.locationtypeobj = <Locationtype> this.dataService.crudobject;
    }
    //console.log(this.locationtypeobj);
  }

  checkDuplicate(){
    for(var locationtype of this.dataService.locationtypelist){
      if(locationtype.id != this.locationtypeobj.id && locationtype.name.trim().toLowerCase() == this.locationtypeobj.name.trim().toLowerCase()){
        this.alertService.displayToast('Location Type name already exists',Constants.WARNING);
        return false;
      }
    }
    return true;
  }

  ionViewWillEnter(){

  }

  close(){
    //this.modalController.dismiss();
    this._router.navigate(['/locationtypes']);
  }

  async editLocationtype(){
    if(this.locationtypeobj.name && this.locationtypeobj.name.length > 0){

      if(!this.checkDuplicate()) return;
      const ret = await this.dataService.editLocationtype(this.locationtypeobj);
      if(!ret){
        this.alertService.displayToast('Error updating Location Type, please try again!',Constants.FAIL);
        return;
      }
      this.dataService.updateLocationtypeList(ret,Constants.EDIT);
      this.alertService.displayToast('Location Type updated successfully',Constants.SUCCESS);

      this.close();
    }else{
      this.alertService.displayToast('Please enter Location Type name',Constants.WARNING);
    }

 }

  async addLocationtype(){
    //console.log('in addLocationtype ...');

     if(this.locationtypeobj.name && this.locationtypeobj.name.trim().length > 0){
          if(!this.checkDuplicate()) return;
          const ret = await this.dataService.addLocationtype(this.locationtypeobj);
          if(!ret){
            this.alertService.displayToast('Error adding Location type, please try again!', Constants.FAIL);
            return;
          }

          this.dataService.updateLocationtypeList(ret,Constants.CREATE);
          this.alertService.displayToast('Location type added successfully',Constants.SUCCESS);

          this.close();
     }else{
      //console.log('in empty name...');
       this.alertService.displayToast('Please enter Location type name',Constants.WARNING);
     }

  }

  public save(){
    //console.log('in save ...');
    if(this.dataService.crudpurpose == Constants.CREATE){
      //console.log('inside save create...');
      this.addLocationtype();
    }else{
      this.editLocationtype();
    }
  }

}
