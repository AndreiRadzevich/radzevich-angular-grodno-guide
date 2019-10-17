import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnInit {

  @Input()
  detailInfo: any = '';


  constructor() { }

  ngOnInit() {

  }

}
