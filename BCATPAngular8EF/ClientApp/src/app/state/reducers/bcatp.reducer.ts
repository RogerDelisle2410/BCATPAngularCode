import { Bcatp } from "src/models/bcatp";
import * as BcatpActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state";

//import { bcatpReducer } from 'src/app/state/reducers/bcatp.reducer';

export interface BcatpState {
    list: Bcatp[],
    loading: boolean,
    error: Error
}

export const initialState = {
    list: [],
    loading: false,
    error: undefined
};

export const bcatpReducer = createReducer(
    initialState,
    on(BcatpActions.FetchBcatp, state => (console.log('fetch reducer called'), {
        ...state,
        loading: true,

    })),
    on(BcatpActions.LoadBcatpSuccess, (state, { bcatps }) => (
        (console.log('LoadBcatpSuccess reducer called'),
            {
                ...state,
                list: bcatps,
                loading: false
            })),
    ),

    on(BcatpActions.LoadBcatpFailure, (state, { error }) => (
      (console.log('LoadBcatpSuccess reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(BcatpActions.AddBcatp, state =>
        (console.log('AddBcatp reducer called'), {
            ...state,
            loading: true,
        })),

    on(BcatpActions.AddBcatpSuccess, (state, { bcatp }) =>
        (console.log('AddBcatpSuccess reducer called'), {
            ...state,
            list: [...state.list, bcatp],
            loading: false,
        })),

    on(BcatpActions.AddBcatpFailure, (state, { error }) => (
      (console.log('AddBcatpFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(BcatpActions.EditBcatp, state =>
        (console.log('EditBcatp reducer called'), {
            ...state,
            loading: true,
        })),

    on(BcatpActions.EditBcatpSuccess, (state, { bcatp }) => ({
        ...state,
        list: [...state.list, bcatp],
        loading: false,
    })),

    on(BcatpActions.EditBcatpFailure, (state, { error }) => (
        (console.log('EditBcatpFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(BcatpActions.DeleteBcatp, state =>
        (console.log('DeleteBcatp reducer called'), {
            ...state,
            loading: true,

        })),

    on(BcatpActions.DeleteBcatpSuccess, (state, { id }) =>
        (console.log('DeleteBcatpSuccess reducer called'), {
            ...state,
            list: state.list.filter(item => item.id !== id),
            loading: false,
        })),
);

export function reducer(state: BcatpState | undefined, action: Action) {
    return bcatpReducer(state, action);
}

const getBcatpFeatureState = (state: AppState) => state.bcatp;

export const getBcatps = createSelector(
    getBcatpFeatureState,
    (state: BcatpState) => state.list
);

