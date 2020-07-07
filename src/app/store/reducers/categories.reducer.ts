import { createReducer, on } from '@ngrx/store';
import {
  getCategoriesPending,
  getCategoriesSuccess,
  createCategoryPending,
  createCategorySuccess,
  removeCategoryPending,
  removeCategorySuccess,
} from '../actions/categories.actions';



export interface ICategories {
  name: string;
  description?: string;
  img?: string;
}
export interface ICategoriesState {
    items: ICategories[];
    loading: boolean;
}
export const categoriesReducer = createReducer(
  {
    items: [],
    loading: false,
  },
  on(getCategoriesPending, (state: ICategoriesState) => ({
    ...state,
    loading: true,
  })),
  on(getCategoriesSuccess, (state: ICategoriesState, { categories }) => ({
    ...state,
    loading: false,
    items: categories,
  })),
  on(createCategoryPending, (state: ICategoriesState) => ({
    ...state,
    loading: true,
  })),
  on(createCategorySuccess, (state: ICategoriesState) => ({
    ...state,
    loading: false
  })),
  on(removeCategoryPending, (state: ICategoriesState) => ({
    ...state,
    loading: true,
  })),
  on(removeCategorySuccess, (state: ICategoriesState) => ({
    ...state,
    loading: false
  }))
);
