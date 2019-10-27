import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore} from "@angular/fire/firestore";
import {FlashMessagesService} from 'angular2-flash-messages';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(auth => {
        if (!auth) {
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}

// constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
//   this.afAuth.auth.onAuthStateChanged( user => {
//     if (user) {
//
//       this.router.navigate(['/home']);
//       return true;
//     }
//   });
// }
