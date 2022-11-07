import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpBackend, HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthenticationInterceptor } from 'libs/shared/src';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from '@anymarket-frontend/ui';
import { AuthenticationInterceptor } from '@anymarket-frontend/shared';


export const HTTP_NO_INTERCEPTORS = new InjectionToken('HTTP_NO_INTERCEPTORS');

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    {
      provide: HTTP_NO_INTERCEPTORS, deps: [HttpBackend],
      useFactory: (httpHandler: HttpHandler) => {
        return new HttpClient(httpHandler);
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
