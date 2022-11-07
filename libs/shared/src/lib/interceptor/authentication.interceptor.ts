import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utils } from '../utils/utils';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const language = Utils.getLocalStorageItem('lang') || 'pt';
    const gumgaToken = Utils.getLocalStorageItem('gumgaToken') || '';
    const headers = { 'Accept-Language': language, gumgaToken };
    const authRequest = request.clone({setHeaders: headers});
    return next.handle(authRequest);
  }
}
