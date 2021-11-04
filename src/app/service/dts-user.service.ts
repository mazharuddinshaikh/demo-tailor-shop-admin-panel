import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
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
  public login(user: User): Observable<any> {
    // let userName = "mazhar";
    // let password = "mazhar123"
    // let user = { userName: userName, password: password };
    let header = new HttpHeaders();
    header.set('content-type', 'application/x-www-form-urlencoded');
    const body = new HttpParams()
    .set('userName', user.userName)
    .set('password', user.password);
    return this.httpClient.post<HttpResponse<User>>(`${environment.baseUri}/api/v1/user/login`, body,  {
      observe: 'response'
      // headers: {'content-type': 'application/json'}
      // headers: {'content-type': 'aapplication/x-www-form-urlencoded'}
    });
  }
}
