import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-holatoolbar',
  templateUrl: './holatoolbar.component.html',
  styleUrls: ['./holatoolbar.component.scss'],
})
export class HolatoolbarComponent implements OnInit {

  @Input() title: string;
  @Input() showMenu : string;
  @Input() flat : string;
  @Input() iconName : string;


  constructor(private _router : Router,) { this.showMenu = 'false'; this.flat = 'false'  }

  ngOnInit() {}

  opennot(){
    this._router.navigate(['/notifications']);
  }
}
