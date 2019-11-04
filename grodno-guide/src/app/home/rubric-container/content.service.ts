import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';

import {Details} from '../../models/detail.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  filtersChanged = new Subject();
  filtersCardsChanged = new Subject();
  cards: any;
  filterCards: Details[];

  setCards(cards) {
    this.cards = cards;
    this.filterCards = this.cards.details.filter((item) => item.image.startsWith(this.cards.filters[0]));
    this.filtersChanged.next(this.cards);
    this.filtersCardsChanged.next(this.filterCards);
  }

  getFilters() {
    return this.cards.filters.slice();
  }

  getFilterCards() {
    return this.filterCards;
  }

  setFilterCards(filter) {
    this.filterCards = this.cards.details.filter((item: any) => item.image.startsWith(filter));
    this.filtersCardsChanged.next(this.filterCards);
  }
}
