import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getMaxListeners } from 'process';
import { AlertuiService } from '../alertui.service';
import { AppdataService } from '../appdata.service';
//import { Apptheme } from '../apptheme';
import { Constants } from '../constants';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  //public themeList;
  //public selectedTheme;

  stremail;
  strphone;

  constructor(
    private _router : Router,
    public alertService: AlertuiService,
    public dataService : AppdataService
  ) {

    if(!this.dataService.isloggedin){
      this._router.navigate(['/']);
    }
  }


  close(){
    this._router.navigate(['/dashboard']);
  }
  save(){

    //Apptheme.setTheme(this.selectedTheme);
    if(!this.validateEmail())
    {
      this.alertService.displayToast('Please enter valid email(s)',Constants.WARNING);
      return;
    }
    if(!this.validatePhone())
    {
      this.alertService.displayToast('Please enter valid phone no(s)',Constants.WARNING);
      return;
    }

    this.alertService.displayToast('Settings saved successfully!', Constants.SUCCESS)
    this.close();
  }

  ngOnInit() {
    /*
    this.themeList = Apptheme.getThemeList();
    this.selectedTheme = Apptheme.getCurrentTheme();
    console.log('************** Current thmee ' + this.selectedTheme);*/
  }

  validateEmail()
  {
     try{
       const emailarray = this.stremail.split(",");
       for(var email of emailarray)
       {
        email = email.trim();
        if(this.checkEmail(email) == false)
          return false;
       }
     }catch(err){
        return false;
     }
     return true;
  }

  checkEmail(emailString)
  {
    try {
      let pattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
      let valid = pattern.test(emailString);
      return valid;
    } catch (TypeError) {
      return false;
    }
  }

  validatePhone()
  {
     try{
       const phonearray = this.strphone.split(",");
       for(var phone of phonearray)
       {
        phone = phone.trim();
        console.log(phone);
        if(this.checkPhone(phone) == false)
          return false;
       }
     }catch(err){
        return false;
     }
     return true;
  }

  checkPhone(phoneString)
  {
    try {
      let pattern = new RegExp("^[0-9]{10}$");
      let valid = pattern.test(phoneString);
      return valid;
    } catch (TypeError) {
      return false;
    }
  }
}
