import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-block',
  templateUrl: './svg-block.component.html',
  styleUrls: ['./svg-block.component.css']
})
export class SvgBlockComponent {
  @Input() rubric: string;

  constructor() { }

}
