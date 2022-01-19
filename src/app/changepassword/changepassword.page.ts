import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertuiService } from '../alertui.service';
import { AppdataService } from '../appdata.service';
import { Constants } from '../constants';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

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


  ngOnInit() {
  }

  close(){
    this._router.navigate(['/dashboard']);
  }

  save(){

    //console.log("in change password");
      if(!this.oldpass || this.oldpass.trim().length == 0 ){
        this.alertService.displayToast('Old Password cannot be blank!', Constants.WARNING)
        return;
      }else{

      }


      this.alertService.displayToast('Settings saved successfully!', Constants.SUCCESS)
    this.close();
  }
}
