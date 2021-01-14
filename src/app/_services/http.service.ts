import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

export interface RestResult<T>{
  status:string;
  messages:string;
  code:number
  result:T
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  public POST<T>(url:string, body:any):Observable<RestResult<T>>{
    return this.http.post<RestResult<T>>(environment.apiDomen + url, body, {})
  }

  public GET<T>(url:string):Observable<RestResult<T>>{
    return this.http.get<RestResult<T>>(environment.apiDomen + url, {})
  }

  public PUT<T>(url:string, data:any):Observable<RestResult<T>>{
    return this.http.put<RestResult<T>>(environment.apiDomen + url, data, {})
  }
}
