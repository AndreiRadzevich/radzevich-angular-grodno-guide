import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

import { Card } from '../../models/card.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  clientsCollection: AngularFirestoreCollection<Card>;
  clients: Observable<Card[]>;
  client: Observable<Card>;

  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients');
  }

  newClient(client: Card) {
    this.clientsCollection.add(client);
  }
}
