import { API_ENDPOINS } from './../_config/endpoints';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpService) { }

  login(data){
    return this.http.POST(API_ENDPOINS.LOGIN, )
  }
}
