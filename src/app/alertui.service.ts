import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AlertuiService {

  constructor(public alertController : AlertController, public toastController : ToastController) { }


  public async showError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      cssClass: 'warning-toast',
      duration: 2000
    });
    toast.present();
  }

  public async displayToast(msg: string, alerttype: number) {
    var stricon;
    var strcssclass;

    if(alerttype==Constants.SUCCESS){
      stricon = 'checkmark-circle';
      strcssclass = 'success-toast';
    }else if(alerttype==Constants.FAIL){
      stricon = 'ban';
      strcssclass = 'fail-toast';
    }else if (alerttype==Constants.WARNING){
      stricon = 'warning';
      strcssclass = 'warning-toast';
    }

    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: strcssclass,
      buttons: [
        {
          side: 'start',
          icon: stricon
        }
      ]
    });
    toast.present();
  }


  async confirmDelete(headerstr, messagestr) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-alert',
      header: headerstr,
      message: messagestr,
      mode: 'ios',
      buttons: [
        {
          cssClass: 'alertButtonN',
          text: Constants.CONFIRMCANCEL,
          role : Constants.CONFIRMCANCEL
        }, {
          cssClass: 'alertButtonY',
          text: Constants.CONFIRMOKAY,
          role: Constants.CONFIRMOKAY,
        }
      ]
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    if (role == Constants.CONFIRMOKAY){
      return true;
    }
    else{
      return false;
    }
  }
}
