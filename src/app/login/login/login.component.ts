import { AuthService } from '../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/_interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  errorText: string;

  formGroup : FormGroup = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", [Validators.required])
});

  constructor( private loginService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  register():void{
    this.loginService
    .register({email:this.formGroup.get('email').value, password:this.formGroup.get('password').value})
    .subscribe( response => {
      this.initUser(response.result);
    },
    error => {
      this.errorText = error
      console.log('error', error);
    });
  }

  login(){
    this.loginService
    .login({email:this.formGroup.get('email').value, password:this.formGroup.get('password').value})
    .subscribe( response => {
      this.initUser(response.result);
    },
    error => {
      this.errorText = error
      console.log('error', error);
    });
  }

  initUser(response:LoginDTO){
    this.errorText = '';
    sessionStorage.setItem('token', response.token);
    this.router.navigate(['/profile']);
  }

}
