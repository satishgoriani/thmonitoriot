import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertuiService } from '../alertui.service';
import { APIService, CompanyByEmailQuery } from '../API.service';
import {Router} from '@angular/router';
import { AppdataService } from '../appdata.service';
import { Apptheme } from '../apptheme';
import { I18n } from 'aws-amplify';
import { Constants } from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  email;
  userpass;
  isprocessing;

  constructor(
    public alertService : AlertuiService,
    public apiService : APIService,
    public dataService : AppdataService,
    private _router : Router
  ) {

}

  ngOnInit(){
    this.email = 'max@gmail.com';
    this.userpass = 'Max1234$';
    Apptheme.initializeTheme();
    console.log('SEtting language to french');
    I18n.setLanguage('fr');
    console.log ('Let me see ' + I18n.get("HELLO "));
  }

  ionViewDidEnter(){
    this.dataService.isloggedin = false;
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  /**
   * TODO:
   * 1. Toast Generation -- With Styling  //Check in the current UI
   * 2. If success, then route it locationtypes page .. Ionic routing
   */
  async login(){
    if(!this.email || this.email.trim().length == 0 ){
      this.alertService.displayToast('Username cannot be blank!', Constants.WARNING);
      return;
    }

    if(!this.userpass || this.userpass.trim().length == 0 ){
      this.alertService.displayToast('Password cannot be blank!', Constants.WARNING);
      return;
    }

    this.isprocessing = true;
    try{
          const ret = await this.apiService.CompanyByEmail(this.email);
          if(ret && ret.items && ret.items.length > 0){
            const company = ret.items[0];
            if(company.adminpass === this.userpass){
              console.log('COMPANY OBTAINED : ' + JSON.stringify(company));

              //Initialize app data
              const initdata = await this.dataService.initAppData();
              if(initdata){

                  this.dataService.company = company;
                  this.dataService.isloggedin = true;
                  this.isprocessing = false;

                  this._router.navigate(['/dashboard']);
              }else{
                  this.alertService.displayToast('Error initializing data, please try again!', Constants.FAIL);
              }
            }else{
              this.alertService.displayToast('Invalid credentials, please try again', Constants.WARNING);
            }
          }else{
            this.alertService.displayToast('Login failed, please try again!', Constants.FAIL);
         }
    }catch(err){
      this.alertService.displayToast('Error, please try again!', Constants.FAIL);
    }
    this.isprocessing = false;

  }
}
