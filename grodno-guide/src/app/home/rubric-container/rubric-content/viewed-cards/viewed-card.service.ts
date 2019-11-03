import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

import {Card} from '../../../../models/card.interface';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ViewedCardService {
  cardsCollection: AngularFirestoreCollection<Card>;
  cards: Card[];
  userId: string;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;
        this.cardsCollection = this.afs.collection('cards', ref => ref.orderBy('date', 'desc').where('id', '==', this.userId).limit(15));
        this.cardsCollection.valueChanges('cards').subscribe(cards => {
          this.cards = cards;
        });
      }
    });
  }

  createCard(card: Card) {
    if (this.userId) {
      card.id = this.userId;
      card.date = new Date();
      this.cardsCollection.add(card);
    }
  }

  getCards(): Card[] {
    return this.cards;
  }
}
