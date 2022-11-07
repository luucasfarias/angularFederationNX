import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,) {
    const cookies = this.unserializeCookie(document.cookie);
    const gumgaToken = route.queryParamMap.get('token');
    const accessDenied = cookies.find(
      (cookie) => cookie.key === 'accessDenied'
    );

    const allowedPaths = ['', '/home'];

    if (gumgaToken && allowedPaths.includes((route as any)._routerState.url)) {
      return true;
    }

    if (!gumgaToken) {
      this.redirect();
      return false;
    }

    if (!accessDenied || +accessDenied.value) {
      this.redirect();
      return false;
    }

    Utils.setLocalStorageItem('gumgaToken', gumgaToken);

    return true;
  }

  private unserializeCookie(cookie: string): KeyValue<string, string>[] {
    if (!cookie) {
      return [];
    }

    const cookies = cookie.split(';');
    const cookieList: KeyValue<string, string>[] = [];

    cookies.forEach((pieceOfCookie) => {
      const [key, value] = pieceOfCookie.split('=');
      const newCookie = { key: key.trim(), value };
      cookieList.push(newCookie);
    });

    return cookieList;
  }

  private redirect = () => this.router.navigate(['/access-denied']);
  
}
