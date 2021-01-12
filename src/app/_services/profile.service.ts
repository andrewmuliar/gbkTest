import { API_ENDPOINS } from './../_config/endpoints';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpService) { }

  getProfile():Observable<any>{
    return this.http.GET(API_ENDPOINS.GET_CURRENT_USER);
  }

  getProfileByUserId(user_id:number){
    return this.http.GET(API_ENDPOINS.GET_USER_BY_ID + user_id);
  }

  updateProfile(data){
    return this.http.PUT(API_ENDPOINS.CURRENT_USER, data);
  }

  getCurrentUser(){
    return this.http.GET(API_ENDPOINS.GET_CURRENT_USER)
  }
}
