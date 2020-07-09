import { IPurses } from './../reducers/purses.reducer';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import {
  getPursesPending,
  getPursesSuccess,
  getPursesError,
  createPursePending,
  createPurseSuccess,
  createPursesError,
  removePursePending,
  removePurseError,
  removePurseSuccess,
} from './../actions/purses.actions';
import { Observable, of } from 'rxjs';
import { PursesService } from './../../shared/services/purses.service';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class PursesEffects {
  constructor(
    public action: Actions,
    public pursesService: PursesService,
    private toasts: ToastrService
  ) {}
  @Effect()
  public getPurses$: Observable<Action> = this.action.pipe(
    ofType(getPursesPending),
    mergeMap(() => {
      return this.pursesService.getPurses().pipe(
        map((purses) => {
          console.log(purses);
          return getPursesSuccess({ purses });
        }),
        catchError(({ err }) => {
          this.toasts.error(err.statusText);
          return of(getPursesError(err));
        })
      );
    })
  );
  @Effect()
  public createPurse$: Observable<Action> = this.action.pipe(
    ofType(createPursePending),
    mergeMap(({ payload }: any) => {
      return this.pursesService.createPurse(payload).pipe(
        tap(() => this.toasts.success('You successfully added new purse')),
        map((_) => {
          return createPurseSuccess();
        }),
        catchError(({ err }) => {
          this.toasts.error(err.statusText);
          return of(createPursesError(err));
        })
      );
    })
  );
  @Effect()
  public removePurse$: Observable<Action> = this.action.pipe(
    ofType(removePursePending),
    mergeMap(({ purseId }) => {
      return this.pursesService.removePurse(purseId).pipe(
        tap(() => this.toasts.success('You successfully removed purse')),
        map(() => removePurseSuccess()),
        catchError((err) => of(removePurseError(err)))
      );
    })
  );
}
