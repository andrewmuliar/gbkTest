import { API_ENDPOINS } from './../_config/endpoints';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpService) { }

  public POST(url:string, body:any):Observable<any>{
    return this.http.POST(API_ENDPOINS + url, {body});
  }

  public GET(url:string):Observable<any>{
    return this.http.GET(API_ENDPOINS + url);
  }

  public PUT(url:string, data:any){
    return this.http.PUT(API_ENDPOINS + url, {data});
  }
}
