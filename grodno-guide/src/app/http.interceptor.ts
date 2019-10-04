import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('HTTP Request for ' + req.urlWithParams + ' is being responded to locally.');
    return observableOf(
      new HttpResponse({
        body: {
          menu: [
            {
              id: 1,
              title: 'Eat&drink',
              link: '/eat',
              filters: ['Restaurants', 'Cafes', 'Nightlife']
            },
            {
              id: 2,
              title: 'See&do',
              link: '/see',
              filters: ['Activities', 'Attractions', 'Shopping']
            },
            {
              id: 3,
              title: 'Guides',
              link: '/guides',
              filters: ['City', 'Nature', 'Region']
            },
            {
              id: 4,
              title: 'Event',
              link: '/event',
              filters: ['All', 'Exhibitions', 'Music']
            }
          ]
        },
        status: 200
      })
    );
  }
}
