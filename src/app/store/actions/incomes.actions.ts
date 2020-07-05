import { Actions } from '@ngrx/effects';
import { createAction, props } from '@ngrx/store';
import { IIncomes } from '../reducers/incomes.reducer';

export const getIncomesPending = createAction('[Incomes] Get Incomes Pending');
export const getIncomesSuccess = createAction(
  '[Incomes] Get Incomes Success',
  props<{ incomes: IIncomes[] }>()
);

export const getIncomesError = createAction(
  '[Incomes] Get Incomes Error',
  props<{ err }>()
);

export const createIncomePending = createAction(
  '[Incomes] Create Incom Pending',
  props<{
    userId?: string;
    purseId?: string;
    suma?: number;
    data?: Date;
    name?: string;
    description?: string;
  }>()
);
export const createIncomeSuccess = createAction(
  '[Incomes] Create Incom Success'
);
export const removeIncomePending = createAction(
  '[Incomes] Remove Incom Pending',
  props<{ incomeId: string }>()
);
export const createIncomesError = createAction(
  '[Incomes] Remove Incomes Error',
  props<{ err }>()
);
export const removeIncomeSuccess = createAction(
  '[Incomes] Remove Incom Success'
);
export const removeIncomesError = createAction(
  '[Incomes] Remove Incomes Error',
  props<{ err }>()
);
