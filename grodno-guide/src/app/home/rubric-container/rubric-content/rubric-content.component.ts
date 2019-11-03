import {Component, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {Detail} from '../../../models/detail.interface';
import {Subscription} from 'rxjs';
import {ContentService} from '../content.service';
import {ViewedCardService} from './viewed-cards/viewed-card.service';

@Component({
  selector: 'app-rubric-content',
  templateUrl: './rubric-content.component.html',
  styleUrls: ['./rubric-content.component.css']
})
export class RubricContentComponent implements OnInit {
  filterCards: any;
  selectedCards: any;
  detailOpen: boolean = true;
  filterDetailsStore: any;
  subscription: Subscription;

  constructor(private contentService: ContentService, private viewedCardService: ViewedCardService) {
  }

  ngOnInit() {
    this.subscription = this.contentService.filtersCardsChanged
      .subscribe(
        (filterCards: any) => {
          this.filterCards = filterCards;
        }
      );

    this.filterCards = this.contentService.getFilterCards();
    this.filterDetailsStore = [...this.filterCards];
  }

  getDetails(item) {
    if (this.selectedCards === item) {
      this.selectedCards = '';
      this.detailOpen = true;
    } else {
      this.selectedCards = item;
      this.viewedCardService.createCard(this.selectedCards);
      this.detailOpen = false;
    }
  }

  showMore() {
    this.detailOpen = true;
    this.filterCards = [...this.filterCards, ...this.filterDetailsStore];
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
