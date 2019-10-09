import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Content } from '../../models/content.interface';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent  {
  @Input()
  message: Content;
}
