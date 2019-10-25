import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';

import { HomeRoutingModule } from './home-routing.module';

import { RubricListComponent } from './rubric-list/rubric-list.component';
import { RubricDetailComponent } from './rubric-detail/rubric-detail.component';
import {FilterItemComponent} from './rubric-detail/filter-item/filter-item.component';
import {SvgBlockComponent} from './rubric-list/svg-block/svg-block.component';
import {DetailContentComponent} from './rubric-detail/detail-content/detail-content.component';
import {ContentItemComponent} from './rubric-detail/content-item/content-item.component';
import { BottonShowMoreComponent } from './botton-show-more/botton-show-more.component';
import {AuthModule} from '../auth/auth.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ViewedCardsComponent } from './viewed-cards/viewed-cards.component';

@NgModule({
  declarations: [
  RubricListComponent,
  RubricDetailComponent,
  FilterItemComponent,
  SvgBlockComponent,
  DetailContentComponent,
  ContentItemComponent,
  BottonShowMoreComponent,
  ViewedCardsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    AuthModule,
    AngularFireDatabaseModule,
    Angular2UsefulSwiperModule
  ]
})
export class HomeModule { }
