import { IPurses } from './../reducers/purses.reducer';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { getPursesPending, getPursesSuccess, getPursesError, createPursePending, createPurseSuccess, createPursesError } from './../actions/purses.actions';
import { Observable, of } from 'rxjs';
import { PursesService } from './../../shared/services/purses.service';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

@Injectable()
export class PursesEffects{
    constructor(
        public action: Actions,
        public pursesService: PursesService
    ){}
    @Effect()
    public getPurses$: Observable<Action> = this.action.pipe(
        ofType(getPursesPending),
        mergeMap( () => {
            return this.pursesService.getPurses().pipe(
                map( (purses) => {
                    console.log(purses)
                    return getPursesSuccess({purses});
                })
            );
        }),
        catchError( (err) => of(getPursesError(err)))
    );
    @Effect()
    public createPurse$: Observable<Action> = this.action.pipe(
        ofType(createPursePending),
        mergeMap( ({payload}: any) => {
            return this.pursesService.createPurse(payload).pipe(
                map( (_) => {
                    return createPurseSuccess();
                })
            );
        }),
        catchError( (err) => of(createPursesError(err)))
    );
}

