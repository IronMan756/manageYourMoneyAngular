import {
  getTransactionsSuccess,
  getTransactionsError,
  createTransactionPending,
  createTransactionSuccess,
  createTransactionError,
  removeTransactionPending,
  removeTransactionSuccess,
  removeTransactionError,
} from './../actions/transactions.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TransactionsService } from '../../shared/services/transactionsServise';
import { getTransactionsPending } from '../actions/transactions.actions';
import { Action } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TransactionsEffects {
  constructor(
    private action: Actions,
    private transactionsServise: TransactionsService,
    private toasts: ToastrService
  ) {}
  @Effect()
  public getTransactions$: Observable<Action> = this.action.pipe(
    ofType(getTransactionsPending),
    mergeMap(() => {
      return this.transactionsServise.getTransactions().pipe(
        map((transactions) => {
          return getTransactionsSuccess({ transactions });
        })
      );
    }),
    catchError((err) => of(getTransactionsError(err)))
  );
  @Effect()
  public createTransaction$: Observable<Action> = this.action.pipe(
    ofType(createTransactionPending),
    mergeMap(({ transaction }) => {
      return this.transactionsServise.creatTransaction(transaction).pipe(
        tap(() =>
          this.toasts.success('You successfully added new transaction')
        ),
        map(() => createTransactionSuccess()),
        catchError((err) => of(createTransactionError(err)))
      );
    })
  );
  @Effect()
  public removeTransaction$: Observable<Action> = this.action.pipe(
    ofType(removeTransactionPending),
    mergeMap(({ transactionId }) => {
      return this.transactionsServise.removeTransction(transactionId).pipe(
        tap(() => this.toasts.success('You successfully removed transaction')),
        map(() => removeTransactionSuccess()),
        catchError((err) => of(removeTransactionError(err)))
      );
    })
  );
}
