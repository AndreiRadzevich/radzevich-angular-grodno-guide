import {Component, OnInit, Input, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnInit {

  @Input()
  detailInfo: any = '';

  @ContentChild('detailContent', { static: true })
  public detailContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  //  this.moveToSpecificView();
  public moveToSpecificView() {
    console.log(this.detailContent.nativeElement);
    setTimeout(() => {
    // this.detailContent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    });
   }
}
