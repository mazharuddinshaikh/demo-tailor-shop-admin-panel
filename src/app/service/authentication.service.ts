import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getAuthToken(): string {
    // retrieve user from llocal storage
    let user: User = JSON.parse(localStorage.getItem("user"));
    return user.authenticationToken;
  }
}
