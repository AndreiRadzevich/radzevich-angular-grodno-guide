import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  store: any;

  getStore(item) {
    this.store = item;
  }
}
