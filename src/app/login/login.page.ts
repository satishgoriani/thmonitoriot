import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertuiService } from '../alertui.service';
import {Router} from '@angular/router';
import { AppdataService } from '../appdata.service';
import { Dynamodbservice } from '../services/dynamodbservice';

import { Apptheme } from '../apptheme';
import { I18n } from 'aws-amplify';
import { Constants } from '../constants';
import { Auth } from 'aws-amplify';
import * as AWS  from 'aws-sdk';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Company } from '../domain/thmonitorschema';
import { MenuController } from '@ionic/angular';


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
    public dataService : AppdataService,
    public dynamodbService : Dynamodbservice,
    private _router : Router,
    public menuCtrl: MenuController
  ) {
      //this.menuCtrl.enable(false);
  }

  ngOnInit(){
    //this.email = 'max@gmail.com';
    //this.userpass = 'Max1234$';
    this.menuCtrl.enable(false);
    this.email = 'Nanavati';
    this.userpass = 'Nanvati1235$';


   // Apptheme.initializeTheme();
    //console.log('SEtting language to french');
    //I18n.setLanguage('fr');
    //console.log ('Let me see ' + I18n.get("HELLO "));
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
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


        const user = await Auth.signIn(this.email, this.userpass);
        const credentials = await Auth.currentCredentials();

        var retstatus = await this.dynamodbService.initializeCredsAndService(credentials,this.email,true);
        if(!retstatus) {
          this.alertService.displayToast('Error, please try again!', Constants.FAIL);
        }

        this.dataService.cognitoid = credentials.identityId;

        const initdata = await this.dataService.initAppData();
        if(initdata){

            //TODO ** Add params to cognito, Hardcoded for now
            this.dataService.company = <Company>{};
            this.dataService.company.id = credentials.identityId;
            this.dataService.company.name = 'Nanavati';
            //

            this.dataService.isloggedin = true;
            this.isprocessing = false;

            this._router.navigate(['/dashboard']);
        }else{
            this.alertService.displayToast('Error initializing data, please try again!', Constants.FAIL);
        }

    }catch(err){
      console.log('Error signing in ' + err);
      this.alertService.displayToast('Error, please try again!', Constants.FAIL);
    }
    this.isprocessing = false;

  }
}
