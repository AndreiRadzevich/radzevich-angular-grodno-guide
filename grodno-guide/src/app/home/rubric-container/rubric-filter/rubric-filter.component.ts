import { Component, OnInit, OnDestroy } from '@angular/core';
import {ContentService} from "../content.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-rubric-filter',
  templateUrl: './rubric-filter.component.html',
  styleUrls: ['./rubric-filter.component.css']
})
export class RubricFilterComponent implements OnInit, OnDestroy {

  filters: any;
  subscription: Subscription;

  constructor(private cardsService: ContentService) { }

  ngOnInit() {
    this.subscription = this.cardsService.filtersChanged
      .subscribe(
        (cards: any) => {
          this.filters = cards.filters;
        }
      );
    this.filters = this.cardsService.getFilters();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setFilterCards(filter) {
    this.cardsService.setFilterCards(filter);
  }
}
