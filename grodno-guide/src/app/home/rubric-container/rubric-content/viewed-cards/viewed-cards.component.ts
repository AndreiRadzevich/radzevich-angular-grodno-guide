import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {ViewedCardService} from './viewed-card.service';

import {Card} from '../../../../models/card.interface';
import {SwiperOptions} from 'swiper';


@Component({
  selector: 'app-viewed-cards',
  templateUrl: './viewed-cards.component.html',
  styleUrls: ['./viewed-cards.component.css']
})
export class ViewedCardsComponent implements OnInit {

  config: SwiperOptions = {
    initialSlide: 3,
    slidesPerView: 1,
    pagination: {el: '.swiper-pagination', clickable: true},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1550: {
        slidesPerView: 5,
      },
    }
  };

  store: Card[];

  @Output() onChanged = new EventEmitter<boolean>();

  change(card) {
    this.onChanged.emit(card);
  }

  constructor(private viewedCardService: ViewedCardService) {}

  ngOnInit() {
    this.store = this.viewedCardService.getCards();
  }
}
