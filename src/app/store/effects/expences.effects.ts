import { IExpences } from './../reducers/expences.reducer';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import {
  getExpencesSuccess,
  getExpencesError,
  getExpencesPending,
  createExpencePending,
  createExpenceSuccess,
  deleteExpencePending,
  deleteExpenceSuccess,
  createExpenceError,
  deleteExpenceError} from '../actions/expences.actions';
import { ExpencesService } from '../../shared/services/expences.service';

@Injectable()
export class ExpencesEffects {
  constructor(
    private actions: Actions,
    private expenceService: ExpencesService
  ) {}

  @Effect()
  public getExpences$: Observable<any> = this.actions.pipe(
    ofType(getExpencesPending),
    switchMap(() => {
      return this.expenceService.getExpences().pipe(
        map((expences: IExpences[]) => {
          console.log(expences);
          return getExpencesSuccess({ expences });
        })
      );
    }),
    catchError((err) => of(getExpencesError(err), console.log(err)))
  );
  @Effect()
  public createExpence$: Observable<any> = this.actions.pipe(
    ofType(createExpencePending),
    switchMap(({ expence }: any) => {
      return this.expenceService.createExpence(expence).pipe(
        map(() => {
          return createExpenceSuccess(), getExpencesPending();
        })
      );
    }),
     catchError((err) => of(createExpenceError(err), console.log(err)))
  );


  @Effect()
  public deleteExpence$: Observable<any> = this.actions.pipe(
    ofType(deleteExpencePending),
    switchMap(( { expenceId } ) => {
      return this.expenceService.remove(expenceId).pipe(
        map( () => {
          return deleteExpenceSuccess();
        })
      );
    }),
    catchError((err) => of(deleteExpenceError(err), console.log(err)))
  );
}
