import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(
      map(auth => auth)
    );
  }
  // getAuthId() {
  //   return this.afAuth.authState.subscribe(user => {
  //     if(user) {
  //       this.uid = user.uid;
  //     } else {
  //       // Empty the value when user signs out
  //       this.uid = null;
  //     }
  //   });
  // // }
  //   );
  // }


  // constructor(private afAuth: AngularFireAuth) {
  //   let uid = this.afAuth.auth.currentUser.uid
  // }


  getIdToken() {
    return this.afAuth.idToken.pipe(
      map(id => id)
    );
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
