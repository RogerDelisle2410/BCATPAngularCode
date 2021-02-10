import { Bcatp } from "src/models/bcatp";
import { createAction, props } from '@ngrx/store';

export enum BcatpActionTypes {
    FETCH_BCATP = "[BCATP] Fetch Bcatp",
    FETCH_BCATP_SUCCESS = "[BCATP] Fetch Bcatp Success",
    FETCH_BCATP_FAILURE = "[BCATP] Fetch Bcatp Failed",
    ADD_BCATP = '[BCATP] Add',
    ADD_BCATP_SUCCESS = "[BCATP] Add Bcatp Success",
    ADD_BCATP_FAILURE = "[BCATP] Add Bcatp Failed",
    EDIT_BCATP = '[BCATP] EDIT',
    EDIT_BCATP_SUCCESS = "[BCATP] EDIT Bcatp Success",
    EDIT_BCATP_FAILURE = "[BCATP] EDIT Bcatp Failed",
    DELETE_BCATP = "[BCATP] Delete Bcatp",
    DELTE_BCATP_SUCCESS = "[BCATP] Delete Bcatp Success",
    DELETE_BCATP_FAILURE = "[BCATP] Delete Bcatp Failed",
}

export const FetchBcatp = createAction(
    BcatpActionTypes.FETCH_BCATP
)

export const LoadBcatpSuccess = createAction(
    BcatpActionTypes.FETCH_BCATP_SUCCESS,
    props<{ bcatps: Bcatp[] }>()
)

export const LoadBcatpFailure = createAction(
    BcatpActionTypes.FETCH_BCATP_FAILURE,
    props<{ error: any }>()
)

export const AddBcatp = createAction(
    BcatpActionTypes.ADD_BCATP,
    props<{ bcatp: Bcatp }>()
)

export const AddBcatpSuccess = createAction(
    BcatpActionTypes.ADD_BCATP_SUCCESS,
    props<{ bcatp: Bcatp }>()
)

export const AddBcatpFailure = createAction(
    BcatpActionTypes.ADD_BCATP_FAILURE,
    props<{ error: any }>()
)

export const EditBcatp = createAction(
    BcatpActionTypes.EDIT_BCATP,
    props<{ bcatp: Bcatp }>()
)

export const EditBcatpSuccess = createAction(
    BcatpActionTypes.EDIT_BCATP_SUCCESS,
    props<{ bcatp: Bcatp }>()
)

export const EditBcatpFailure = createAction(
    BcatpActionTypes.EDIT_BCATP_FAILURE,
    props<{ error: any }>()
)

export const DeleteBcatp = createAction(
    BcatpActionTypes.DELETE_BCATP,
    props<{ id: number }>()
)
export const DeleteBcatpSuccess = createAction(
    BcatpActionTypes.DELTE_BCATP_SUCCESS,
    props<{ id: number }>()
)


import { Navy } from "src/models/bcatp";

export enum NavyActionTypes {
  FETCH_NAVY = "[NAVY] Fetch Navy",
  FETCH_NAVY_SUCCESS = "[NAVY] Fetch Navy Success",
  FETCH_NAVY_FAILURE = "[NAVY] Fetch Navy Failed",
  ADD_NAVY = '[NAVY] Add',
  ADD_NAVY_SUCCESS = "[NAVY] Add Navy Success",
  ADD_NAVY_FAILURE = "[NAVY] Add Navy Failed",
  EDIT_NAVY = '[NAVY] EDIT',
  EDIT_NAVY_SUCCESS = "[NAVY] EDIT Navy Success",
  EDIT_NAVY_FAILURE = "[NAVY] EDIT Navy Failed",
  DELETE_NAVY = "[NAVY] Delete Navy",
  DELTE_NAVY_SUCCESS = "[NAVY] Delete Navy Success",
  DELETE_NAVY_FAILURE = "[NAVY] Delete Navy Failed",
}

export const FetchNavy = createAction(
  NavyActionTypes.FETCH_NAVY
)

export const LoadNavySuccess = createAction(
  NavyActionTypes.FETCH_NAVY_SUCCESS,
  props<{ navys: Navy[] }>()
)

export const LoadNavyFailure = createAction(
  NavyActionTypes.FETCH_NAVY_FAILURE,
  props<{ error: any }>()
)

export const AddNavy = createAction(
  NavyActionTypes.ADD_NAVY,
  props<{ navy: Navy }>()
)

export const AddNavySuccess = createAction(
  NavyActionTypes.ADD_NAVY_SUCCESS,
  props<{ navy: Navy }>()
)

export const AddNavyFailure = createAction(
  NavyActionTypes.ADD_NAVY_FAILURE,
  props<{ error: any }>()
)

export const EditNavy = createAction(
  NavyActionTypes.EDIT_NAVY,
  props<{ navy: Navy }>()
)

export const EditNavySuccess = createAction(
  NavyActionTypes.EDIT_NAVY_SUCCESS,
  props<{ navy: Navy }>()
)

export const EditNavyFailure = createAction(
  NavyActionTypes.EDIT_NAVY_FAILURE,
  props<{ error: any }>()
)

export const DeleteNavy = createAction(
  NavyActionTypes.DELETE_NAVY,
  props<{ id: number }>()
)
export const DeleteNavySuccess = createAction(
  NavyActionTypes.DELTE_NAVY_SUCCESS,
  props<{ id: number }>()
)


import { Dewline } from "src/models/bcatp"; 

export enum DewlineActionTypes {
  FETCH_DEWLINE = "[DEWLINE] Fetch Dewline",
  FETCH_DEWLINE_SUCCESS = "[DEWLINE] Fetch Dewline Success",
  FETCH_DEWLINE_FAILURE = "[DEWLINE] Fetch Dewline Failed",
  ADD_DEWLINE = '[DEWLINE] Add',
  ADD_DEWLINE_SUCCESS = "[DEWLINE] Add Dewline Success",
  ADD_DEWLINE_FAILURE = "[DEWLINE] Add Dewline Failed",
  EDIT_DEWLINE = '[DEWLINE] EDIT',
  EDIT_DEWLINE_SUCCESS = "[DEWLINE] EDIT Dewline Success",
  EDIT_DEWLINE_FAILURE = "[DEWLINE] EDIT Dewline Failed",
  DELETE_DEWLINE = "[DEWLINE] Delete Dewline",
  DELTE_DEWLINE_SUCCESS = "[DEWLINE] Delete Dewline Success",
  DELETE_DEWLINE_FAILURE = "[DEWLINE] Delete Dewline Failed",
}

export const FetchDewline = createAction(
  DewlineActionTypes.FETCH_DEWLINE
)

export const LoadDewlineSuccess = createAction(
  DewlineActionTypes.FETCH_DEWLINE_SUCCESS,
  props<{ dewlines: Dewline[] }>()
)

export const LoadDewlineFailure = createAction(
  DewlineActionTypes.FETCH_DEWLINE_FAILURE,
  props<{ error: any }>()
)

export const AddDewline = createAction(
  DewlineActionTypes.ADD_DEWLINE,
  props<{ dewline: Dewline }>()
)

export const AddDewlineSuccess = createAction(
  DewlineActionTypes.ADD_DEWLINE_SUCCESS,
  props<{ dewline: Dewline }>()
)

export const AddDewlineFailure = createAction(
  DewlineActionTypes.ADD_DEWLINE_FAILURE,
  props<{ error: any }>()
)

export const EditDewline = createAction(
  DewlineActionTypes.EDIT_DEWLINE,
  props<{ dewline: Dewline }>()
)

export const EditDewlineSuccess = createAction(
  DewlineActionTypes.EDIT_DEWLINE_SUCCESS,
  props<{ dewline: Dewline }>()
)

export const EditDewlineFailure = createAction(
  DewlineActionTypes.EDIT_DEWLINE_FAILURE,
  props<{ error: any }>()
)

export const DeleteDewline = createAction(
  DewlineActionTypes.DELETE_DEWLINE,
  props<{ id: number }>()
)
export const DeleteDewlineSuccess = createAction(
  DewlineActionTypes.DELTE_DEWLINE_SUCCESS,
  props<{ id: number }>()
)

import { Pinetree } from "src/models/bcatp"; 

export enum PinetreeActionTypes {
  FETCH_PINETREE = "[PINETREE] Fetch Pinetree",
  FETCH_PINETREE_SUCCESS = "[PINETREE] Fetch Pinetree Success",
  FETCH_PINETREE_FAILURE = "[PINETREE] Fetch Pinetree Failed",
  ADD_PINETREE = '[PINETREE] Add',
  ADD_PINETREE_SUCCESS = "[PINETREE] Add Pinetree Success",
  ADD_PINETREE_FAILURE = "[PINETREE] Add Pinetree Failed",
  EDIT_PINETREE = '[PINETREE] EDIT',
  EDIT_PINETREE_SUCCESS = "[PINETREE] EDIT Pinetree Success",
  EDIT_PINETREE_FAILURE = "[PINETREE] EDIT Pinetree Failed",
  DELETE_PINETREE = "[PINETREE] Delete Pinetree",
  DELTE_PINETREE_SUCCESS = "[PINETREE] Delete Pinetree Success",
  DELETE_PINETREE_FAILURE = "[PINETREE] Delete Pinetree Failed",
}

export const FetchPinetree = createAction(
  PinetreeActionTypes.FETCH_PINETREE
)

export const LoadPinetreeSuccess = createAction(
  PinetreeActionTypes.FETCH_PINETREE_SUCCESS,
  props<{ pinetrees: Pinetree[] }>()
)

export const LoadPinetreeFailure = createAction(
  PinetreeActionTypes.FETCH_PINETREE_FAILURE,
  props<{ error: any }>()
)

export const AddPinetree = createAction(
  PinetreeActionTypes.ADD_PINETREE,
  props<{ pinetree: Pinetree }>()
)

export const AddPinetreeSuccess = createAction(
  PinetreeActionTypes.ADD_PINETREE_SUCCESS,
  props<{ pinetree: Pinetree }>()
)

export const AddPinetreeFailure = createAction(
  PinetreeActionTypes.ADD_PINETREE_FAILURE,
  props<{ error: any }>()
)

export const EditPinetree = createAction(
  PinetreeActionTypes.EDIT_PINETREE,
  props<{ pinetree: Pinetree }>()
)

export const EditPinetreeSuccess = createAction(
  PinetreeActionTypes.EDIT_PINETREE_SUCCESS,
  props<{ pinetree: Pinetree }>()
)

export const EditPinetreeFailure = createAction(
  PinetreeActionTypes.EDIT_PINETREE_FAILURE,
  props<{ error: any }>()
)

export const DeletePinetree = createAction(
  PinetreeActionTypes.DELETE_PINETREE,
  props<{ id: number }>()
)
export const DeletePinetreeSuccess = createAction(
  PinetreeActionTypes.DELTE_PINETREE_SUCCESS,
  props<{ id: number }>()
)

import { MidCanada } from "src/models/bcatp";

export enum MidCanadaActionTypes {
  FETCH_MIDCANADA = "[MIDCANADA] Fetch MidCanada",
  FETCH_MIDCANADA_SUCCESS = "[MIDCANADA] Fetch MidCanada Success",
  FETCH_MIDCANADA_FAILURE = "[MIDCANADA] Fetch MidCanada Failed",
  ADD_MIDCANADA = '[MIDCANADA] Add',
  ADD_MIDCANADA_SUCCESS = "[MIDCANADA] Add MidCanada Success",
  ADD_MIDCANADA_FAILURE = "[MIDCANADA] Add MidCanada Failed",
  EDIT_MIDCANADA = '[MIDCANADA] EDIT',
  EDIT_MIDCANADA_SUCCESS = "[MIDCANADA] EDIT MidCanada Success",
  EDIT_MIDCANADA_FAILURE = "[MIDCANADA] EDIT MidCanada Failed",
  DELETE_MIDCANADA = "[MIDCANADA] Delete MidCanada",
  DELTE_MIDCANADA_SUCCESS = "[MIDCANADA] Delete MidCanada Success",
  DELETE_MIDCANADA_FAILURE = "[MIDCANADA] Delete MidCanada Failed",
}

export const FetchMidCanada = createAction(
  MidCanadaActionTypes.FETCH_MIDCANADA
)

export const LoadMidCanadaSuccess = createAction(
  MidCanadaActionTypes.FETCH_MIDCANADA_SUCCESS,
  props<{ midcanadas: MidCanada[] }>()
)

export const LoadMidCanadaFailure = createAction(
  MidCanadaActionTypes.FETCH_MIDCANADA_FAILURE,
  props<{ error: any }>()
)

export const AddMidCanada = createAction(
  MidCanadaActionTypes.ADD_MIDCANADA,
  props<{ midcanada: MidCanada }>()
)

export const AddMidCanadaSuccess = createAction(
  MidCanadaActionTypes.ADD_MIDCANADA_SUCCESS,
  props<{ midcanada: MidCanada }>()
)

export const AddMidCanadaFailure = createAction(
  MidCanadaActionTypes.ADD_MIDCANADA_FAILURE,
  props<{ error: any }>()
)

export const EditMidCanada = createAction(
  MidCanadaActionTypes.EDIT_MIDCANADA,
  props<{ midcanada: MidCanada }>()
)

export const EditMidCanadaSuccess = createAction(
  MidCanadaActionTypes.EDIT_MIDCANADA_SUCCESS,
  props<{ midcanada: MidCanada }>()
)

export const EditMidCanadaFailure = createAction(
  MidCanadaActionTypes.EDIT_MIDCANADA_FAILURE,
  props<{ error: any }>()
)

export const DeleteMidCanada = createAction(
  MidCanadaActionTypes.DELETE_MIDCANADA,
  props<{ id: number }>()
)
export const DeleteMidCanadaSuccess = createAction(
  MidCanadaActionTypes.DELTE_MIDCANADA_SUCCESS,
  props<{ id: number }>()
)



import { Airforce } from "src/models/bcatp";

export enum AirforceActionTypes {
  FETCH_AIRFORCE = "[AIRFORCE] Fetch Airforce",
  FETCH_AIRFORCE_SUCCESS = "[AIRFORCE] Fetch Airforce Success",
  FETCH_AIRFORCE_FAILURE = "[AIRFORCE] Fetch Airforce Failed",
  ADD_AIRFORCE = '[AIRFORCE] Add',
  ADD_AIRFORCE_SUCCESS = "[AIRFORCE] Add Airforce Success",
  ADD_AIRFORCE_FAILURE = "[AIRFORCE] Add Airforce Failed",
  EDIT_AIRFORCE = '[AIRFORCE] EDIT',
  EDIT_AIRFORCE_SUCCESS = "[AIRFORCE] EDIT Airforce Success",
  EDIT_AIRFORCE_FAILURE = "[AIRFORCE] EDIT Airforce Failed",
  DELETE_AIRFORCE = "[AIRFORCE] Delete Airforce",
  DELTE_AIRFORCE_SUCCESS = "[AIRFORCE] Delete Airforce Success",
  DELETE_AIRFORCE_FAILURE = "[AIRFORCE] Delete Airforce Failed",
}

export const FetchAirforce = createAction(
  AirforceActionTypes.FETCH_AIRFORCE
)

export const LoadAirforceSuccess = createAction(
  AirforceActionTypes.FETCH_AIRFORCE_SUCCESS,
  props<{ airforces: Airforce[] }>()
)

export const LoadAirforceFailure = createAction(
  AirforceActionTypes.FETCH_AIRFORCE_FAILURE,
  props<{ error: any }>()
)

export const AddAirforce = createAction(
  AirforceActionTypes.ADD_AIRFORCE,
  props<{ airforce: Airforce }>()
)

export const AddAirforceSuccess = createAction(
  AirforceActionTypes.ADD_AIRFORCE_SUCCESS,
  props<{ airforce: Airforce }>()
)

export const AddAirforceFailure = createAction(
  AirforceActionTypes.ADD_AIRFORCE_FAILURE,
  props<{ error: any }>()
)

export const EditAirforce = createAction(
  AirforceActionTypes.EDIT_AIRFORCE,
  props<{ airforce: Airforce }>()
)

export const EditAirforceSuccess = createAction(
  AirforceActionTypes.EDIT_AIRFORCE_SUCCESS,
  props<{ airforce: Airforce }>()
)

export const EditAirforceFailure = createAction(
  AirforceActionTypes.EDIT_AIRFORCE_FAILURE,
  props<{ error: any }>()
)

export const DeleteAirforce = createAction(
  AirforceActionTypes.DELETE_AIRFORCE,
  props<{ id: number }>()
)
export const DeleteAirforceSuccess = createAction(
  AirforceActionTypes.DELTE_AIRFORCE_SUCCESS,
  props<{ id: number }>()
)




import { Army } from "src/models/bcatp";

export enum ArmyActionTypes {
  FETCH_ARMY = "[ARMY] Fetch Army",
  FETCH_ARMY_SUCCESS = "[ARMY] Fetch Army Success",
  FETCH_ARMY_FAILURE = "[ARMY] Fetch Army Failed",
  ADD_ARMY = '[ARMY] Add',
  ADD_ARMY_SUCCESS = "[ARMY] Add Army Success",
  ADD_ARMY_FAILURE = "[ARMY] Add Army Failed",
  EDIT_ARMY = '[ARMY] EDIT',
  EDIT_ARMY_SUCCESS = "[ARMY] EDIT Army Success",
  EDIT_ARMY_FAILURE = "[ARMY] EDIT Army Failed",
  DELETE_ARMY = "[ARMY] Delete Army",
  DELTE_ARMY_SUCCESS = "[ARMY] Delete Army Success",
  DELETE_ARMY_FAILURE = "[ARMY] Delete Army Failed",
}

export const FetchArmy = createAction(
  ArmyActionTypes.FETCH_ARMY
)

export const LoadArmySuccess = createAction(
  ArmyActionTypes.FETCH_ARMY_SUCCESS,
  props<{ armys: Army[] }>()
)

export const LoadArmyFailure = createAction(
  ArmyActionTypes.FETCH_ARMY_FAILURE,
  props<{ error: any }>()
)

export const AddArmy = createAction(
  ArmyActionTypes.ADD_ARMY,
  props<{ army: Army }>()
)

export const AddArmySuccess = createAction(
  ArmyActionTypes.ADD_ARMY_SUCCESS,
  props<{ army: Army }>()
)

export const AddArmyFailure = createAction(
  ArmyActionTypes.ADD_ARMY_FAILURE,
  props<{ error: any }>()
)

export const EditArmy = createAction(
  ArmyActionTypes.EDIT_ARMY,
  props<{ army: Army }>()
)

export const EditArmySuccess = createAction(
  ArmyActionTypes.EDIT_ARMY_SUCCESS,
  props<{ army: Army }>()
)

export const EditArmyFailure = createAction(
  ArmyActionTypes.EDIT_ARMY_FAILURE,
  props<{ error: any }>()
)

export const DeleteArmy = createAction(
  ArmyActionTypes.DELETE_ARMY,
  props<{ id: number }>()
)
export const DeleteArmySuccess = createAction(
  ArmyActionTypes.DELTE_ARMY_SUCCESS,
  props<{ id: number }>()
)



import { Defunct } from "src/models/bcatp";

export enum DefunctActionTypes {
  FETCH_DEFUNCT = "[DEFUNCT] Fetch Defunct",
  FETCH_DEFUNCT_SUCCESS = "[DEFUNCT] Fetch Defunct Success",
  FETCH_DEFUNCT_FAILURE = "[DEFUNCT] Fetch Defunct Failed",
  ADD_DEFUNCT = '[DEFUNCT] Add',
  ADD_DEFUNCT_SUCCESS = "[DEFUNCT] Add Defunct Success",
  ADD_DEFUNCT_FAILURE = "[DEFUNCT] Add Defunct Failed",
  EDIT_DEFUNCT = '[DEFUNCT] EDIT',
  EDIT_DEFUNCT_SUCCESS = "[DEFUNCT] EDIT Defunct Success",
  EDIT_DEFUNCT_FAILURE = "[DEFUNCT] EDIT Defunct Failed",
  DELETE_DEFUNCT = "[DEFUNCT] Delete Defunct",
  DELTE_DEFUNCT_SUCCESS = "[DEFUNCT] Delete Defunct Success",
  DELETE_DEFUNCT_FAILURE = "[DEFUNCT] Delete Defunct Failed",
}

export const FetchDefunct = createAction(
  DefunctActionTypes.FETCH_DEFUNCT
)

export const LoadDefunctSuccess = createAction(
  DefunctActionTypes.FETCH_DEFUNCT_SUCCESS,
  props<{ defuncts: Defunct[] }>()
)

export const LoadDefunctFailure = createAction(
  DefunctActionTypes.FETCH_DEFUNCT_FAILURE,
  props<{ error: any }>()
)

export const AddDefunct = createAction(
  DefunctActionTypes.ADD_DEFUNCT,
  props<{ defunct: Defunct }>()
)

export const AddDefunctSuccess = createAction(
  DefunctActionTypes.ADD_DEFUNCT_SUCCESS,
  props<{ defunct: Defunct }>()
)

export const AddDefunctFailure = createAction(
  DefunctActionTypes.ADD_DEFUNCT_FAILURE,
  props<{ error: any }>()
)

export const EditDefunct = createAction(
  DefunctActionTypes.EDIT_DEFUNCT,
  props<{ defunct: Defunct }>()
)

export const EditDefunctSuccess = createAction(
  DefunctActionTypes.EDIT_DEFUNCT_SUCCESS,
  props<{ defunct: Defunct }>()
)

export const EditDefunctFailure = createAction(
  DefunctActionTypes.EDIT_DEFUNCT_FAILURE,
  props<{ error: any }>()
)

export const DeleteDefunct = createAction(
  DefunctActionTypes.DELETE_DEFUNCT,
  props<{ id: number }>()
)
export const DeleteDefunctSuccess = createAction(
  DefunctActionTypes.DELTE_DEFUNCT_SUCCESS,
  props<{ id: number }>()
)
