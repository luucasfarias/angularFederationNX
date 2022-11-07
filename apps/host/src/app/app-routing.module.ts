import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthenticationGuard } from 'libs/shared/src';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () =>
      import('catalog-team/Module').then((m) => m.RemoteEntryModule)
  },
  {
    path: 'logistic',
    loadChildren: () =>
      import('logistic-team/Module').then((m) => m.RemoteEntryModule)
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

// const routes: Routes = [
//   {
//     path: 'my-account',
//     loadChildren: () =>
//       import('./profile/profile.module').then((m) => m.ProfileModule),
//     canActivate: [AuthGuard],
//   },
//   {
//     path: 'changepassword',
//     pathMatch: 'full',
//     redirectTo: 'my-account',
//   },
//   { path: 'access-denied', component: AccessDeniedComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: '/not-found' },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
