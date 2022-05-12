import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../appdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

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
