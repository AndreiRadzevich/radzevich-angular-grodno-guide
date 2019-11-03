import {Component, Input, ElementRef, OnChanges} from '@angular/core';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnChanges {

  @Input()
  detailInfo: any = '';
  @Input()
  detailOpen: boolean;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    if (!this.detailOpen) {
      setTimeout(() => {
        this.el.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'});
      }, 300);
    }
  }
}
