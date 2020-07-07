import { createAction, props } from '@ngrx/store';
import { ITransaction } from '../reducers/transactions.reducer';

export const getTransactionsPending = createAction(
    '[Actions] Get Transactions Pending'
);
export const getTransactionsSuccess = createAction(
    '[Actions] Get Transactions Success',
    props<{ transactions: ITransaction[]}>()
);
export const getTransactionsError = createAction(
    '[Transactions] Get Transactions Error',
    props<{err}>()
);
export const createTransactionPending = createAction(
    '[Transactions] Create Transaction Pending',
    props<{ transaction: ITransaction}>()
);
export const createTransactionSuccess = createAction(
    '[Transactions] Create Transaction Success'
);
export const createTransactionError = createAction(
    '[Transactions] Create Transaction Error',
    props<{err}>()
);
export const removeTransactionPending = createAction(
    '[Transactions] Remove Transaction Pending',
    props<{transactionId: string}>()
);
export const  removeTransactionSuccess = createAction(
    '[Transactions] Remove Transactions Success'
);
export const removeTransactionError = createAction(
    '[Transactions] Remove Transaction Error',
    props<{err}>()
);

