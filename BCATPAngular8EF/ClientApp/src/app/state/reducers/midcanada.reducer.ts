import { MidCanada } from "src/models/bcatp";
import * as MidCanadaActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state";

//import { midcanadaReducer } from 'src/app/state/reducers/midcanada.reducer';

export interface MidCanadaState {
    list: MidCanada[],
    loading: boolean,
    error: Error
}

export const initialState = {
    list: [],
    loading: false,
    error: undefined
};

export const midcanadaReducer = createReducer(
    initialState,
    on(MidCanadaActions.FetchMidCanada, state => (console.log('fetch reducer called'), {
        ...state,
        loading: true,

    })),
    on(MidCanadaActions.LoadMidCanadaSuccess, (state, { midcanadas }) => (
        (console.log('LoadMidCanadaSuccess reducer called'),
            {
                ...state,
                list: midcanadas,
                loading: false
            })),
    ),

    on(MidCanadaActions.LoadMidCanadaFailure, (state, { error }) => (
        (console.log('LoadMidCanadaSuccess reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(MidCanadaActions.AddMidCanada, state =>
        (console.log('AddMidCanada reducer called'), {
            ...state,
            loading: true,
        })),

    on(MidCanadaActions.AddMidCanadaSuccess, (state, { midcanada }) =>
        (console.log('AddMidCanadaSuccess reducer called'), {
            ...state,
            list: [...state.list, midcanada],
            loading: false,
        })),

    on(MidCanadaActions.AddMidCanadaFailure, (state, { error }) => (
        (console.log('AddMidCanadaFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(MidCanadaActions.EditMidCanada, state =>
        (console.log('EditMidCanada reducer called'), {
            ...state,
            loading: true,
        })),

    on(MidCanadaActions.EditMidCanadaSuccess, (state, { midcanada }) => ({
        ...state,
        list: [...state.list, midcanada],
        loading: false,
    })),

    on(MidCanadaActions.EditMidCanadaFailure, (state, { error }) => (
        (console.log('EditMidCanadaFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(MidCanadaActions.DeleteMidCanada, state =>
        (console.log('DeleteMidCanada reducer called'), {
            ...state,
            loading: true,

        })),

    on(MidCanadaActions.DeleteMidCanadaSuccess, (state, { id }) =>
        (console.log('DeleteMidCanadaSuccess reducer called'), {
            ...state,
            list: state.list.filter(item => item.id !== id),
            loading: false,
        })),
);

//export function reducer(state: MidCanadaState | undefined, action: Action) {
//    return midcanadaReducer(state, action);
//}

const getMidCanadaFeatureState = (state: AppState) => state.midcanada;

export const getMidCanadas = createSelector(
    getMidCanadaFeatureState,
    (state: MidCanadaState) => state.list
);
