import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-block',
  templateUrl: './svg-block.component.html',
  styleUrls: ['./svg-block.component.css']
})
export class SvgBlockComponent implements OnInit {
  @Input() menuItem: any;

  constructor() { }

  ngOnInit() {
  }

}
