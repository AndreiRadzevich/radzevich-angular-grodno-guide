import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import {LoginModule} from './auth/login/login.module';
import {RegisterModule} from './auth/register/register.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    SharedModule,
    CoreModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
