import { createAction } from '@ngrx/store';

export const getExpencesPending = createAction(
    '[Expences] Get Expences Pending'
  );
export const getExpencesSuccess = createAction(
    '[Expences] Get Expences Success',
    (payload: any) => ({
      payload,
    })
  );
export const getExpencesError = createAction(
    '[Expences] Get Expences Error',
    (payload: any) => ({
      payload,
    })
  )