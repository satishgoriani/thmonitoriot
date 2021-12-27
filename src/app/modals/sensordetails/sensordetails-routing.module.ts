import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensordetailsPage } from './sensordetails.page';

const routes: Routes = [
  {
    path: '',
    component: SensordetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensordetailsPageRoutingModule {}
