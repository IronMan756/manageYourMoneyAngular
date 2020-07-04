import { createReducer, on } from '@ngrx/store';
import { getIncomesPending, getIncomesSuccess, createIncomePending, createIncomeSuccess, removeIncomePending, removeIncomeSuccess } from '../actions/incomes.actions';

export interface IIncomes {
  userId?: string;
  purseId?: string;
  suma?: number;
  data?: Date;
  name?: string;
  description?: string;
  _id?: string;
}

const InitState = {
  items: [],
  isLoading: false,
};

interface IIncomesState {
  items: IIncomes[];
  loading: boolean;
}

export const incomesReducer = createReducer(
  InitState,
  on(getIncomesPending, (state: any) => ({
    ...state,
    loading: true,
  })),
  on(getIncomesSuccess, (state: any, {incomes}) => ({
   ...state,
   items: incomes,
   loading: false,
 })),
 on(createIncomePending, (state: any) => ({
   ...state,
   loading: true,
 })),
 on(createIncomeSuccess, (state: any) => ({
   ...state,
   loading: false,
 })),
 on(removeIncomePending, (state: any) => ({
   ...state,
   loading: true,
 })),
 on(removeIncomeSuccess, (state: any) => ({
   ...state,
   loading: false,
 })),
);
