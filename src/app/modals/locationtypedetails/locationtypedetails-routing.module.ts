import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationtypedetailsPage } from './locationtypedetails.page';

const routes: Routes = [
  {
    path: '',
    component: LocationtypedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationtypedetailsPageRoutingModule {}
