import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
    path:'profile', loadChildren: () => import('./profile/profile.module').then( m => m.ProfileModule)
  },
  {
    path:'location', loadChildren: () => import('./location/location.module').then( m => m.LocationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
