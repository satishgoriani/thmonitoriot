import { Component, Input, OnInit } from '@angular/core';

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
  

  constructor() { this.showMenu = 'false'; this.flat = 'false'  }

  ngOnInit() {}

}
