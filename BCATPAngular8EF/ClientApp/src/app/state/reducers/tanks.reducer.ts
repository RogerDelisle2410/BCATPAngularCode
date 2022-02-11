import { Tanks } from "src/models/bcatp";
import * as TanksActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state";

//import { tanksReducer } from 'src/app/state/reducers/tanks.reducer';

export interface TanksState {
  list: Tanks[],
  loading: boolean,
  error: Error
}

export const initialState = {
  list: [],
  loading: false,
  error: undefined
};

export const tanksReducer = createReducer(
  initialState,
  on(TanksActions.FetchTanks, state => (console.log('fetch reducer called'), {
    ...state,
    loading: true,

  })),
  on(TanksActions.LoadTanksSuccess, (state, { tanks }) => (
    (console.log('LoadTanksSuccess reducer called'),
    {
      ...state,
      list: tanks,
      loading: false
    })),
  ),

  on(TanksActions.LoadTanksFailure, (state, { error }) => (
    (console.log('LoadTanksSuccess reducer called'), {
      ...state,
      error: error,
      loading: false
    })),
  ),

  on(TanksActions.AddTanks, state =>
  (console.log('AddTanks reducer called'), {
    ...state,
    loading: true,
  })),

  on(TanksActions.AddTanksSuccess, (state, { tanks }) =>
  (console.log('AddTanksSuccess reducer called'), {
    ...state,
    list: [...state.list, tanks],
    loading: false,
  })),

  on(TanksActions.AddTanksFailure, (state, { error }) => (
    (console.log('AddTanksFailure reducer called'), {
      ...state,
      error: error,
      loading: false
    })),
  ),

  on(TanksActions.EditTanks, state =>
  (console.log('EditTanks reducer called'), {
    ...state,
    loading: true,
  })),

  on(TanksActions.EditTanksSuccess, (state, { tanks }) => ({
    ...state,
    list: [...state.list, tanks],
    loading: false,
  })),

  on(TanksActions.EditTanksFailure, (state, { error }) => (
    (console.log('EditTanksFailure reducer called'), {
      ...state,
      error: error,
      loading: false
    })),
  ),

  on(TanksActions.DeleteTanks, state =>
  (console.log('DeleteTanks reducer called'), {
    ...state,
    loading: true,

  })),

  on(TanksActions.DeleteTanksSuccess, (state, { id }) =>
  (console.log('DeleteTanksSuccess reducer called'), {
    ...state,
    list: state.list.filter(item => item.id !== id),
    loading: false,
  })),
);

//export function reducer(state: TanksState | undefined, action: Action) {
//    return tanksReducer(state, action);
//}

const getTanksFeatureState = (state: AppState) => state.tanks;

export const getTanks = createSelector(
  getTanksFeatureState,
  (state: TanksState) => state.list
);
