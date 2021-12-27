import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationtypesPageRoutingModule } from './locationtypes-routing.module';

import { LocationtypesPage } from './locationtypes.page';
import { ShareComponentModule } from '../components/sharecomponents.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationtypesPageRoutingModule,
    ShareComponentModule,
    Ng2SearchPipeModule
  ],
  declarations: [LocationtypesPage]
})
export class LocationtypesPageModule {}
