import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

import endpoints from './endpoints';
import {checkUrl, error, ok} from './helpers';
import {
  getRubric,
  getFolder
} from './routes';

let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    console.log('request', request);

    return of(null).pipe(
      mergeMap(handleRoute),
      materialize(),
      delay(500),
      dematerialize()
    );

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case checkUrl(request, endpoints.rubrics):
          return getRubric();
        case checkUrl(request, endpoints.details):
          const rubric = request.params.get('rubric');
          console.log(rubric);
          return getFolder(rubric);
        default:
          return next.handle(request);
      }
    }

    function register() {
      const user = body;

      if (users.find(x => x.email === user.email)) {
        return error('Username "' + user.username + '" is already taken')
      }
      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
    }

    function authenticate() {
      const { email, password } = body;
      const user = users.find(x => x.email === email && x.password === password);
      if (!user) { return error('Username or password is incorrect'); }
      return ok({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        token: 'fake-jwt-token'
      });
    }

    function getUsers() {
      return ok(users);
    }

    function getUserById() {

      const user = users.find(x => x.id == idFromUrl());
      return ok(user);
    }

    function deleteUser() {

      users = users.filter(x => x.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      // tslint:disable-next-line:radix
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}
