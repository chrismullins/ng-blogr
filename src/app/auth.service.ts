import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AlertService } from './alert/alert.service';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router,
              private alertService: AlertService) {
                // this.afAuth.subscribe( (auth) => {
                //   this.authState = auth;
                // });
                this.afAuth.authState.subscribe( (authState) => {
                  this.authState = authState;
                });
               }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns the authState observable (triggered on login/logout)
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Returns whether current user is anonymous or not
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false;
  }

  //// Email/Password Auth ////
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( (user) => {
        this.authState = user
        this.updateUserData()
        this.router.navigate(['/']);
        this.alertService.success('You\'ve been successfully registered!')
      })
      .catch( (err) =>  {
        this.alertService.error(err);
      });
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( (user) => {
        this.authState = user
        this.updateUserData()
        this.router.navigate(['/'])
      })
      .catch( (err) => {
        this.alertService.error(err)
      });
  }

  //// Helpers ////

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  private updateUserData(): void {
    // Writes user name and emial to realtime db
    // userful if your app displays information about users or for
    // admin features
    let path = `users/${this.currentUserId}}`; // Endpoint on firebase
    let data = {
      email: this.authState.email,
      name: this.authState.displayName
    };
    this.db.object(path).update(data)
      .catch( err => console.log(err));
  }

}
