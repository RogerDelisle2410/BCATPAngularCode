import { Defunct } from "src/models/bcatp";
import * as DefunctActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state"; 

//import { defunctReducer } from 'src/app/state/reducers/defunct.reducer';

export interface DefunctState {
    list: Defunct[],
    loading: boolean,
    error: Error
}

export const initialState = {
    list: [],
    loading: false,
    error: undefined
};

export const defunctReducer = createReducer(
    initialState,
    on(DefunctActions.FetchDefunct, state => (console.log('fetch reducer called'), {
        ...state,
        loading: true,

    })),
    on(DefunctActions.LoadDefunctSuccess, (state, { defuncts }) => (
        (console.log('LoadDefunctSuccess reducer called'),
            {
                ...state,
                list: defuncts,
                loading: false
            })),
    ),

    on(DefunctActions.LoadDefunctFailure, (state, { error }) => (
        (console.log('LoadDefunctSuccess reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(DefunctActions.AddDefunct, state =>
        (console.log('AddDefunct reducer called'), {
            ...state,
            loading: true,
        })),

    on(DefunctActions.AddDefunctSuccess, (state, { defunct }) =>
        (console.log('AddDefunctSuccess reducer called'), {
            ...state,
            list: [...state.list, defunct],
            loading: false,
        })),

    on(DefunctActions.AddDefunctFailure, (state, { error }) => (
        (console.log('AddDefunctFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(DefunctActions.EditDefunct, state =>
        (console.log('EditDefunct reducer called'), {
            ...state,
            loading: true,
        })),

    on(DefunctActions.EditDefunctSuccess, (state, { defunct }) => ({
        ...state,
        list: [...state.list, defunct],
        loading: false,
    })),

    on(DefunctActions.EditDefunctFailure, (state, { error }) => (
        (console.log('EditDefunctFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(DefunctActions.DeleteDefunct, state =>
        (console.log('DeleteDefunct reducer called'), {
            ...state,
            loading: true,

        })),

    on(DefunctActions.DeleteDefunctSuccess, (state, { id }) =>
        (console.log('DeleteDefunctSuccess reducer called'), {
            ...state,
            list: state.list.filter(item => item.id !== id),
            loading: false,
        })),
);

//export function reducer(state: DefunctState | undefined, action: Action) {
//    return defunctReducer(state, action);
//}

const getDefunctFeatureState = (state: AppState) => state.defunct;

export const getDefuncts = createSelector(
    getDefunctFeatureState,
    (state: DefunctState) => state.list
);
