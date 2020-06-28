import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { getExpencesPending, getExpencesSuccess, getExpencesError } from '../actions/expences.actions';
import { ExpencesService } from '../../shared/services/expences.service';

@Injectable()
export class ExpencesEffects {
    constructor(
        private actions: Actions,
        private expenceService: ExpencesService
    ){}

    @Effect()
    public getExpences$: Observable<any> = this.actions.pipe(
        ofType(getExpencesPending),
        switchMap(() => {
            return this.expenceService.getExpences().pipe(
                map( (data: any) => {
                    console.log(data)
                    return getExpencesSuccess(data);
                })
            );
        }
        ),
        catchError((err) => of(getExpencesError(err), console.log(err)))
    );
}
