import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../appdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(
    private _router : Router,
    public dataService : AppdataService)
  {
    if(!this.dataService.isloggedin){
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
