import { Component, OnInit, OnDestroy } from '@angular/core';
import {ContentService} from "../content.service";
import {Subscription} from "rxjs";
import {Details} from '../../../models/detail.interface';


@Component({
  selector: 'app-rubric-filter',
  templateUrl: './rubric-filter.component.html',
  styleUrls: ['./rubric-filter.component.css']
})
export class RubricFilterComponent implements OnInit, OnDestroy {

  filters: string[];
  subscription: Subscription;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.subscription = this.contentService.filtersChanged
      .subscribe(
        (cards: Details) => {
          this.filters = cards.filters;
        }
      );
    this.filters = this.contentService.getFilters();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setFilterCards(filter) {
    this.contentService.setFilterCards(filter);
  }
}
