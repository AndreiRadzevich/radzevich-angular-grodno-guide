import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {pluck} from 'rxjs/operators';

import {ContentService} from './content.service';

@Component({
  selector: 'app-rubric-container',
  templateUrl: './rubric-container.component.html',
  styleUrls: ['./rubric-container.component.css']
})
export class RubricContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private cardsService: ContentService) {
  }

  ngOnInit() {
    this.route.data.pipe(pluck('details'))
      .subscribe(
        detail => {
          this.cardsService.setCards(detail);
        }
      );
  }
}
