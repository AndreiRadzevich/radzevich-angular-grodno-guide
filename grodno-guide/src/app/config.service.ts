import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';

// import { Database } from './../models/passenger.interface';

const DATA_API: any = '/api';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {  }

  getSettings(database: string, id?: any): Observable<any[]> {
    const uid = id || null;
    if (uid !== null) {
      return this.http
        .get(`${DATA_API}/${id}`)
        .pipe(
          map((response: any) => response[database].filter((item) => item.id === id)),
          catchError((error: any) => Observable.throw(error.json()))
        );
    }
    return this.http
      .get(`${DATA_API}/${database}`)
      .pipe(
        map((response: any) => response[database]),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
