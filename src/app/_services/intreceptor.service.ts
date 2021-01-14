import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINS } from '../_config/endpoints';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  readonly NO_TOKEN_RESTS = [API_ENDPOINS.LOGIN]

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request', request);
    request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });
    return next.handle(request);
  }
}