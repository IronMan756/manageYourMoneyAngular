import { Injectable, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, EMPTY, throwError } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { BASE_URL_TOKEN } from '../../../config';

export interface IRes {
  // tslint:disable-next-line: no-any
  data: any;
  error?: string;
}
@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(@Inject(BASE_URL_TOKEN) private _baseUrl: string) {}
  public jsonReq: HttpRequest<any>;
  public intercept<T extends IRes>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpResponse<T>> {
    const token: string = localStorage.getItem('Token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.jsonReq = req.clone({
        url: `${this._baseUrl}${req.url}`,
      });
    } else {
      const headers: HttpHeaders = req.headers.append(
        'Content-Type',
        'application/json'
      );
      req = req.clone({
        headers: req.headers.set('Accept', 'application/json'),
      });
      this.jsonReq = req.clone({
        headers,
        url: `${this._baseUrl}${req.url}`,
      });
    }

    return next.handle(this.jsonReq).pipe(
      filter(this._isHttpResponse),
      map((res: HttpResponse<IRes>) => {
        return res.clone({ body: res.body && res.body.data });
      }),
      catchError((err) => {
        // tslint:disable-next-line: deprecation
        return throwError({err} );
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
