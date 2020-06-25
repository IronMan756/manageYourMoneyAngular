import { Injectable, Inject } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';

import { Observable, throwError, EMPTY } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { BASE_URL_TOKEN } from '../../../config';


export interface IRes {
  // tslint:disable-next-line: no-any
  data: any;
  error?: string;
}
@Injectable()
export class InterceptorService implements HttpInterceptor {
  // tslint:disable-next-line: variable-name
  constructor(@Inject(BASE_URL_TOKEN) private _baseUrl: string) {}

  public intercept<T extends IRes>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpResponse<T>> {

    // const token: string = localStorage.getItem('token');

    // const request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });

    // const request2 = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    const headers2 =  req.headers.set('Content-Type', 'application/json');
    const request = req.clone({ headers: req.headers.set('Accept', 'application/json') });




    const headers: HttpHeaders = req.headers.append(
      'Content-Type',
      'application/json'
    );
    const jsonReq: HttpRequest<T> = req.clone({
      headers,
      url: `${this._baseUrl}${req.url}`,
    });
    return next.handle(jsonReq).pipe(
      filter(this._isHttpResponse),
      map((res: HttpResponse<IRes>) => {
        return res.clone({ body: res.body && res.body.data });
      }),
      catchError(() => {
        return EMPTY;
      })
    );
  }
  private _isHttpResponse(event: HttpEvent<IRes>): event is HttpResponse<IRes> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}
