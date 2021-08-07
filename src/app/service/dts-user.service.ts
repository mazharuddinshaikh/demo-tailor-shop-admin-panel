import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DtsUserService {

  constructor(private httpClient: HttpClient) { }
  // post request  - header form url encoded(xxx-www-for-urlencoded) body - (userName, password, mobileNo, email)
  public login(user1: User): Observable<any> {
    let userName = "mazhar";
    let password = "mazhar123"
    let user = { userName: userName, password: password };
    let header = new HttpHeaders();
    header.set('content-type', 'application/x-www-form-urlencoded');
    return this.httpClient.post(`${environment.baseUri}user/login`, user, {
      headers: {'content-type': 'application/json'}
    });
  }
}
