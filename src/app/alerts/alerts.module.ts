import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertsPageRoutingModule } from './alerts-routing.module';
import { AlertsPage } from './alerts.page';
import { ShareComponentModule } from '../components/sharecomponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertsPageRoutingModule,
    ShareComponentModule
  ],
  declarations: [AlertsPage]
})
export class AlertsPageModule {}
