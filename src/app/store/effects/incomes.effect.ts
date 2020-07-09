import { IIncomes } from './../reducers/incomes.reducer';
import {
  getIncomesPending,
  getIncomesSuccess,
  createIncomeSuccess,
  createIncomePending,
  removeIncomePending,
  removeIncomeSuccess,
  getIncomesError,
  createIncomesError,
  removeIncomesError,
} from './../actions/incomes.actions';
import { IncomesService } from './../../shared/services/incomes.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class IncomesEffects {
  constructor(
    private action: Actions,
    private incomesService: IncomesService,
    private toasts: ToastrService
  ) {}
  @Effect()
  public getIncomes$: Observable<Action> = this.action.pipe(
    ofType(getIncomesPending),
    mergeMap(() => {
      return this.incomesService.getIncomes().pipe(
        map((incomes: IIncomes[]) => {
          console.log(incomes);
          return getIncomesSuccess({ incomes });
        }),
        catchError(({ err }) => {
          this.toasts.error(err.statusText);
          return of(getIncomesError(err));
        })
      );
    })
  );
  @Effect()
  public createIncome$: Observable<Action> = this.action.pipe(
    ofType(createIncomePending),
    mergeMap(({ payload }: any) => {
      return this.incomesService.createIncome(payload).pipe(
        tap(() => this.toasts.success('You successfully added new income')),
        map(() => {
          return createIncomeSuccess();
        }),
        catchError(({ err }) => {
          this.toasts.error(err.statusText);
          return of(createIncomesError(err));
        })
      );
    })
  );
  @Effect()
  public removeIncome$: Observable<Action> = this.action.pipe(
    ofType(removeIncomePending),
    mergeMap(({ incomeId }) => {
      return this.incomesService.removeIncome(incomeId).pipe(
        tap(() => this.toasts.success('You successfully removed income')),
        map(() => {
          return removeIncomeSuccess();
        }),
        catchError(({ err }) => {
          this.toasts.error(err.statusText);
          return of(removeIncomesError(err));
        })
      );
    })
  );
}
