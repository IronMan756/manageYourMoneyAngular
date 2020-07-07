
import {
  getTransactionsPending,
  getTransactionsSuccess,
  createTransactionPending,
  createTransactionSuccess,
  removeTransactionPending,
  removeTransactionSuccess,
} from './../actions/transactions.actions';
import { createReducer, on } from '@ngrx/store';

export interface ITransaction {
  userId: string;
  purseIdTo: string;
  purseIdFrom: string;
  incomeId: string;
  expenceId: string;
  suma: number;
  data?: Date;
  name: string;
  description: string;
  categoryId: string;
}
export interface ITransactionsState {
  items: ITransaction[];
  loading: boolean;
}
const initState: ITransactionsState = {
  items: [],
  loading: false,
};

export const transactionsReducer = createReducer(
  initState,
  on(getTransactionsPending, (state: ITransactionsState) => ({
    ...state,
    loading: true,
  })),
  on(getTransactionsSuccess, (state: ITransactionsState, { transactions }) => ({
    ...state,
    items: transactions,
    loading: false,
  })),
  on(createTransactionPending, (state: ITransactionsState) => ({
    ...state,
    loading: true,
  })),
  on(createTransactionSuccess, (state: ITransactionsState) => ({
    ...state,
    loading: false,
  })),
  on(removeTransactionPending, (state: ITransactionsState) => ({
    ...state,
    loading: true,
  })),
  on(removeTransactionSuccess, (state: ITransactionsState) => ({
    ...state,
    loading: false,
  }))
);
