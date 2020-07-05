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
export interface ICategoriesStore {
    items: ICategories[];
    loading: boolean;
}
export const categoriesReducer = createReducer(
  {
    items: [],
    loading: false,
  },
  on(getCategoriesPending, (state: any) => ({
    ...state,
    loading: true,
  })),
  on(getCategoriesSuccess, (state: any, { categories }) => ({
    ...state,
    loading: false,
    items: categories,
  })),
  on(createCategoryPending, (state: any) => ({
    ...state,
    loading: true,
  })),
  on(createCategorySuccess, (state: any) => ({
    ...state,
    loading: false
  })),
  on(removeCategoryPending, (state: any) => ({
    ...state,
    loading: true,
  })),
  on(removeCategorySuccess, (state: any) => ({
    ...state,
    loading: false
  }))
);
