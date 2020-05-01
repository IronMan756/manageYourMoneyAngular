import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
      };
    constructor(
          public http: HttpClient
      ){}
    public  signUp(data: any): Observable<any>{
      return this.http.post('http://localhost:8090/auth/sign-up', data, this.httpOptions);
    }
  }
