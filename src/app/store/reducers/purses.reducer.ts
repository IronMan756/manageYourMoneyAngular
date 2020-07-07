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
    on(getPursesPending, (state: IPursesState) => ({
        ...state,
        loading: true
    })),
    on(getPursesSuccess, (state: IPursesState, {purses}) => ({
        ...state,
        items: purses,
        loading: false
    })),
    on(createPursePending, (state: IPursesState) => ({
        ...state,
        loading: true
    })),
    on(createPurseSuccess, (state: IPursesState) => ({
        ...state,
        loading: false
    })),
    on(removePursePending, (state: IPursesState) => ({
        ...state,
        loading: true
    })),
    on(removePurseSuccess, (state: IPursesState) => ({
        ...state,
        loading: false
    })),

);
