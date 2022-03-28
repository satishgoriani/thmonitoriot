import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationtypedetailsPageRoutingModule } from './locationtypedetails-routing.module';

import { LocationtypedetailsPage } from './locationtypedetails.page';
import { ShareComponentModule } from '../components/sharecomponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationtypedetailsPageRoutingModule,
    ShareComponentModule
  ],
  declarations: [LocationtypedetailsPage]
})
export class LocationtypedetailsPageModule {}
