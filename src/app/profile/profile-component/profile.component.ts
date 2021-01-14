import { ProfileService } from './../../_services/profile.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

interface MapsPoints {
  latitude:number;
  longitude:number;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  usersMarkers:MapsPoints[] = [];

  constructor(private profileService:ProfileService,
              private router:Router,
              private userService:UserService,
              private auth:AuthService) { }

  ngOnInit() {
    this.profileService.getCurrentUser().subscribe( response => {
      console.log('response', response);
    })
    this.userService.getUser().subscribe( response => {
      console.log('data', response);
      response.result.filter( item => item.lat && item.lon).forEach( item => {
        this.usersMarkers.push({latitude:+item.lat, longitude:+item.lon});
      })
      console.log(this.usersMarkers);
    })
  }

  logout(){
    this.auth.logOut().subscribe( data => {
      console.log('data', data);
      this.router.navigate(['/']);
    })
  }

}
