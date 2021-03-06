import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import {
  getCategoriesPending,
  getCategoriesSuccess,
  getCategoriesError,
  createCategoryError,
  createCategoryPending,
  createCategorySuccess,
  removeCategoryPending,
  removeCategorySuccess,
  removeCategoryError,
} from './../actions/categories.actions';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { CategoriesService } from '../../shared/services/categories.service';
import { ICategories } from '../reducers/categories.reducer';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CategoriesEffects {
  constructor(
    private action: Actions,
    private categoriesService: CategoriesService,
    private toasts: ToastrService
  ) {}
  @Effect()
  public getCategories$: Observable<Action> = this.action.pipe(
    ofType(getCategoriesPending),
    mergeMap(() => {
      return this.categoriesService.getCategories().pipe(
        map((categories: ICategories[]) => {
          return getCategoriesSuccess({ categories });
        }),
        catchError(({err}) => {
          this.toasts.error(err.statusText);
          return of(getCategoriesError(err));
        })
      );
    })
  );
  @Effect()
  public createCategory$: Observable<Action> = this.action.pipe(
    ofType(createCategoryPending),
    mergeMap(({ category }) => {
      return this.categoriesService.createCategory(category).pipe(
        tap(() => this.toasts.success('You successfully created category')),
        map(() => {
          return createCategorySuccess();
        }),
        catchError(({err}) => {
          this.toasts.error(err.statusText);
          return of(createCategoryError(err));
        })
      );
    })
  );
  @Effect()
  public removeCategory$: Observable<Action> = this.action.pipe(
    ofType(removeCategoryPending),
    mergeMap(({ categoryId }) => {
      return this.categoriesService.removeCategory(categoryId).pipe(
        tap(() => this.toasts.success('You successfully removed category')),
        map(() => {
          return removeCategorySuccess();
        }),
        catchError(({ err }) => {
          this.toasts.error(err.statusText);
          return of(removeCategoryError(err));
        })
      );
    })
  );
}
