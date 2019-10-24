import { Component, OnInit } from '@angular/core';

import {CardService} from '../card.service';

import {Card} from '../../models/card.interface';
@Component({
  selector: 'app-viewed-cards',
  templateUrl: './viewed-cards.component.html',
  styleUrls: ['./viewed-cards.component.css']
})
export class ViewedCardsComponent implements OnInit {
  store: Card[];
  constructor( private cardService: CardService ) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(cards => this.store = cards );
  }

}
