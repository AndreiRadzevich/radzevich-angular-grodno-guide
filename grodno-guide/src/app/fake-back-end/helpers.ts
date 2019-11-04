import { HttpRequest, HttpResponse } from '@angular/common/http';
import {of, throwError} from 'rxjs';

export function ok<T>(data?: T) {
  return of(
    new HttpResponse({
      status: 200,
      body: data
    })
  );
}

export function checkUrl(request: HttpRequest<any>, path: string) {
  return request.url.endsWith(path);
}

export function error(message) {
  return throwError({ error: { message } });
}


