import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownDirective} from './dropdown.directive';
import {SocialComponent} from './social/social.component';

@NgModule({
  declarations: [
    SocialComponent,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    SocialComponent,
    DropdownDirective,
    CommonModule
  ],
})
export class SharedModule {}
