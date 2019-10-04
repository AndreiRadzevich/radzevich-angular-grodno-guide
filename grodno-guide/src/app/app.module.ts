import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './http.interceptor';

import { AppComponent } from './app.component';
import { SvgBlockComponent } from './svg-block/svg-block.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FilterComponent } from './filter/filter.component';
import { EatPageComponent } from './Eat/eat-page/eat-page.component';
import { EventPageComponent } from './Event/event-page/event-page.component';
import { GuidesPageComponent } from './Guides/guides-page/guides-page.component';
import { SeePageComponent } from './See/see-page/see-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SvgBlockComponent,
    NavigationComponent,
    FilterComponent,
    EatPageComponent,
    EventPageComponent,
    GuidesPageComponent,
    SeePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
