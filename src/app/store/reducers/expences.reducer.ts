import { createReducer, on } from '@ngrx/store';
import {
  getExpencesPending,
  getExpencesSuccess,
} from '../actions/expences.actions';
import { Time } from '@angular/common';

export interface IExpences {
  userId: string;
  purseId: string;
  suma: number;
  data: Time;
  name: string;
  description: string;
}
export interface IExpencesState {
  items: IExpences[];
  loading: boolean;
}

export const expencesReducer = createReducer(
  {
    items: [],
    loading: false,
  },
  on(getExpencesPending, (state: IExpencesState) => ({
    ...state,
    loading: true,
  })),
  on(getExpencesSuccess, (state: IExpencesState, { expences }) => ({
    ...state,
    loading: false,
    items: expences,
  }))
);
