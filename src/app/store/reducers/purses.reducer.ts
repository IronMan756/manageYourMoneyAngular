import { createReducer, on } from '@ngrx/store';
import { getPursesPending, getPursesSuccess } from '../actions/purses.actions';



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
        loading: true
    })),
)