import { IPurses } from './../reducers/purses.reducer';
import { createAction, props } from '@ngrx/store';

export const getPursesPending = createAction('[Purses] Get Purses Pending');

export const getPursesSuccess = createAction(
  '[Purses] Get Purses Success',
  props<{ purses: IPurses[] }>()
);

export const getPursesError = createAction(
  '[Purses] Get Purses Error',
  props<{ err }>()
);
export const createPursePending = createAction(
  '[Purses] Create Purse Pending',
  props<{
    payload: IPurses;
  }>()
);
export const createPurseSuccess = createAction('[Purses] Create Purse Success');
export const createPursesError = createAction(
  '[Purses] Create Purses Error',
  props<{ err }>()
);
export const removePursePending = createAction(
  '[Perses] Remove Purse Pending',
  props<{ purseId: string }>()
);
export const removePurseSuccess = createAction('[Purses] Remove Purse Success');
export const removePurseError = createAction('[Purses] Remove Purse Error');
