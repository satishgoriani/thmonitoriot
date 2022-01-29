import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppdataService } from '../appdata.service';
import { ResolveStart, Router } from '@angular/router';
import { Constants } from '../constants';
import { LocationtypedetailsPage } from '../modals/locationtypedetails/locationtypedetails.page';
import { AlertController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { Locationtype } from '../domain/thmonitorschema';

@Component({
  selector: 'app-locationtypes',
  templateUrl: './locationtypes.page.html',
  styleUrls: ['./locationtypes.page.scss'],
})
export class LocationtypesPage implements OnInit {

  locationtypeobj : Locationtype;
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
    this.dialogheight = Math.round(window.innerHeight * 0.25);
  }

  async openForm(){

        let root = document.documentElement;
        root.style.setProperty('--crud-form-height', this.dialogheight + 'px');
       // console.log('Modal height',this.dialogheight);

        const modal = await this.modalController.create({
          component: LocationtypedetailsPage,
          cssClass: 'crud-form-wrapper',
          swipeToClose: true,
          backdropDismiss: true
      });
      return await modal.present();
  }

  async addLocationtype(){
      this.dataService.crudpurpose = Constants.CREATE;
      this.openForm();
  }

  async editLocationtype(locationtype){
    this.dataService.crudpurpose = Constants.EDIT;
    this.dataService.crudobject = this.dataService.getClone(locationtype);
    this.openForm();
  }

  async confirmDelete(locationtype){
    this.locationtypeobj = {} as Locationtype;
    this.locationtypeobj = <Locationtype> this.dataService.getClone(locationtype);

    const headerstr = 'Delete Location Type';
    const messagestr = 'Do you want to delete Location Type: ' + this.locationtypeobj.name + '?';

    const isconfirmed = await this.alertService.confirmDelete(headerstr,messagestr);
    if (isconfirmed){
      //console.log('Deleting locationtype...');
      this.deleteLocationtype();
    }
  }

  async deleteLocationtype(){
      const ret = await this.dataService.deleteLocationtype(this.locationtypeobj);
      if(!ret){
        this.alertService.displayToast('Error deleting the Location Type, please try again!',Constants.FAIL);
        return;
      }
      this.dataService.updateLocationtypeList(ret,Constants.DELETE);
      this.alertService.displayToast('Location Type deleted successfully',Constants.SUCCESS);
  }

  back(){
    this._router.navigate(['/'])
  }
}
