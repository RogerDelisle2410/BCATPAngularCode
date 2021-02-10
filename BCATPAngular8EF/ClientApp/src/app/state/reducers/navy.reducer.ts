import { Navy } from "src/models/bcatp";
import * as NavyActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state";

//import { navyReducer } from 'src/app/state/reducers/navy.reducer';


export interface NavyState {
    list: Navy[],
    loading: boolean,
    error: Error
}

export const initialState = {
    list: [],
    loading: false,
    error: undefined
};

export const navyReducer = createReducer(
    initialState,
    on(NavyActions.FetchNavy, state => (console.log('fetch reducer called'), {
        ...state,
        loading: true,

    })),
    on(NavyActions.LoadNavySuccess, (state, { navys }) => (
        (console.log('LoadNavySuccess reducer called'),
            {
                ...state,
                list: navys,
                loading: false
            })),
    ),

    on(NavyActions.LoadNavyFailure, (state, { error }) => (
        (console.log('LoadNavySuccess reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(NavyActions.AddNavy, state =>
        (console.log('AddNavy reducer called'), {
            ...state,
            loading: true,
        })),

    on(NavyActions.AddNavySuccess, (state, { navy }) =>
        (console.log('AddNavySuccess reducer called'), {
            ...state,
            list: [...state.list, navy],
            loading: false,
        })),

    on(NavyActions.AddNavyFailure, (state, { error }) => (
        (console.log('AddNavyFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(NavyActions.EditNavy, state =>
        (console.log('EditNavy reducer called'), {
            ...state,
            loading: true,
        })),

    on(NavyActions.EditNavySuccess, (state, { navy }) => ({
        ...state,
        list: [...state.list, navy],
        loading: false,
    })),

    on(NavyActions.EditNavyFailure, (state, { error }) => (
        (console.log('EditNavyFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(NavyActions.DeleteNavy, state =>
        (console.log('DeleteNavy reducer called'), {
            ...state,
            loading: true,

        })),

    on(NavyActions.DeleteNavySuccess, (state, { id }) =>
        (console.log('DeleteNavySuccess reducer called'), {
            ...state,
            list: state.list.filter(item => item.id !== id),
            loading: false,
        })),
 );
 
export function reducer(state: NavyState | undefined, action: Action) {
    return navyReducer(state, action);
}

const getNavyFeatureState = (state: AppState) => state.navy;

export const getNavys = createSelector(
    getNavyFeatureState,
    (state: NavyState) => state.list
);
