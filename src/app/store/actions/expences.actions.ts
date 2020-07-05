import { IExpences } from './../reducers/expences.reducer';
import { createAction, props } from '@ngrx/store';

export const getExpencesPending = createAction(
  '[Expences] Get Expences Pending'
);
export const getExpencesSuccess = createAction(
  '[Expences] Get Expences Success',
  props<{ expences: IExpences[] }>()
);
export const getExpencesError = createAction(
  '[Expences] Get Expences Error',
  props<{err }>()
);
export const createExpencePending = createAction(
  '[Expences] Create Expence Pending',
  props<{ expence: any }>()
);
export const createExpenceSuccess = createAction(
  '[Expences] Create Expence Success'
);
export const createExpenceError = createAction(
  '[Expences] Create Expence Error',
  props<{ err }>()
);
export const deleteExpencePending = createAction(
  '[Expences] Delete Expence Pending',
  props<{ expenceId: string }>()
);

export const deleteExpenceSuccess = createAction(
  '[Expences] Delete Expence Success'
);
export const deleteExpenceError = createAction(
  '[Expences] Delete Expence Error',
  props<{ err }>()
);
