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

  constructor(public dataService : AppdataService, private _router : Router) {
    this.sideMenu();

  }

  sideMenu(){
    this.navigate =
    [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: "grid-outline"
      },
      {
        title: "Reports & Graphs",
        url: "/reports",
        icon: "bar-chart-outline"
      },
      {
        title: "Location Types",
        url: "/locationtypes",
        icon: "business-outline"
      },
      {
        title: "Sensors",
        url: "/sensors",
        icon: "hardware-chip-outline"
      },
      /*
      {
        title: "Users",
        url: "/users",
        icon: "people-outline"
      },
      {
        title: "My profile",
        url: "/profile",
        icon: "person-circle-outline"
      },*/
      {
        title: "Settings",
        url: "/settings",
        icon: "settings-sharp"
      },
      {
        title: "Change Password",
        url: "/changepassword",
        icon: "key-outline"
      }
    ]
  }
}
