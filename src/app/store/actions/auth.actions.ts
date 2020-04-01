import { createAction } from '@ngrx/store';

export const signUp = createAction(
    '[Auth] SignUp',
    (payload: any) => ({payload}),
);