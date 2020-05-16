import { signInSuccess, signInError } from './../actions/auth.actions';
import { AuthService } from './../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, from } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { signInPending } from '../actions/auth.actions';
// import { IStore } from '../reducers';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private store: Store< any
    // IStore
    >,
  ) {}
  // @Effect()
  // public checkLogin: Observable<any> = this.actions.pipe(
  //   ofType(checkLogin),
  //   switchMap(payload =>
  //     this.afAuth.authState.pipe(
  //       switchMap((authData,  uid ) =>
  //         from(
  //           this.asf
  //             .collection('organization', ref =>
  //               ref.where('uid', '==',  uid),
  //             )
  //             .snapshotChanges(),
  //         ).pipe(
  //           mergeMap(organization => {
  //             if (authData) {
  //               return [
  //                 authenticated({
  //                   uid: authData.uid,
  //                   email: authData.email,
  //                   organizationId: organization[0].payload.doc.id,
  //                   ...(organization[0].payload.doc.data() as any),
  //                 }),
  //               ];
  //             }
  //             return [notAuthenticated()];
  //           }),
  //           catchError(err => of(authError())),
  //         ),
  //       ),
  //     ),
  //   ),
  // );

  // @Effect()
  // public logout: Observable<Action> = this.actions.pipe(
  //   ofType(logout),

  //   map(action => action.payload),
  //   switchMap(payload => {
  //     return of(this.afAuth.auth.signOut());
  //   }),
  //   mergeMap(authData => {
  //     return [notAuthenticated(), go({ path: ['signin'] })];
  //   }),
  //   catchError(err => of(authError({ error: err.message }))),
  // );
  // @Effect()
  // public signUp: Observable<any> = this.actions.pipe(
  //   ofType(signUp),
  //   map(action => action.payload),
  //   switchMap(payload =>
  //     from(
  //       this.afAuth.auth.createUserWithEmailAndPassword(
  //         payload.email,
  //         payload.password,
  //       ),
  //     ).pipe(
  //       mergeMap(authData => {
  //         this.asf.collection('organization').add({
  //           uid: authData.user.uid,
  //           email: authData.user.email,
  //           name: payload.organization,
  //           count: 0,
  //         });
  //         return [signUpSuccess(), go({ path: [''] })];
  //       }),
  //     ),
  //   ),
  //   catchError(err => of(signUpError(err))),
  // );
  @Effect()
  public signIn: Observable<any> = this.actions.pipe(
    ofType(signInPending),
    // map(action => action.payload),
    switchMap( ({payload}) =>
        this.authService.signIn( payload )
        .pipe(
          map((data: any) => {
            console.log(data);
            return signInSuccess( data );
          })
      ),
      ),
    catchError(err => of(signInError(err))),
  );
  // @Effect({ dispatch: false })
  // public updateUser: Observable<void> = this.actions.pipe(
  //   ofType(updateUser),
  //   withLatestFrom(this.store.select('auth')),
  //   switchMap(([payload, auth]) => {
  //     return this.asf
  //       .collection('organization')
  //       .doc(auth.organizationId)
  //       .update(payload);
  //   }),
  // );
}
