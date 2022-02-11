import { Ships } from "src/models/bcatp";
import * as ShipsActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state";

//import { shipsReducer } from 'src/app/state/reducers/ships.reducer';

export interface ShipsState {
  list: Ships[],
  loading: boolean,
  error: Error
}

export const initialState = {
  list: [],
  loading: false,
  error: undefined
};

export const shipsReducer = createReducer(
  initialState,
  on(ShipsActions.FetchShips, state => (console.log('fetch reducer called'), {
    ...state,
    loading: true,

  })),
  on(ShipsActions.LoadShipsSuccess, (state, { ships }) => (
    (console.log('LoadShipsSuccess reducer called'),
    {
      ...state,
      list: ships,
      loading: false
    })),
  ),

  on(ShipsActions.LoadShipsFailure, (state, { error }) => (
    (console.log('LoadShipsSuccess reducer called'), {
      ...state,
      error: error,
      loading: false
    })),
  ),

  on(ShipsActions.AddShips, state =>
  (console.log('AddShips reducer called'), {
    ...state,
    loading: true,
  })),

  on(ShipsActions.AddShipsSuccess, (state, { ships }) =>
  (console.log('AddShipsSuccess reducer called'), {
    ...state,
    list: [...state.list, ships],
    loading: false,
  })),

  on(ShipsActions.AddShipsFailure, (state, { error }) => (
    (console.log('AddShipsFailure reducer called'), {
      ...state,
      error: error,
      loading: false
    })),
  ),

  on(ShipsActions.EditShips, state =>
  (console.log('EditShips reducer called'), {
    ...state,
    loading: true,
  })),

  on(ShipsActions.EditShipsSuccess, (state, { ships }) => ({
    ...state,
    list: [...state.list, ships],
    loading: false,
  })),

  on(ShipsActions.EditShipsFailure, (state, { error }) => (
    (console.log('EditShipsFailure reducer called'), {
      ...state,
      error: error,
      loading: false
    })),
  ),

  on(ShipsActions.DeleteShips, state =>
  (console.log('DeleteShips reducer called'), {
    ...state,
    loading: true,

  })),

  on(ShipsActions.DeleteShipsSuccess, (state, { id }) =>
  (console.log('DeleteShipsSuccess reducer called'), {
    ...state,
    list: state.list.filter(item => item.id !== id),
    loading: false,
  })),
);

//export function reducer(state: ShipsState | undefined, action: Action) {
//    return shipsReducer(state, action);
//}

const getShipsFeatureState = (state: AppState) => state.ships;

export const getShips = createSelector(
  getShipsFeatureState,
  (state: ShipsState) => state.list
);
