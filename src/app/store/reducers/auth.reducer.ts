import { createReducer, on } from '@ngrx/store';
import { signUp } from '../actions/auth.actions';


export interface IAuth {
    uid: string;
    email: string;
    name: string;
    bg_img: string;
}
export const authReducer = createReducer(
    on(signUp, (state: IAuth) => ({
        ...state, loading: true
    }))
);
