import {Component, Input} from '@angular/core';
import {Content} from '../../models/content.interface';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css']
})
export class ContentItemComponent {
  @Input()
  detail: any;
    constructor() {
    }


}
