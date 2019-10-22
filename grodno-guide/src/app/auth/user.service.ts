import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Card } from '../models/card.interface';



@Injectable({ providedIn: 'root' })
export class UserService {
  clientsCollection: AngularFirestoreCollection<Card>;
  clientDoc: AngularFirestoreDocument<Card>;
  clients: Observable<Card[]>;
  client: Observable<Card>;

  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients');
  }

  // getClients(): Observable<Card[]> {
  //   // Get clients with the id
  //   this.clients = this.clientsCollection.snapshotChanges().pipe(
  //     map(changes => {
  //       return changes.map(action => {
  //         const data = action.payload.doc.data() as Card;
  //         data.id = action.payload.doc.id;
  //         return data;
  //       });
  //     })
  //   );
  //
  //   return this.clients;
  // }

  newClient(client: Card) {
    this.clientsCollection.add(client);
  }

  // getClient(id: string): Observable<Card> {
  //   this.clientDoc = this.afs.doc<Card>(`clients/${id}`);
  //   this.client = this.clientDoc.snapshotChanges().pipe(
  //     map(action => {
  //       if (action.payload.exists === false) {
  //         return null;
  //       } else {
  //         const data = action.payload.data() as Card;
  //         data.id = action.payload.id;
  //         return data;
  //       }
  //     })
  //   );
  //
  //   return this.client;
  // }

  // updateClient(client: Card) {
  //   this.clientDoc = this.afs.doc(`clients/${client.id}`);
  //   this.clientDoc.update(client);
  // }

  // deleteClient(client: Card) {
  //   this.clientDoc = this.afs.doc(`clients/${client.id}`);
  //   this.clientDoc.delete();
  // }

  // createUser( user: any, path: string): Promise<any> {
  //   return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  //     .then( newUser => {
  //       firebase.database()
  //         .ref('/users/${path}/')
  //         .child(newUser.uid)
  //         .set(user);
  //     });
  // }
}
