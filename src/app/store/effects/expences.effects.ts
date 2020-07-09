import { IExpences } from './../reducers/expences.reducer';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import {
  getExpencesSuccess,
  getExpencesError,
  getExpencesPending,
  createExpencePending,
  createExpenceSuccess,
  deleteExpencePending,
  deleteExpenceSuccess,
  createExpenceError,
  deleteExpenceError,
} from '../actions/expences.actions';
import { ExpencesService } from '../../shared/services/expences.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ExpencesEffects {
  constructor(
    private actions: Actions,
    private expenceService: ExpencesService,
    private toasts: ToastrService
  ) {}

  @Effect()
  public getExpences$: Observable<any> = this.actions.pipe(
    ofType(getExpencesPending),
    switchMap(() => {
      return this.expenceService.getExpences().pipe(
        map((expences: IExpences[]) => {
          console.log(expences);
          return getExpencesSuccess({ expences });
        }),
        catchError(({err}) => {
          this.toasts.error(err.statusText);
          return of(getExpencesError(err));
        })
      );
    })
  );
  @Effect()
  public createExpence$: Observable<any> = this.actions.pipe(
    ofType(createExpencePending),
    switchMap(({ expence }: any) => {
      return this.expenceService.createExpence(expence).pipe(
        tap(() => this.toasts.success('You successfully created new expense')),
        map(() => {
          return createExpenceSuccess(), getExpencesPending();
        }),
        catchError(({err}) => {
          this.toasts.error(err.statusText);
          return of(createExpenceError(err), console.log(err));
        })
      );
    })
  );

  @Effect()
  public deleteExpence$: Observable<any> = this.actions.pipe(
    ofType(deleteExpencePending),
    switchMap(({ expenceId }) => {
      return this.expenceService.remove(expenceId).pipe(
        tap(() => this.toasts.success('You successfully removed expense')),
        map(() => {
          return deleteExpenceSuccess();
        }),
        catchError(({err}) => {
          this.toasts.error(err.statusText);
          return of(deleteExpenceError(err));
        })
      );
    })
  );
}
