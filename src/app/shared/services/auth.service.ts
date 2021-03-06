import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogIn } from '../interfaces/log-in.interface';
@Injectable()
export class AuthService {
  constructor(public http: HttpClient) {}

  public isAuthenticated(): boolean {
    // const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // !this.jwtHelper.isTokenExpired(token)
    return true;
  }
  public signUp(value: any): Observable<any> {
    return this.http.post('/auth/sign-up', value);
  }
  public signIn(formValue: ILogIn) {
    return this.http.post('/auth/sign-in', formValue);
  }
}
