import { Army } from "src/models/bcatp";
import * as ArmyActions from 'src/app/state/actions/bcatp.actions';
import { createSelector, createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store/src/models";
import { AppState } from "../app.state"; 

//import { armyReducer } from 'src/app/state/reducers/army.reducer';

export interface ArmyState {
    list: Army[],
    loading: boolean,
    error: Error
}

export const initialState = {
    list: [],
    loading: false,
    error: undefined
};

export const armyReducer = createReducer(
    initialState,
    on(ArmyActions.FetchArmy, state => (console.log('fetch reducer called'), {
        ...state,
        loading: true,

    })),
    on(ArmyActions.LoadArmySuccess, (state, { armys }) => (
        (console.log('LoadArmySuccess reducer called'),
            {
                ...state,
                list: armys,
                loading: false
            })),
    ),

    on(ArmyActions.LoadArmyFailure, (state, { error }) => (
        (console.log('LoadArmySuccess reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(ArmyActions.AddArmy, state =>
        (console.log('AddArmy reducer called'), {
            ...state,
            loading: true,
        })),

    on(ArmyActions.AddArmySuccess, (state, { army }) =>
        (console.log('AddArmySuccess reducer called'), {
            ...state,
            list: [...state.list, army],
            loading: false,
        })),

    on(ArmyActions.AddArmyFailure, (state, { error }) => (
        (console.log('AddArmyFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(ArmyActions.EditArmy, state =>
        (console.log('EditArmy reducer called'), {
            ...state,
            loading: true,
        })),

    on(ArmyActions.EditArmySuccess, (state, { army }) => ({
        ...state,
        list: [...state.list, army],
        loading: false,
    })),

    on(ArmyActions.EditArmyFailure, (state, { error }) => (
        (console.log('EditArmyFailure reducer called'), {
            ...state,
            error: error,
            loading: false
        })),
    ),

    on(ArmyActions.DeleteArmy, state =>
        (console.log('DeleteArmy reducer called'), {
            ...state,
            loading: true,

        })),

    on(ArmyActions.DeleteArmySuccess, (state, { id }) =>
        (console.log('DeleteArmySuccess reducer called'), {
            ...state,
            list: state.list.filter(item => item.id !== id),
            loading: false,
        })),
);

//export function reducer(state: ArmyState | undefined, action: Action) {
//    return armyReducer(state, action);
//}

const getArmyFeatureState = (state: AppState) => state.army;

export const getArmys = createSelector(
    getArmyFeatureState,
    (state: ArmyState) => state.list
);
