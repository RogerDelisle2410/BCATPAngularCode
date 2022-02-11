import { Component, OnInit } from '@angular/core';
import { Bcatp, Navy, Dewline, Pinetree, MidCanada, Airforce, Army, Defunct, Tanks, Planes, Ships } from 'src/models/bcatp';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { Observable } from 'rxjs';
import { FetchBcatp, DeleteBcatp, FetchNavy, DeleteNavy, FetchDewline, DeleteDewline, FetchPinetree, DeletePinetree, FetchMidCanada, DeleteMidCanada, FetchAirforce, DeleteAirforce, FetchArmy, DeleteArmy, FetchDefunct, DeleteDefunct, FetchTanks, DeleteTanks, FetchPlanes, DeletePlanes, FetchShips, DeleteShips } from 'src/app/state/actions/bcatp.actions';
import { getBcatps } from 'src/app/state/reducers/bcatp.reducer';
import { getNavys } from 'src/app/state/reducers/navy.reducer';
import { getDewlines } from 'src/app/state/reducers/dewline.reducer';
import { getPinetrees } from 'src/app/state/reducers/pinetree.reducer';
import { getMidCanadas } from 'src/app/state/reducers/midcanada.reducer';
import { getAirforces } from 'src/app/state/reducers/airforce.reducer';
import { getArmys } from 'src/app/state/reducers/army.reducer';
import { getDefuncts } from 'src/app/state/reducers/defunct.reducer';

import { getTanks } from 'src/app/state/reducers/tanks.reducer';
import { getPlanes } from 'src/app/state/reducers/planes.reducer';
import { getShips } from 'src/app/state/reducers/ships.reducer';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})

export class FetchDataComponent implements OnInit {

  comparablePartyHeadersTrimmed = [
    'Name',
    'Info',
    'Latitude',
    'Longitude',
    'Edit - Del - Map',
  ];

  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  public bcatpList: Observable<Bcatp[]>;
  public navyList: Observable<Navy[]>;
  public dewlineList: Observable<Dewline[]>;
  public pinetreeList: Observable<Pinetree[]>;
  public midcanadaList: Observable<MidCanada[]>;
  public airforceList: Observable<Airforce[]>;
  public armyList: Observable<Army[]>;
  public defunctList: Observable<Defunct[]>;

  public tanksList: Observable<Tanks[]>;
  public planesList: Observable<Planes[]>;
  public shipsList: Observable<Ships[]>;

  public astring$: object;
  public wikiLink: string;
  page = 1;

  formname: string;
  formname2: string;
  name: string;
  lat: number | 6;
  lng: number | 6;
  comment: string; cmt: string;
  searchText: string;
  wiki: string;
  mapType = 'satellite';
  zoom = 13;

  constructor(private modalService: NgbModal, private _avRoute: ActivatedRoute, private store: Store<AppState>, private location: Location) {
    if (this._avRoute.snapshot.params['formname']) {
      this.formname = this._avRoute.snapshot.params['formname'];
    }
    if (this._avRoute.snapshot.params['formname2']) {
      this.formname2 = this._avRoute.snapshot.params['formname2'];
    }

    // FetchDataComponent.pageNo = this.page;

  }

  ngOnInit() {
    switch (this.formname) {
      case 'Bcatp':
        this.store.dispatch(FetchBcatp());
        this.bcatpList = this.store.pipe(select(getBcatps));
        this.astring$ = this.bcatpList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/British_Commonwealth_Air_Training_Plan';
        this.loading$ = this.store.select(store => store.bcatp.loading);
        break;

      case 'Navy':
        this.store.dispatch(FetchNavy());
        this.navyList = this.store.pipe(select(getNavys));
        this.astring$ = this.navyList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/Royal_Canadian_Navy';
        this.loading$ = this.store.select(store => store.navy.loading);
        break;

      case 'Dewline':
        this.store.dispatch(FetchDewline());
        this.dewlineList = this.store.pipe(select(getDewlines));
        this.astring$ = this.dewlineList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/Distant_Early_Warning_Line';
        this.loading$ = this.store.select(store => store.dewline.loading);
        break;

      case 'Pinetree':
        this.store.dispatch(FetchPinetree());
        this.pinetreeList = this.store.pipe(select(getPinetrees));
        this.astring$ = this.pinetreeList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/Pinetree_Line';
        this.loading$ = this.store.select(store => store.pinetree.loading);
        break;

      case 'MidCanada':
        this.store.dispatch(FetchMidCanada());
        this.midcanadaList = this.store.pipe(select(getMidCanadas));
        this.astring$ = this.midcanadaList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/Mid-Canada_Line';
        this.loading$ = this.store.select(store => store.midcanada.loading);
        break;

      case 'Airforce':
        this.store.dispatch(FetchAirforce());
        this.airforceList = this.store.pipe(select(getAirforces));
        this.astring$ = this.airforceList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/Royal_Canadian_Air_Force';
        this.loading$ = this.store.select(store => store.airforce.loading);
        break;

      case 'Army':
        this.store.dispatch(FetchArmy());
        this.armyList = this.store.pipe(select(getArmys));
        this.astring$ = this.armyList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/Canadian_Army';
        this.loading$ = this.store.select(store => store.army.loading);
        break;

      case 'Defunct':
        this.store.dispatch(FetchDefunct());
        this.defunctList = this.store.pipe(select(getDefuncts));
        this.astring$ = this.defunctList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/Category:Canadian_Forces_bases_in_Canada_(closed)';
        this.loading$ = this.store.select(store => store.defunct.loading);
        break;

      case 'Tanks':
        this.store.dispatch(FetchTanks());
        this.tanksList = this.store.pipe(select(getTanks));
        this.astring$ = this.tanksList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/Tanks_of_Canada';
        this.loading$ = this.store.select(store => store.tanks.loading);
        break;

      case 'Planes':
        this.store.dispatch(FetchPlanes());
        this.planesList = this.store.pipe(select(getPlanes));
        this.astring$ = this.planesList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/List_of_aircraft_of_Canada%27s_air_forces';
        this.loading$ = this.store.select(store => store.planes.loading);
        break;

      case 'Ships':
        this.store.dispatch(FetchShips());
        this.shipsList = this.store.pipe(select(getShips));
        this.astring$ = this.shipsList;
        this.wikiLink = 'https://en.wikipedia.org/wiki/List_of_ships_of_the_Royal_Canadian_Navy';
        this.loading$ = this.store.select(store => store.ships.loading);
        break;
    }
  }

  delete(id, name) {
    const ans = confirm('Do you want to delete: ' + name + ' ' + id);
    if (ans) {
      switch (this.formname) {
        case 'Bcatp':
          this.store.dispatch(DeleteBcatp({ id: id }));
          break;
        case 'Navy':
          this.store.dispatch(DeleteNavy({ id: id }));
          break;
        case 'Dewline':
          this.store.dispatch(DeleteDewline({ id: id }));
          break;
        case 'Pinetree':
          this.store.dispatch(DeletePinetree({ id: id }));
          break;
        case 'MidCanada':
          this.store.dispatch(DeleteMidCanada({ id: id }));
          break;
        case 'Airforce':
          this.store.dispatch(DeleteAirforce({ id: id }));
          break;
        case 'Army':
          this.store.dispatch(DeleteArmy({ id: id }));
          break;
        case 'Defunct':
          this.store.dispatch(DeleteDefunct({ id: id }));
          break;
        case 'Tanks':
          this.store.dispatch(DeleteTanks({ id: id }));
          break;
        case 'Planes':
          this.store.dispatch(DeletePlanes({ id: id }));
          break;
        case 'Ships':
          this.store.dispatch(DeleteShips({ id: id }));
          break;
      }
    }
  }

  open(content, name, latitude, longitude, comment, wiki) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', windowClass: 'modal-xl' });
    {
      this.lng = longitude;
      this.lat = latitude;
      this.name = name;
      this.cmt = comment;
    }
  }
}
