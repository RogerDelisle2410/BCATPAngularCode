import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { BcatpService } from "src/app/services/bcatp.service";
import { mergeMap, map, catchError, tap, switchMap } from "rxjs/operators";
import {
  LoadBcatpSuccess, FetchBcatp, AddBcatp, AddBcatpSuccess,
  DeleteBcatp, DeleteBcatpSuccess, EditBcatp, EditBcatpSuccess,
  LoadBcatpFailure, AddBcatpFailure, EditBcatpFailure
} from "src/app/state/actions/bcatp.actions";
import { of } from 'rxjs';
import { Router } from "@angular/router";

@Injectable()
export class BcatpEffect {
  constructor(
    private actions$: Actions,
    private _BcatpService: BcatpService,
    private _router: Router,
  ) { }

  loadBcatp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchBcatp),
      switchMap(() =>
        this._BcatpService.getBcatps().pipe(
          map((bcatps) => LoadBcatpSuccess({ bcatps })),
          catchError(error => of(LoadBcatpFailure({ error })))
        )
      )
    ),
  )

  addBcatp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddBcatp),
      mergeMap(({ bcatp }) =>
        this._BcatpService.saveBcatp(bcatp).pipe(
          map(() => AddBcatpSuccess({ bcatp })),
          tap(() => this._router.navigate(['/fetch-bcatp'])),
          catchError(error => of(AddBcatpFailure({ error })))
        ),
      )
    )
  )

  editBcatp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditBcatp),
      mergeMap(({ bcatp }) =>
        this._BcatpService.updateBcatp(bcatp).pipe(
          map(() => EditBcatpSuccess({ bcatp })),
          tap(() => this._router.navigate(['/fetch-bcatp'])),
          catchError(error => of(EditBcatpFailure({ error })))
        ),
      )
    )
  )

  deleteBcatp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteBcatp),
      mergeMap(({ id }) =>
        this._BcatpService.deleteBcatp(id).pipe(
          map(() => DeleteBcatpSuccess({ id })),
        )
      ),
    )
  )
}



import { NavyService } from "src/app/services/bcatp.service";

import {
  LoadNavySuccess, FetchNavy, AddNavy, AddNavySuccess,
  DeleteNavy, DeleteNavySuccess, EditNavy, EditNavySuccess,
  LoadNavyFailure, AddNavyFailure, EditNavyFailure
} from "src/app/state/actions/bcatp.actions";


@Injectable()
export class NavyEffect {
  constructor(
    private actions$: Actions,
    private _navyService: NavyService,
    private _router: Router,
  ) { }

  loadNavy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchNavy),
      switchMap(() =>
        this._navyService.getNavys().pipe(
          map((navys) => LoadNavySuccess({ navys })),
          catchError(error => of(LoadNavyFailure({ error })))
        )
      )
    ),
  )

  addNavy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddNavy),
      mergeMap(({ navy }) =>
        this._navyService.saveNavy(navy).pipe(
          map(() => AddNavySuccess({ navy })),
          tap(() => this._router.navigate(['/fetch-navy'])),
          catchError(error => of(AddNavyFailure({ error })))
        ),
      )
    )
  )

  editNavy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditNavy),
      mergeMap(({ navy }) =>
        this._navyService.updateNavy(navy).pipe(
          map(() => EditNavySuccess({ navy })),
          tap(() => this._router.navigate(['/fetch-navy'])),
          catchError(error => of(EditNavyFailure({ error })))
        ),
      )
    )
  )

  deleteNavy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteNavy),
      mergeMap(({ id }) =>
        this._navyService.deleteNavy(id).pipe(
          map(() => DeleteNavySuccess({ id })),
        )
      ),
    )
  )
}



import { DewlineService } from "src/app/services/bcatp.service";

import {
  LoadDewlineSuccess, FetchDewline, AddDewline, AddDewlineSuccess,
  DeleteDewline, DeleteDewlineSuccess, EditDewline, EditDewlineSuccess,
  LoadDewlineFailure, AddDewlineFailure, EditDewlineFailure
} from "src/app/state/actions/bcatp.actions";


@Injectable()
export class DewlineEffect {
  constructor(
    private actions$: Actions,
    private _dewlineService: DewlineService,
    private _router: Router,
  ) { }

  loadDewline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchDewline),
      switchMap(() =>
        this._dewlineService.getDewlines().pipe(
          map((dewlines) => LoadDewlineSuccess({ dewlines })),
          catchError(error => of(LoadDewlineFailure({ error })))
        )
      )
    ),
  )

  addDewline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddDewline),
      mergeMap(({ dewline }) =>
        this._dewlineService.saveDewline(dewline).pipe(
          map(() => AddDewlineSuccess({ dewline })),
          tap(() => this._router.navigate(['/fetch-dewline'])),
          catchError(error => of(AddDewlineFailure({ error })))
        ),
      )
    )
  )

  editDewline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditDewline),
      mergeMap(({ dewline }) =>
        this._dewlineService.updateDewline(dewline).pipe(
          map(() => EditDewlineSuccess({ dewline })),
          tap(() => this._router.navigate(['/fetch-dewline'])),
          catchError(error => of(EditDewlineFailure({ error })))
        ),
      )
    )
  )

  deleteDewline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteDewline),
      mergeMap(({ id }) =>
        this._dewlineService.deleteDewline(id).pipe(
          map(() => DeleteDewlineSuccess({ id })),
        )
      ),
    )
  )
}



import { MidCanadaService } from "src/app/services/bcatp.service";
import {
  LoadMidCanadaSuccess, FetchMidCanada, AddMidCanada, AddMidCanadaSuccess,
  DeleteMidCanada, DeleteMidCanadaSuccess, EditMidCanada, EditMidCanadaSuccess,
  LoadMidCanadaFailure, AddMidCanadaFailure, EditMidCanadaFailure
} from "src/app/state/actions/bcatp.actions";

@Injectable()
export class MidCanadaEffect {
  constructor(
    private actions$: Actions,
    private _midcanadaService: MidCanadaService,
    private _router: Router,
  ) { }

  loadMidCanada$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchMidCanada),
      switchMap(() =>
        this._midcanadaService.getMidCanadas().pipe(
          map((midcanadas) => LoadMidCanadaSuccess({ midcanadas })),
          catchError(error => of(LoadMidCanadaFailure({ error })))
        )
      )
    ),
  )

  addMidCanada$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddMidCanada),
      mergeMap(({ midcanada }) =>
        this._midcanadaService.saveMidCanada(midcanada).pipe(
          map(() => AddMidCanadaSuccess({ midcanada })),
          tap(() => this._router.navigate(['/fetch-midcanada'])),
          catchError(error => of(AddMidCanadaFailure({ error })))
        ),
      )
    )
  )

  editMidCanada$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditMidCanada),
      mergeMap(({ midcanada }) =>
        this._midcanadaService.updateMidCanada(midcanada).pipe(
          map(() => EditMidCanadaSuccess({ midcanada })),
          tap(() => this._router.navigate(['/fetch-midcanada'])),
          catchError(error => of(EditMidCanadaFailure({ error })))
        ),
      )
    )
  )

  deleteMidCanada$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteMidCanada),
      mergeMap(({ id }) =>
        this._midcanadaService.deleteMidCanada(id).pipe(
          map(() => DeleteMidCanadaSuccess({ id })),
        )
      ),
    )
  )
}



import { PinetreeService } from "src/app/services/bcatp.service";
import {
  LoadPinetreeSuccess, FetchPinetree, AddPinetree, AddPinetreeSuccess,
  DeletePinetree, DeletePinetreeSuccess, EditPinetree, EditPinetreeSuccess,
  LoadPinetreeFailure, AddPinetreeFailure, EditPinetreeFailure
} from "src/app/state/actions/bcatp.actions";

@Injectable()
export class PinetreeEffect {
  constructor(
    private actions$: Actions,
    private _pinetreeService: PinetreeService,
    private _router: Router,
  ) { }

  loadPinetree$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchPinetree),
      switchMap(() =>
        this._pinetreeService.getPinetrees().pipe(
          map((pinetrees) => LoadPinetreeSuccess({ pinetrees })),
          catchError(error => of(LoadPinetreeFailure({ error })))
        )
      )
    ),
  )

  addPinetree$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddPinetree),
      mergeMap(({ pinetree }) =>
        this._pinetreeService.savePinetree(pinetree).pipe(
          map(() => AddPinetreeSuccess({ pinetree })),
          tap(() => this._router.navigate(['/fetch-pinetree'])),
          catchError(error => of(AddPinetreeFailure({ error })))
        ),
      )
    )
  )

  editPinetree$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditPinetree),
      mergeMap(({ pinetree }) =>
        this._pinetreeService.updatePinetree(pinetree).pipe(
          map(() => EditPinetreeSuccess({ pinetree })),
          tap(() => this._router.navigate(['/fetch-pinetree'])),
          catchError(error => of(EditPinetreeFailure({ error })))
        ),
      )
    )
  )

  deletePinetree$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeletePinetree),
      mergeMap(({ id }) =>
        this._pinetreeService.deletePinetree(id).pipe(
          map(() => DeletePinetreeSuccess({ id })),
        )
      ),
    )
  )
}



  import { AirforceService } from "src/app/services/bcatp.service";
import {
  LoadAirforceSuccess, FetchAirforce, AddAirforce, AddAirforceSuccess,
  DeleteAirforce, DeleteAirforceSuccess, EditAirforce, EditAirforceSuccess,
  LoadAirforceFailure, AddAirforceFailure, EditAirforceFailure
} from "src/app/state/actions/bcatp.actions";

@Injectable()
export class AirforceEffect {
  constructor(
    private actions$: Actions,
    private _airforceService: AirforceService,
    private _router: Router,
  ) { }

  loadAirforce$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchAirforce),
      switchMap(() =>
        this._airforceService.getAirforces().pipe(
          map((airforces) => LoadAirforceSuccess({ airforces })),
          catchError(error => of(LoadAirforceFailure({ error })))
        )
      )
    ),
  )

  addAirforce$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddAirforce),
      mergeMap(({ airforce }) =>
        this._airforceService.saveAirforce(airforce).pipe(
          map(() => AddAirforceSuccess({ airforce })),
          tap(() => this._router.navigate(['/fetch-airforce'])),
          catchError(error => of(AddAirforceFailure({ error })))
        ),
      )
    )
  )

  editAirforce$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditAirforce),
      mergeMap(({ airforce }) =>
        this._airforceService.updateAirforce(airforce).pipe(
          map(() => EditAirforceSuccess({ airforce })),
          tap(() => this._router.navigate(['/fetch-airforce'])),
          catchError(error => of(EditAirforceFailure({ error })))
        ),
      )
    )
  )

  deleteAirforce$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteAirforce),
      mergeMap(({ id }) =>
        this._airforceService.deleteAirforce(id).pipe(
          map(() => DeleteAirforceSuccess({ id })),
        )
      ),
    )
  )
}


  
  import { ArmyService } from "src/app/services/bcatp.service";
import {
  LoadArmySuccess, FetchArmy, AddArmy, AddArmySuccess,
  DeleteArmy, DeleteArmySuccess, EditArmy, EditArmySuccess,
  LoadArmyFailure, AddArmyFailure, EditArmyFailure
} from "src/app/state/actions/bcatp.actions";

@Injectable()
export class ArmyEffect {
  constructor(
    private actions$: Actions,
    private _armyService: ArmyService,
    private _router: Router,
  ) { }

  loadArmy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchArmy),
      switchMap(() =>
        this._armyService.getArmys().pipe(
          map((armys) => LoadArmySuccess({ armys })),
          catchError(error => of(LoadArmyFailure({ error })))
        )
      )
    ),
  )

  addArmy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddArmy),
      mergeMap(({ army }) =>
        this._armyService.saveArmy(army).pipe(
          map(() => AddArmySuccess({ army })),
          tap(() => this._router.navigate(['/fetch-army'])),
          catchError(error => of(AddArmyFailure({ error })))
        ),
      )
    )
  )

  editArmy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditArmy),
      mergeMap(({ army }) =>
        this._armyService.updateArmy(army).pipe(
          map(() => EditArmySuccess({ army })),
          tap(() => this._router.navigate(['/fetch-army'])),
          catchError(error => of(EditArmyFailure({ error })))
        ),
      )
    )
  )

  deleteArmy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteArmy),
      mergeMap(({ id }) =>
        this._armyService.deleteArmy(id).pipe(
          map(() => DeleteArmySuccess({ id })),
        )
      ),
    )
  )
}


import { DefunctService } from "src/app/services/bcatp.service";
import {
  LoadDefunctSuccess, FetchDefunct, AddDefunct, AddDefunctSuccess,
  DeleteDefunct, DeleteDefunctSuccess, EditDefunct, EditDefunctSuccess,
  LoadDefunctFailure, AddDefunctFailure, EditDefunctFailure
} from "src/app/state/actions/bcatp.actions";

@Injectable()
export class DefunctEffect {
  constructor(
    private actions$: Actions,
    private _defunctService: DefunctService,
    private _router: Router,
  ) { }

  loadDefunct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchDefunct),
      switchMap(() =>
        this._defunctService.getDefuncts().pipe(
          map((defuncts) => LoadDefunctSuccess({ defuncts })),
          catchError(error => of(LoadDefunctFailure({ error })))
        )
      )
    ),
  )

  addDefunct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddDefunct),
      mergeMap(({ defunct }) =>
        this._defunctService.saveDefunct(defunct).pipe(
          map(() => AddDefunctSuccess({ defunct })),
          tap(() => this._router.navigate(['/fetch-defunct'])),
          catchError(error => of(AddDefunctFailure({ error })))
        ),
      )
    )
  )

  editDefunct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditDefunct),
      mergeMap(({ defunct }) =>
        this._defunctService.updateDefunct(defunct).pipe(
          map(() => EditDefunctSuccess({ defunct })),
          tap(() => this._router.navigate(['/fetch-defunct'])),
          catchError(error => of(EditDefunctFailure({ error })))
        ),
      )
    )
  )

  deleteDefunct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteDefunct),
      mergeMap(({ id }) =>
        this._defunctService.deleteDefunct(id).pipe(
          map(() => DeleteDefunctSuccess({ id })),
        )
      ),
    )
  )
}
