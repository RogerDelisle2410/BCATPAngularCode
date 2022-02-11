import { Planes } from "src/models/bcatp";
import * as PlanesActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state";

//import { planesReducer } from 'src/app/state/reducers/planes.reducer';

export interface PlanesState {
  list: Planes[],
  loading: boolean,
  error: Error
}

export const initialState = {
  list: [],
  loading: false,
  error: undefined
};

export const planesReducer = createReducer(
  initialState,
  on(PlanesActions.FetchPlanes, state => (console.log('fetch reducer called'), {
    ...state,
    loading: true,

  })),
  on(PlanesActions.LoadPlanesSuccess, (state, { planes }) => (
    (console.log('LoadPlanesSuccess reducer called'),
    {
      ...state,
      list: planes,
      loading: false
    })),
  ),

  on(PlanesActions.LoadPlanesFailure, (state, { error }) => (
    (console.log('LoadPlanesSuccess reducer called'), {
      ...state,
      error: error,
      loading: false
    })),
  ),

  on(PlanesActions.AddPlanes, state =>
  (console.log('AddPlanes reducer called'), {
    ...state,
    loading: true,
  })),

  on(PlanesActions.AddPlanesSuccess, (state, { planes }) =>
  (console.log('AddPlanesSuccess reducer called'), {
    ...state,
    list: [...state.list, planes],
    loading: false,
  })),

  on(PlanesActions.AddPlanesFailure, (state, { error }) => (
    (console.log('AddPlanesFailure reducer called'), {
      ...state,
      error: error,
      loading: false
    })),
  ),

  on(PlanesActions.EditPlanes, state =>
  (console.log('EditPlanes reducer called'), {
    ...state,
    loading: true,
  })),

  on(PlanesActions.EditPlanesSuccess, (state, { planes }) => ({
    ...state,
    list: [...state.list, planes],
    loading: false,
  })),

  on(PlanesActions.EditPlanesFailure, (state, { error }) => (
    (console.log('EditPlanesFailure reducer called'), {
      ...state,
      error: error,
      loading: false
    })),
  ),

  on(PlanesActions.DeletePlanes, state =>
  (console.log('DeletePlanes reducer called'), {
    ...state,
    loading: true,

  })),

  on(PlanesActions.DeletePlanesSuccess, (state, { id }) =>
  (console.log('DeletePlanesSuccess reducer called'), {
    ...state,
    list: state.list.filter(item => item.id !== id),
    loading: false,
  })),
);

//export function reducer(state: PlanesState | undefined, action: Action) {
//    return planesReducer(state, action);
//}

const getPlanesFeatureState = (state: AppState) => state.planes;

export const getPlanes = createSelector(
  getPlanesFeatureState,
  (state: PlanesState) => state.list
);
