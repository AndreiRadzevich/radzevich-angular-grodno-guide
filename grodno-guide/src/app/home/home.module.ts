import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Angular2UsefulSwiperModule} from 'angular2-useful-swiper';

import {HomeRoutingModule} from './home-routing.module';

import {RubricNavComponent} from './rubric-nav/rubric-nav.component';
import {RubricContainerComponent} from './rubric-container/rubric-container.component';
import {SvgBlockComponent} from './rubric-nav/svg-block/svg-block.component';
import {DetailContentComponent} from './rubric-container/rubric-content/detail-content/detail-content.component';
import {RubricContentComponent} from './rubric-container/rubric-content/rubric-content.component';
import {ButtonShowMoreComponent} from './rubric-container/rubric-content/buttons/button-show-more/button-show-more.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ViewedCardsComponent} from './rubric-container/rubric-content/viewed-cards/viewed-cards.component';
import {RubricFilterComponent} from './rubric-container/rubric-filter/rubric-filter.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    RubricNavComponent,
    RubricContainerComponent,
    SvgBlockComponent,
    DetailContentComponent,
    RubricContentComponent,
    ButtonShowMoreComponent,
    ViewedCardsComponent,
    RubricFilterComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    AngularFireDatabaseModule,
    Angular2UsefulSwiperModule
  ]
})
export class HomeModule {
}
