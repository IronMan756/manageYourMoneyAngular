import { createReducer, on } from '@ngrx/store';
import { signUpPending, signInSuccess } from '../actions/auth.actions';


export interface IAuth {
    uid?: string;
    email?: string;
    name?: string;
    bg_img?: string;
    authorized?:boolean
}
export const authReducer = createReducer(
    on(signUpPending, (state: any) => ({
        ...state, loading: true
    })),
    on(signInSuccess, (state: any, payload) => ({
        ...state, loading: false, authorized: payload.authorased
    })),
);
