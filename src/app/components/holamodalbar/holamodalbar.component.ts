import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-holamodalbar',
  templateUrl: './holamodalbar.component.html',
  styleUrls: ['./holamodalbar.component.scss'],
})
export class HolamodalbarComponent implements OnInit {

  @Input() title: string; 

  constructor(public modalController : ModalController) { }

  closeDialog(){
    this.modalController.dismiss();
  }
  ngOnInit() {}

}
