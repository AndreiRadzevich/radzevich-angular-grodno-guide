import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Detail } from '../../../models/detail.interface';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css']
})
export class ContentItemComponent {
  @Input()
  detail: any;
  @Input()
  detailOpen: boolean;

  @Output()
  toggled = new EventEmitter<any>();

  constructor() {}

  getStore() {
    this.toggled.emit(!this.detailOpen);
  }
}
