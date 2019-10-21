import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Card } from '../models/card.interface';
import {AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  clientsCollection: AngularFirestoreCollection<Card>,
  clientDoc: AngularFirestoreDocument<Card>;
  cards: Observable<Card[]>;
  card: Observable<Card>;

  cardId: string;
  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients', ref => ref.orderBy('lastName', 'asc'));
  }
  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,
) {
    this.afAuth.authState.subscribe(user => {
      if (user) { this.cardId = user.uid; }

    });
  }

  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getCardList(): AngularFireList<Card[]> {
    if (!this.cardId) { return; }
    this.cards = this.db.list(`cards/${this.cardId}`);
    console.log(this.cards);
    return this.cards;
  }

  createCard(card: Card)  {
    this.clientsCollection.add(card);
  }
}

// import {Injectable} from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
//
// import { Card } from '../models/card.interface';
//
//
// @Injectable({ providedIn: 'root' })
// export class UserService {
//   clientsCollection: AngularFirestoreCollection<Card>;
//   clientDoc: AngularFirestoreDocument<Card>;
//   clients: Observable<Card[]>;
//   client: Observable<Card>;
//
//   constructor(private afs: AngularFirestore) {
//     this.clientsCollection = this.afs.collection('clients');
//   }
//
//   getClients(): Observable<Card[]> {
//     // Get clients with the id
//     this.clients = this.clientsCollection.snapshotChanges().pipe(
//       map(changes => {
//         return changes.map(action => {
//           const data = action.payload.doc.data() as Card;
//           data.id = action.payload.doc.id;
//           return data;
//         });
//       })
//     );
//
//     return this.clients;
//   }
//
//   newClient(client: Card) {
//     this.clientsCollection.add(client);
//   }
//
//   getClient(id: string): Observable<Card> {
//     this.clientDoc = this.afs.doc<Card>(`clients/${id}`);
//     this.client = this.clientDoc.snapshotChanges().pipe(
//       map(action => {
//         if (action.payload.exists === false) {
//           return null;
//         } else {
//           const data = action.payload.data() as Card;
//           data.id = action.payload.id;
//           return data;
//         }
//       })
//     );
//
//     return this.client;
//   }
//
//   updateClient(client: Card) {
//     this.clientDoc = this.afs.doc(`clients/${client.id}`);
//     this.clientDoc.update(client);
//   }
//
//   deleteClient(client: Card) {
//     this.clientDoc = this.afs.doc(`clients/${client.id}`);
//     this.clientDoc.delete();
//   }
// }
