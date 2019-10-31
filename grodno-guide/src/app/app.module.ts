import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './fake-back-end/fake-back-end.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import {LoginModule} from './auth/login/login.module';
import {RegisterModule} from './auth/register/register.module';
import { FooterComponent } from './footer/footer/footer.component';
import {SocialComponent} from './social/social.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SocialComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
