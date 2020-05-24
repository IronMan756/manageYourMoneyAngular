import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogIn } from '../interfaces/log-in.interface';
@Injectable()
export class AuthService {
  constructor(
    // public jwtHelper: JwtHelperService,
    public http: HttpClient
    ) {}

  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
  public signUp(value: any): Observable<any>{
    return this.http.post('/auth/sign-up', value);
  }
  public signIn(value: any ){
    const formValue = {
      email: value.email,
      password: value.password
    }
    return this.http.post('/auth/sign-in', formValue);
  }
}
