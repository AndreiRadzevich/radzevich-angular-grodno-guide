import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ScrollUpDirective} from './scrollUp.directive';
import {SocialComponent} from './social/social.component';

@NgModule({
  declarations: [
    SocialComponent,
    ScrollUpDirective,
  ],
  imports: [CommonModule],
  exports: [
    SocialComponent,
    ScrollUpDirective,
    CommonModule
  ],
})
export class SharedModule {}
