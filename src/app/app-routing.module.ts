import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'locationdetails',
    loadChildren: () => import('./locationdetails/locationdetails.module').then(m => m.LocationdetailsPageModule)
  },
  {
    path: 'locationtypes',
    loadChildren: () => import('./locationtypes/locationtypes.module').then(m => m.LocationtypesPageModule)
  },
  {
    path: 'locationtypedetails',
    loadChildren: () => import('./modals/locationtypedetails/locationtypedetails.module').then(m => m.LocationtypedetailsPageModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'sensordetails',
    loadChildren: () => import('./modals/sensordetails/sensordetails.module').then( m => m.SensordetailsPageModule)
  },
  {
    path: 'sensors',
    loadChildren: () => import('./sensors/sensors.module').then( m => m.SensorsPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
