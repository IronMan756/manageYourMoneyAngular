import { createAction, props } from '@ngrx/store';
import { ICategories } from '../reducers/categories.reducer';

export const getCategoriesPending = createAction(
    '[Categories] Get Categories Pending'
);
export const getCategoriesSuccess = createAction(
    '[Categories] Get Categories Success',
    props<{categories: ICategories[]}>()
);
export const getCategoriesError = createAction(
    '[Categories] Get Categories Error',
    props<{err}>()
);




export const createCategoryPending = createAction(
    '[Categories] Create Categories Pending',
    props<{category}>()
);
export const createCategorySuccess = createAction(
    '[Categories] Create Categories Success'
);
export const createCategoryError = createAction(
    '[Categories] Create Categories Error',
    props<{err}>()
);
