import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {CardService} from '../card.service';

import {Card} from '../../models/card.interface';
import {SwiperOptions} from 'swiper';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from "rxjs";
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
  isDataLoaded;
  isLoaded;
  store: Card[];
  isVisible = true;

    @Output() onChanged = new EventEmitter<boolean>();
      change(card) {
      this.onChanged.emit(card);
    }

  constructor( private cardService: CardService, private afAuth: AngularFireAuth ) { }

  ngOnInit() {
    this.store = this.cardService.getCards();
    console.log('ну да');
  }

  // getCards() {
  //   this.afAuth.auth.onAuthStateChanged( user => {
  //     if (user) {
  //       // this.isVisible = true;
  //       this.cardService.getCards().subscribe(cards => this.store = cards);
  //     }
  //   });
  //   // this.isVisible = false;
  // }
}
