import { authReducer } from './auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
export const reducers: ActionReducerMap<any> ={
    auth: authReducer
}