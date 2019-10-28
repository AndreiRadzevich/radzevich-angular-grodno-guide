import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
