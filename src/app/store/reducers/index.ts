import { categoriesReducer, ICategoriesStore } from './categories.reducer';
import { pursesReducer, IPursesState } from './purses.reducer';
import {
    Params,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
  } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer, IAuth } from './auth.reducer';
import * as fromRouter from '@ngrx/router-store';
import { expencesReducer, IExpencesState } from './expences.reducer';
import { incomesReducer, IIncomesState } from './incomes.reducer';
export interface IStore {
    auth: IAuth;
    routrReducer: IRouterStateUrl;
    expences: IExpencesState;
    incomes: IIncomesState;
    purses: IPursesState;
    categories: ICategoriesStore;
    // events: IEventsState;
  }
export const reducers: ActionReducerMap<any> = {
    auth: authReducer,
    routerReducer: fromRouter.routerReducer,
    expences: expencesReducer,
    incomes: incomesReducer,
    purses: pursesReducer,
    categories: categoriesReducer
    // events: eventsReducer
  };
export interface IRouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
  }
  // <export interface IGetEventState {
  //   routerReducer: IRouterStateUrl;
  //   effects: IEventsState;
  //   auth: IAuth;
  // }>

export class CustomRouterSerializer
    implements fromRouter.RouterStateSerializer<IRouterStateUrl> {
    public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
      const {
        url,
        root: { queryParams },
      } = routerState;

      let state: ActivatedRouteSnapshot = routerState.root;
      while (state.firstChild) {
        state = state.firstChild;
      }
      const { params } = state;
      return { url, queryParams, params };
    }
  }
