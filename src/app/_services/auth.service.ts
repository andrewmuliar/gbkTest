import { ILoginBody, LoginDTO } from '../_interfaces/auth.interface';
import { API_ENDPOINS } from '../_config/endpoints';
import { Injectable } from '@angular/core';
import { HttpService, RestResult } from './http.service';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public http:HttpService) { }

  login(data:ILoginBody):Observable<RestResult<LoginDTO>>{
    return this.http.POST<LoginDTO>(API_ENDPOINS.LOGIN, data );
  }

  register(data:ILoginBody):Observable<RestResult<LoginDTO>>{
    return this.http.POST(API_ENDPOINS.REGISTER, data );
  }

  logOut():Observable<RestResult<any>>{
    return this.http.POST(API_ENDPOINS.LOGOUT, {});
  }

}
