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

  showhdr = false;
  showthm = false;
  chkdefault = false;


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

    Apptheme.setTheme(this.selectedTheme);

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
      if(contentid=='changehdr')
        this.showhdr=true;
      if(contentid=='changethm')
        this.showthm=true;
    } else {
       moreText.style.display = "none";
       if(contentid=='changehdr')
        this.showhdr=false;
       if(contentid=='changethm')
        this.showthm=false;
    }
  }


}
