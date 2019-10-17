import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RubricListComponent } from './rubric-list/rubric-list.component';
import { RubricDetailComponent } from './rubric-detail/rubric-detail.component';
import {FilterItemComponent} from './rubric-detail/filter-item/filter-item.component';
import {SvgBlockComponent} from './rubric-list/svg-block/svg-block.component';
import {DetailContentComponent} from './rubric-detail/detail-content/detail-content.component';
import {ContentItemComponent} from './rubric-detail/content-item/content-item.component';
import { BottonShowMoreComponent } from './botton-show-more/botton-show-more.component';

@NgModule({
  declarations: [
  RubricListComponent,
  RubricDetailComponent,
  FilterItemComponent,
  SvgBlockComponent,
  DetailContentComponent,
  ContentItemComponent,
  BottonShowMoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
