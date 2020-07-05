import { mergeMap, map, catchError } from 'rxjs/operators';
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

@Injectable()
export class CategoriesEffects {
  [x: string]: any;
  constructor(
    private action: Actions,
    private categoriesService: CategoriesService
  ) {}
  @Effect()
  public getCategories$: Observable<Action> = this.action.pipe(
    ofType(getCategoriesPending),
    mergeMap(() => {
      return this.categoriesService.getCategories().pipe(
        map((categories: ICategories[]) => {
          return getCategoriesSuccess({ categories });
        })
      );
    }),
    catchError((err) => of(getCategoriesError(err)))
  );
  @Effect()
  public createCategory$: Observable<Action> = this.action.pipe(
    ofType(createCategoryPending),
    mergeMap(({ category }) => {
      return this.categoriesService.createCategory(category).pipe(
        map(() => {
          return createCategorySuccess();
        })
      );
    }),
    catchError((err) => of(createCategoryError(err)))
  );
  @Effect()
  public removeCategory$: Observable<Action> = this.action.pipe(
    ofType(removeCategoryPending),
    mergeMap(({ categoryId }) => {
      return this.categoriesService.removeCategory(categoryId).pipe(
        map(() => {
          return removeCategorySuccess();
        })
      );
    }),
    catchError((err) => of(removeCategoryError(err)))
  );
}
