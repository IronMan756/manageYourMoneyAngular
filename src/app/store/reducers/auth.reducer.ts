import { createReducer, on } from '@ngrx/store';
import { signUpPending, signInSuccess } from '../actions/auth.actions';


export interface IAuth {
    uid?: string;
    email?: string;
    name?: string;
    bg_img?: string;
    token?: string;
}
export const authReducer = createReducer(
    {
        loading: false,
      },
    on(signUpPending, (state: any) => ({
        ...state, loading: true
    })),
    on(signInSuccess, (state: any,  {token} ) => ({
        ...state, loading: false, token
    })),
);
