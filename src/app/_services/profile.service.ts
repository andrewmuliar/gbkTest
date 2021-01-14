import { API_ENDPOINS } from './../_config/endpoints';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService, RestResult } from './http.service';
import { IProfile } from '../_interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpService) { }

  getProfile():Observable<RestResult<IProfile>>{
    return this.http.GET<IProfile>(API_ENDPOINS.GET_CURRENT_USER);
  }

  getProfileByUserId(user_id:number):Observable<RestResult<IProfile>>{
    return this.http.GET<IProfile>(API_ENDPOINS.GET_USER_BY_ID + user_id);
  }

  updateProfile(data){
    return this.http.PUT(API_ENDPOINS.UPDATE_USER, data);
  }

  getCurrentUser():Observable<RestResult<IProfile>>{
    return this.http.GET<IProfile>(API_ENDPOINS.GET_CURRENT_USER);
  }
}
