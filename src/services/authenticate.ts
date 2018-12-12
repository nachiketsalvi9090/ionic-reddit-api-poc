import firebase from 'firebase';
import { User } from '../data/user';
import { Injectable } from "@angular/core";
@Injectable()
export class AuthenticateService {
  signup(user:User) {
     return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  }
  signin(user:User) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
  }
  logout() {
    firebase.auth().signOut();
  }
}
