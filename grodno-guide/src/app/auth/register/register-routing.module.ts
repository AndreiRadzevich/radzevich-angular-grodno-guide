import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';

const authRoutes: Routes = [
  {path: '', component: RegisterComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authRoutes)
  ]
})
export class RegisterRoutingModule {
}
