import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile-component/profile.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvYvpzZy-yQXEWbEliKRgFZ2QT0FaDTZs'
    }),
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
