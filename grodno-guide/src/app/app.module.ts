import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { FakeBackendInterceptor } from './fake-back-end/fake-back-end.interceptor';
import { MainContentModule } from './main-content/main-content.module';

import { AppComponent } from './app.component';
import { SvgBlockComponent } from './components/navigation/svg-block/svg-block.component';
import { NavigationComponent } from './components/navigation/navigation.component';

export const ROUTES: Routes = [
  { path: '**', redirectTo: 'folder/eat' }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MainContentModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    SvgBlockComponent
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
