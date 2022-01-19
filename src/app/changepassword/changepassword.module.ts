import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangepasswordPageRoutingModule } from './changepassword-routing.module';

import { ChangepasswordPage } from './changepassword.page';
import { ShareComponentModule } from '../components/sharecomponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangepasswordPageRoutingModule,
    ShareComponentModule
  ],
  declarations: [ChangepasswordPage]
})
export class ChangepasswordPageModule {}
