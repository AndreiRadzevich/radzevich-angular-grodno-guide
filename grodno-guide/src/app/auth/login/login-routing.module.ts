import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginRoutingModule { }
