import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensordetailsPageRoutingModule } from './sensordetails-routing.module';

import { SensordetailsPage } from './sensordetails.page';
import { ShareComponentModule } from 'src/app/components/sharecomponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensordetailsPageRoutingModule,
    ShareComponentModule
  ],
  declarations: [SensordetailsPage]
})
export class SensordetailsPageModule {}
