import { ProfileService } from './../../_services/profile.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService, private router:Router, private auth:AuthService) { }

  ngOnInit() {
    this.profileService.getCurrentUser().subscribe( response => {
      console.log('response', response);
    })
  }

  logout(){
    this.auth.logOut().subscribe( data => {
      console.log('data', data);
      this.router.navigate(['/']);
    })
  }

}
