import { signUp } from './../actions/auth.actions';
import { Observable, of, from } from 'rxjs';
import { Injectable } from '@angular/core';
// import { Store, Action } from '@ngrx/store';
// import { IStore } from '../reducers';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthEffects {
  constructor(
      private actions: Actions,
    //   private store: Store<IStore>,
      private http: HttpClient
      ) {}
  @Effect()
  public signUp: Observable<any> = this.actions.pipe(
    ofType(signUp),
    map((action) => action.payload),
    // tslint:disable-next-line: deprecation
    switchMap(payload =>
        from(this.http.post<any>('/sign-up', payload)),
    catchError((err) =>
      of(
        //   signUpError(err)
        console.log('ERROR', err)
      )
    )
  ));
}

// public addCategories(category: ICategory): Observable<ICategory> {
//     return this.http.post<ICategory>(`/categories`, category);
//   }