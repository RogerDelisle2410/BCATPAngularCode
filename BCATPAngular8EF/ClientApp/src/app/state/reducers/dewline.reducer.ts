import { Dewline } from "src/models/bcatp";
import * as DewlineActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state";

//import { dewlineReducer } from 'src/app/state/reducers/dewline.reducer';

export interface DewlineState {
    list: Dewline[],
    loading: boolean,
    error: Error
}

export const initialState = {
    list: [],
    loading: false,
    error: undefined
};

export const dewlineReducer = createReducer(
    initialState,
    on(DewlineActions.FetchDewline, state => (console.log('fetch reducer called'), {
        ...state,
        loading: true,

    })),
    on(DewlineActions.LoadDewlineSuccess, (state, { dewlines }) => (
        (console.log('LoadDewlineSuccess reducer called'),
            {
                ...state,
                list: dewlines,
                loading: false
            })),
    ),

    on(DewlineActions.LoadDewlineFailure, (state, { error }) => (
        (console.log('LoadDewlineSuccess reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(DewlineActions.AddDewline, state =>
        (console.log('AddDewline reducer called'), {
            ...state,
            loading: true,
        })),

    on(DewlineActions.AddDewlineSuccess, (state, { dewline }) =>
        (console.log('AddDewlineSuccess reducer called'), {
            ...state,
            list: [...state.list, dewline],
            loading: false,
        })),

    on(DewlineActions.AddDewlineFailure, (state, { error }) => (
        (console.log('AddDewlineFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(DewlineActions.EditDewline, state =>
        (console.log('EditDewline reducer called'), {
            ...state,
            loading: true,
        })),

    on(DewlineActions.EditDewlineSuccess, (state, { dewline }) => ({
        ...state,
        list: [...state.list, dewline],
        loading: false,
    })),

    on(DewlineActions.EditDewlineFailure, (state, { error }) => (
        (console.log('EditDewlineFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(DewlineActions.DeleteDewline, state =>
        (console.log('DeleteDewline reducer called'), {
            ...state,
            loading: true,

        })),

    on(DewlineActions.DeleteDewlineSuccess, (state, { id }) =>
        (console.log('DeleteDewlineSuccess reducer called'), {
            ...state,
            list: state.list.filter(item => item.id !== id),
            loading: false,
        })),
);

//export function reducer(state: DewlineState | undefined, action: Action) {
//    return dewlineReducer(state, action);
//}

const getDewlineFeatureState = (state: AppState) => state.dewline;

export const getDewlines = createSelector(
    getDewlineFeatureState,
    (state: DewlineState) => state.list
);
