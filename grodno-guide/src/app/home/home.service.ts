import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Rubric } from '../models/rubric.interface';
import { Details } from '../models/detail.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getRubrics(endpoint: string): Observable<Rubric[]> {
    return this.http
      .get(`/api/${ endpoint }`)
      .pipe(
        tap(console.log)
      );
  }

  getFolder(folder: string, endpoint: string): Observable<Details> {
    const options = { params: new HttpParams().set('rubric', folder) };
    return this.http
    .get(`/api/${ endpoint }`, options)
    .pipe(
      tap(console.log)
    );
  }
}
