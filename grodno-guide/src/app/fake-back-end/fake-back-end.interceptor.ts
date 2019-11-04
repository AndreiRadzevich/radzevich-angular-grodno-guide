import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';

import endpoints from './endpoints';
import {checkUrl} from './helpers';
import {getRubric, getFolder} from './routes';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return of(null).pipe(
      mergeMap(handleRoute),
      materialize(),
      delay(500),
      dematerialize()
    );

    function handleRoute() {
      switch (true) {
        case checkUrl(request, endpoints.rubrics):
          return getRubric();
        case checkUrl(request, endpoints.details):
          const rubric = request.params.get('rubric');
          return getFolder(rubric);
        default:
          return next.handle(request);
      }
    }
  }
}
