import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { APIService, CreateLocationtypeInput, Locationtype, UpdateLocationtypeInput } from 'src/app/API.service';
import { AppdataService } from 'src/app/appdata.service';
import { Constants } from 'src/app/constants';

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
            public apiService: APIService) {

              if(!this.dataService.isloggedin){
                this._router.navigate(['/']);
              }
        }

  ngOnInit() {
    if(this.dataService.crudpurpose == Constants.CREATE){
      this.operation = 'Add';
      this.locationtypeobj = {} as Locationtype;
      this.locationtypeobj.companyID = this.dataService.company.id;

    }else{
      this.operation = 'Edit';
      this.locationtypeobj = <Locationtype> this.dataService.crudobject;

    }
  }

  checkDuplicate(){
    for(var locationtype of this.dataService.locationtypelist){
      if(locationtype.id != this.locationtypeobj.id && locationtype.name.trim().toLowerCase() == this.locationtypeobj.name.trim().toLowerCase()){
        this.alertService.displayToast('Locationtype name already exists',Constants.WARNING);
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

  async editLocationtype(){
    if(this.locationtypeobj.name && this.locationtypeobj.name.length > 0){

      if(!this.checkDuplicate()) return;

      const locationtypeData = {} as UpdateLocationtypeInput;
      locationtypeData.id = this.locationtypeobj.id;
      locationtypeData.companyID = this.locationtypeobj.companyID;
      locationtypeData.name = this.locationtypeobj.name;
      locationtypeData._version = this.locationtypeobj._version;

      try{
        const ret = await this.apiService.UpdateLocationtype(locationtypeData);
        this.dataService.updateLocationtypeList(ret,Constants.EDIT);
        this.alertService.displayToast('Locationtype updated successfully',Constants.SUCCESS);
      }catch(err){
        this.alertService.displayToast('Error updating locationtype, please try again!',Constants.FAIL);
        return;
      }
      this.closeDialog();
    }else{
      this.alertService.displayToast('Please enter locationtype name',Constants.WARNING);
    }

 }

  async addLocationtype(){
     if(this.locationtypeobj.name && this.locationtypeobj.name.trim().length > 0){

          if(!this.checkDuplicate()) return;

          const locationtypeData = {} as CreateLocationtypeInput;
          locationtypeData.companyID = this.locationtypeobj.companyID;
          locationtypeData.name = this.locationtypeobj.name;


          try{
            const ret = await this.apiService.CreateLocationtype(locationtypeData);
            this.dataService.updateLocationtypeList(ret,Constants.CREATE);
            this.alertService.displayToast('Locationtype added successfully',Constants.SUCCESS);
          }catch(err){
            this.alertService.displayToast('Error adding locationtype, please try again!', Constants.FAIL);
            return;
          }
          this.closeDialog();
     }else{
       this.alertService.displayToast('Please enter locationtype name',Constants.WARNING);
     }

  }

  public save(){
    if(this.dataService.crudpurpose == Constants.CREATE){
      this.addLocationtype();
    }else{
      this.editLocationtype();
    }
  }

}
