import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from './appdata.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;

  constructor(private dataService : AppdataService, private _router : Router) {
    this.sideMenu();

  }

  sideMenu(){
    this.navigate =
    [
      {
        title: "Company Set Up",
        icon: "business",
        children: [
          {
            title: "Location Types",
            url: "/locationtypes",
            icon: "business-outline"
          },
          {
            title: "Sensors",
            url: "/sensors",
            icon: "thermometer-outline"
          }
        ]
      },
      {
        title: "Settings",
        url: "/setting",
        icon: "settings-sharp"
      },
      {
        title: "Logout",
        url: "/",
        icon: "log-out"
      }
    ]
  }
}
