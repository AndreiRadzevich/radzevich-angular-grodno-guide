import { Component, OnInit } from '@angular/core';

import {CardService} from '../card.service';

import {Card} from '../../models/card.interface';
import {SwiperOptions} from 'swiper';
import {pipe} from 'rxjs';
import {tap} from 'rxjs/operators';
@Component({
  selector: 'app-viewed-cards',
  templateUrl: './viewed-cards.component.html',
  styleUrls: ['./viewed-cards.component.css']
})
export class ViewedCardsComponent implements OnInit {
  config: SwiperOptions = {

    initialSlide: 3, // Slide Index Starting from 0
    slidesPerView: 1, // Slides Visible in Single View Default is 1
    pagination: { el: '.swiper-pagination', clickable: true },
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
  }};

  store: Card[];

  constructor( private cardService: CardService ) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(cards => { this.store = cards; } );
  }

}
