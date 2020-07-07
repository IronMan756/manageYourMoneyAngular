import { createReducer, on } from '@ngrx/store';
import { signUpPending, signInSuccess } from '../actions/auth.actions';

export interface IAuth {
  uid?: string;
  email?: string;
  name?: string;
  bg_img?: string;
  token?: string;
}
export interface IAuthState {
  token: string;
  loading: boolean;
};
const initState = {
  token: '',
  loading: false,
};
export const authReducer = createReducer(
  initState,
  on(signUpPending, (state: IAuthState) => ({
    ...state,
    loading: true,
  })),
  on(signInSuccess, (state: IAuthState, { token }) => ({
    ...state,
    loading: false,
    token,
  }))
);
