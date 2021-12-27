import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationtypesPage } from './locationtypes.page';

const routes: Routes = [
  {
    path: '',
    component: LocationtypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationtypesPageRoutingModule {}
