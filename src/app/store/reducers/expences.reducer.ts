import { createReducer, on } from '@ngrx/store';
import { getExpencesPending, getExpencesSuccess } from '../actions/expences.actions';
import { Time } from '@angular/common';

export interface IExpences {
    userId: string;
    purseId: string;
    suma: number;
    data: Time;
    name: string;
    description: string;
}

export const expencesReducer = createReducer(
    {
        items: [],
        loading: false,
      },
    on(getExpencesPending, (state: any) => ({
        ...state, loading: true
    })),
    on(getExpencesSuccess, (state: any, {expences}) => ({
        ...state, loading: false, items: expences
    })),
)