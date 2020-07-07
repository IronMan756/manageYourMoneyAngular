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
export interface IIncomesState{
   items: IIncomes[];
   loading: boolean;
}

const InitState = {
  items: [],
  loading: false,
};


export const incomesReducer = createReducer(
  InitState,
  on(getIncomesPending, (state: IIncomesState) => ({
    ...state,
    loading: true,
  })),
  on(getIncomesSuccess, (state: IIncomesState, {incomes}) => ({
   ...state,
   items: incomes,
   loading: false,
 })),
 on(createIncomePending, (state: IIncomesState) => ({
   ...state,
   loading: true,
 })),
 on(createIncomeSuccess, (state: IIncomesState) => ({
   ...state,
   loading: false,
 })),
 on(removeIncomePending, (state: IIncomesState) => ({
   ...state,
   loading: true,
 })),
 on(removeIncomeSuccess, (state: IIncomesState) => ({
   ...state,
   loading: false,
 })),
);
