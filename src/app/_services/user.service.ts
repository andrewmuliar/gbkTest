import { Observable } from 'rxjs';
import { HttpService, RestResult } from './http.service';
import { Injectable } from '@angular/core';
import { API_ENDPOINS } from '../_config/endpoints';
import { IProfile } from '../_interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http:HttpService) { }

  getUser():Observable<RestResult<IProfile[]>>{
    return this.http.GET<IProfile[]>(API_ENDPOINS.GET_USER)
  }
}
