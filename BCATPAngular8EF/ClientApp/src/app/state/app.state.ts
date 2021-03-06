import { BcatpState } from './reducers/bcatp.reducer';
import { NavyState } from "./reducers/navy.reducer";
import { DewlineState } from "./reducers/dewline.reducer";
import { PinetreeState } from "./reducers/pinetree.reducer";
import { MidCanadaState } from "./reducers/midcanada.reducer";
import { AirforceState } from "./reducers/airforce.reducer";
import { ArmyState } from "./reducers/army.reducer";
import { DefunctState } from "./reducers/defunct.reducer";
import { TanksState } from "./reducers/tanks.reducer";
import { PlanesState } from "./reducers/planes.reducer";
import { ShipsState } from "./reducers/ships.reducer";

export interface AppState {
  readonly bcatp: BcatpState;
}
export interface AppState {
  readonly navy: NavyState;
}
export interface AppState {
  readonly dewline: DewlineState;
}

export interface AppState {
  readonly pinetree: PinetreeState;
}

export interface AppState {
  readonly midcanada: MidCanadaState;
}
export interface AppState {
  readonly airforce: AirforceState;
}
export interface AppState {
  readonly army: ArmyState;
}
export interface AppState {
  readonly defunct: DefunctState;
}

export interface AppState {
  readonly tanks: TanksState;
}

export interface AppState {
  readonly planes: PlanesState;
}

export interface AppState {
  readonly ships: ShipsState;
}
