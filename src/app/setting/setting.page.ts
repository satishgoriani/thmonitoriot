import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertuiService } from '../alertui.service';
import { AppdataService } from '../appdata.service';
import { Apptheme } from '../apptheme';
import { Constants } from '../constants';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  public themeList;
  public selectedTheme;

  chkpwd = false;
  chkhdr = false;
  chkthm = false;
  chkdefault = false;

  oldpass;
  newpass;
  repass;

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
    //Change password
    if (this.chkpwd == true)
    {
      //console.log("in change password");
      if(!this.oldpass || this.oldpass.trim().length == 0 ){
        this.alertService.displayToast('Old Password cannot be blank!', Constants.WARNING)
        return;
      }else{

      }
    }

    //Change headers
    if(this.chkhdr == true)
    {
      console.log("in change headers");
    }

    //Change theme
    if (this.chkthm == true)
    {
      Apptheme.setTheme(this.selectedTheme);
    }

    this.alertService.displayToast('Settings saved successfully!', Constants.SUCCESS)
    this.close();
  }

  ngOnInit() {
    this.themeList = Apptheme.getThemeList();
    this.selectedTheme = Apptheme.getCurrentTheme();
    console.log('************** Current thmee ' + this.selectedTheme);
  }

  toggleText(contentid) {
    var moreText = document.getElementById(contentid);

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
    } else {
       moreText.style.display = "none";
    }
  }


}
