import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Content } from './models/content.interface';

@Injectable()
export class MainContentService {
  constructor(private http: HttpClient) {}

  getFolder(folder: string, endpoint: string): Observable<Content[]> {
    const options = { params: new HttpParams().set('folder', folder) };

    return this.http
      .get(`/api/${ endpoint }`, options)
      .pipe(
        tap(console.log)
      );
  }
}
