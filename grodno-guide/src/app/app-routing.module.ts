import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EatPageComponent } from './Eat/eat-page/eat-page.component';
import { EventPageComponent } from './Event/event-page/event-page.component';
import { GuidesPageComponent } from './Guides/guides-page/guides-page.component';
import { SeePageComponent } from './See/see-page/see-page.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'see', component: SeePageComponent },
  { path: 'eat', component: EatPageComponent },
  { path: 'guides', component: GuidesPageComponent },
  { path: 'event', component: EventPageComponent },
  // { path: '404', component: NotfoundModule },
  { path: '**', redirectTo: '/404' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
