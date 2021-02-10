import { Pinetree } from "src/models/bcatp";
import * as PinetreeActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state"; 

//import { pinetreeReducer } from 'src/app/state/reducers/pinetree.reducer';

export interface PinetreeState {
    list: Pinetree[],
    loading: boolean,
    error: Error
}

export const initialState = {
    list: [],
    loading: false,
    error: undefined
};

export const pinetreeReducer = createReducer(
    initialState,
    on(PinetreeActions.FetchPinetree, state => (console.log('fetch reducer called'), {
        ...state,
        loading: true,

    })),
    on(PinetreeActions.LoadPinetreeSuccess, (state, { pinetrees }) => (
        (console.log('LoadPinetreeSuccess reducer called'),
            {
                ...state,
                list: pinetrees,
                loading: false
            })),
    ),

    on(PinetreeActions.LoadPinetreeFailure, (state, { error }) => (
        (console.log('LoadPinetreeSuccess reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(PinetreeActions.AddPinetree, state =>
        (console.log('AddPinetree reducer called'), {
            ...state,
            loading: true,
        })),

    on(PinetreeActions.AddPinetreeSuccess, (state, { pinetree }) =>
        (console.log('AddPinetreeSuccess reducer called'), {
            ...state,
            list: [...state.list, pinetree],
            loading: false,
        })),

    on(PinetreeActions.AddPinetreeFailure, (state, { error }) => (
        (console.log('AddPinetreeFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(PinetreeActions.EditPinetree, state =>
        (console.log('EditPinetree reducer called'), {
            ...state,
            loading: true,
        })),

    on(PinetreeActions.EditPinetreeSuccess, (state, { pinetree }) => ({
        ...state,
        list: [...state.list, pinetree],
        loading: false,
    })),

    on(PinetreeActions.EditPinetreeFailure, (state, { error }) => (
        (console.log('EditPinetreeFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(PinetreeActions.DeletePinetree, state =>
        (console.log('DeletePinetree reducer called'), {
            ...state,
            loading: true,

        })),

    on(PinetreeActions.DeletePinetreeSuccess, (state, { id }) =>
        (console.log('DeletePinetreeSuccess reducer called'), {
            ...state,
            list: state.list.filter(item => item.id !== id),
            loading: false,
        })),
);

//export function reducer(state: PinetreeState | undefined, action: Action) {
//    return pinetreeReducer(state, action);
//}

const getPinetreeFeatureState = (state: AppState) => state.pinetree;

export const getPinetrees = createSelector(
    getPinetreeFeatureState,
    (state: PinetreeState) => state.list
);
