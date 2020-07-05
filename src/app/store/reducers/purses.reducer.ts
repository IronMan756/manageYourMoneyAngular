import { createReducer, on } from '@ngrx/store';
import { getPursesPending, getPursesSuccess, createPursePending, createPurseSuccess, removePursePending, removePurseSuccess } from '../actions/purses.actions';



export interface IPursesState{
    items: IPurses[];
    loading: boolean;
}
export interface IPurses{
    userId?: string;
    name?: string;
    categoryId?: string;
    balance?: number;
}


const initState = {
    items: [],
    loading: false
};

export const pursesReducer = createReducer(
    initState,
    on(getPursesPending, (state: any) => ({
        ...state,
        loading: true
    })),
    on(getPursesSuccess, (state: any, {purses}) => ({
        ...state,
        items: purses,
        loading: false
    })),
    on(createPursePending, (state: any) => ({
        ...state,
        loading: true
    })),
    on(createPurseSuccess, (state: any) => ({
        ...state,
        loading: false
    })),
    on(removePursePending, (state: any) => ({
        ...state,
        loading: true
    })),
    on(removePurseSuccess, (state: any) => ({
        ...state,
        loading: false
    })),

);
