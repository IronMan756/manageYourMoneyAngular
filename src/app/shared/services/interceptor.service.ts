// import { Observable } from 'rxjs';
// import { Injectable, Inject } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpResponse,
//   HttpRequest,
//   HttpHandler,
//   HttpHeaders,
//   HttpEvent,
// } from '@angular/common/http';
// import { BASE_URL_TOKEN } from '../../config';
// import { filter, map } from 'rxjs/operators';

// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9seWExMTEiLCJpYXQiOjE1ODIxMjk4OTB9.-wdKvaR4qgJ_Cl68ynr2Q5rLzYpa1i2aWh3nd2o3IGE';
// //  this.LocalStorage.get('token') || '';
// export interface IRes {
//   data: any;
//   error?: string;
// }
// @Injectable()
// export class InterceptorService implements HttpInterceptor {
//   constructor(@Inject(BASE_URL_TOKEN) private _baseUrl: string) {}

//   public intercept<T extends IRes>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpResponse<T>> {
//    console.log('req',req);
//    const headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');
//    const jsonReq: HttpRequest<T> = req.clone({
//       headers,
//       url: `${this._baseUrl}${req.url}`,
//     });
//     console.log('jsonReq',jsonReq); 
//    return next.handle(jsonReq).pipe(
//       filter(this._isHttpResponse),
//       map((res: HttpResponse<IRes>) => {
//         return res.clone({ body: res.body && res.body.data });
//       })
//     );
//   }
//   private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<IRes> {
//     if (event instanceof HttpResponse) {
//       return true;
//     }
//     return false;
//   }
// }
