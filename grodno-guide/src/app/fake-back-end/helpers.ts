import { HttpRequest, HttpResponse } from '@angular/common/http';
import {of, throwError} from 'rxjs';

export function ok<T>(data?: T) {
  console.log(data);
  return of(
    new HttpResponse({
      status: 200,
      body: data
    })
  );
}

export function sendJSON(data: any) {
  return of(
    new HttpResponse({
      status: 200,
      body: JSON.stringify(data)
    })
  );
}

export function checkUrl(request: HttpRequest<any>, path: string) {
  return request.url.endsWith(path);
}

function unauthorized() {
  return throwError({ status: 401, error: { message: 'Unauthorised' } });
}

export function error(message) {
  return throwError({ error: { message } });
}


