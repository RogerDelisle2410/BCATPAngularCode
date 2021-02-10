import { Airforce } from "src/models/bcatp";
import * as AirforceActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state"; 

//import { airforceReducer } from 'src/app/state/reducers/airforce.reducer';

export interface AirforceState {
    list: Airforce[],
    loading: boolean,
    error: Error
}

export const initialState = {
    list: [],
    loading: false,
    error: undefined
};

export const airforceReducer = createReducer(
    initialState,
    on(AirforceActions.FetchAirforce, state => (console.log('fetch reducer called'), {
        ...state,
        loading: true,

    })),
    on(AirforceActions.LoadAirforceSuccess, (state, { airforces }) => (
        (console.log('LoadAirforceSuccess reducer called'),
            {
                ...state,
                list: airforces,
                loading: false
            })),
    ),

    on(AirforceActions.LoadAirforceFailure, (state, { error }) => (
        (console.log('LoadAirforceSuccess reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(AirforceActions.AddAirforce, state =>
        (console.log('AddAirforce reducer called'), {
            ...state,
            loading: true,
        })),

    on(AirforceActions.AddAirforceSuccess, (state, { airforce }) =>
        (console.log('AddAirforceSuccess reducer called'), {
            ...state,
            list: [...state.list, airforce],
            loading: false,
        })),

    on(AirforceActions.AddAirforceFailure, (state, { error }) => (
        (console.log('AddAirforceFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(AirforceActions.EditAirforce, state =>
        (console.log('EditAirforce reducer called'), {
            ...state,
            loading: true,
        })),

    on(AirforceActions.EditAirforceSuccess, (state, { airforce }) => ({
        ...state,
        list: [...state.list, airforce],
        loading: false,
    })),

    on(AirforceActions.EditAirforceFailure, (state, { error }) => (
        (console.log('EditAirforceFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(AirforceActions.DeleteAirforce, state =>
        (console.log('DeleteAirforce reducer called'), {
            ...state,
            loading: true,

        })),

    on(AirforceActions.DeleteAirforceSuccess, (state, { id }) =>
        (console.log('DeleteAirforceSuccess reducer called'), {
            ...state,
            list: state.list.filter(item => item.id !== id),
            loading: false,
        })),
);

//export function reducer(state: AirforceState | undefined, action: Action) {
//    return airforceReducer(state, action);
//}

const getAirforceFeatureState = (state: AppState) => state.airforce;

export const getAirforces = createSelector(
    getAirforceFeatureState,
    (state: AirforceState) => state.list
);
