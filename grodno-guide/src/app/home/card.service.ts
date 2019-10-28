import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

import {Card} from '../models/card.interface';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardsCollection: AngularFirestoreCollection<Card>;
  cardDoc: AngularFirestoreDocument<Card>;
  cards: Observable<Card[]>;
  length: number;
  userId: string;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged( user => {
        if (user) {
          this.userId =  user.uid;
          this.cardsCollection = this.afs.collection('cards', ref => ref.where('id', '==', this.userId) );
          this.cards = this.cardsCollection.valueChanges('cards');
        }
    });
    // this.afAuth.auth.onAuthStateChanged( user => {
    //   if (user) {
    //     this.userId =  user.uid;
    //     this.cardsCollection = this.afs.collection('cards');
    //     this.cards = this.cardsCollection.valueChanges('cards').pipe(map(cards => cards.filter(card => card.id = this.userId )));
    //   } });
  }

  createCard(card: Card)  {

    if (this.userId) {
      card.id =  this.userId;
      this.cardsCollection.add(card);
    }
    console.log("снова и снова")
    return;
  }

  getCards(): any {
    console.log("опять и опять")
    return this.cards;
  }

  // updateClient(client: Card) {
  //   this.clientDoc = this.afs.doc(`clients/${client.id}`);
  //   this.clientDoc.update(client);
  // }
  //
  // deleteClient(client: Card) {
  //   this.clientDoc = this.afs.doc(`clients/${client.id}`);
  //   this.clientDoc.delete();
  // }
}
