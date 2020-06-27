import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogIn } from '../interfaces/log-in.interface';
@Injectable()
export class AuthService {

  constructor(
    public http: HttpClient
    ) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // !this.jwtHelper.isTokenExpired(token)
    return true;
  }
  public signUp(value: any): Observable<any>{
    console.log(value)
    return this.http.post('/auth/sign-up', value);
  }
  public signIn(formValue: ILogIn ){
    console.log('formValue in sign in service', formValue);
    return this.http.post('/auth/sign-in', formValue);
  }
}
