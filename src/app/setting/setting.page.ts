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

  emailnot;
  whatsappnot;
  stremail;
  strphone;
  emailpattern;
  phonepattern;

  constructor(
    private _router : Router,
    public alertService: AlertuiService,
    public dataService : AppdataService
  ) {

    if(!this.dataService.isloggedin){
      this._router.navigate(['/']);
    }

    this.emailpattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
    this.phonepattern = new RegExp("^[0-9]{10}$");

  }


  close(){
    this._router.navigate(['/dashboard']);
  }
  save(){

    //Apptheme.setTheme(this.selectedTheme);
    if(this.emailnot && !this.validatePattern(this.stremail,this.emailpattern))
    {
      this.alertService.displayToast('Please enter valid email(s)',Constants.WARNING);
      return;
    }
    if(this.whatsappnot && !this.validatePattern(this.strphone,this.phonepattern))
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

  validatePattern(inputstr,patternstr)
  {
     try{
       const strarray = inputstr.split(",");
       for(var str of strarray)
       {
        str = str.trim();
        try {
          let valid = patternstr.test(str);
          if(!valid)
            return false;
        } catch (TypeError) {
            return false;
        }
       }
     }catch(err){
        return false;
     }
     return true;
  }
}
