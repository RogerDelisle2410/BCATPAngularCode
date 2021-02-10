import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Bcatp } from '../../models/bcatp';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BcatpService {

  myAppUrl =  ''; // environment.ApiBaseUrl;
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
   // this.myAppUrl = environment.ApiBaseUrl; // baseUrl;
  }

  getBcatps() {
    console.log('service called');

    return this._http.get<Bcatp[]>(this.myAppUrl + 'api/Bcatp/Index').pipe(map(
      response => {
        return response;
      }));
  }

  getBcatpById(id: number) {
    return this._http.get(this.myAppUrl + 'api/Bcatp/Details/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveBcatp(bcatp: Bcatp) {
    console.log('service called');
    return this._http.post(this.myAppUrl + 'api/Bcatp/Create', bcatp)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateBcatp(bcatp: Bcatp) {
    return this._http.put(this.myAppUrl + 'api/Bcatp/Edit', bcatp)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteBcatp(id: number): Observable<any> {
    return this._http.delete(this.myAppUrl + 'api/Bcatp/Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }
}


 import { Navy } from 'src/models/bcatp';

 @Injectable({
  providedIn: 'root'
 })
 export class NavyService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }


  getNavys() {
    console.log('service called');
    return this._http.get<Navy[]>(this.myAppUrl + 'api/Navy/Index').pipe(map(
      response => {
        return response;
      }));
  }

  getNavyById(id: number) {
    return this._http.get(this.myAppUrl + 'api/Navy/Details/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveNavy(navy: Navy) {
    console.log('service called');
    return this._http.post(this.myAppUrl + 'api/Navy/Create', navy)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateNavy(navy: Navy) {
    return this._http.put(this.myAppUrl + 'api/Navy/Edit', navy)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteNavy(id: number): Observable<any> {
    return this._http.delete(this.myAppUrl + 'api/Navy/Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }
 }


 import { Dewline } from 'src/models/bcatp';

 @Injectable({
  providedIn: 'root'
 })
 export class DewlineService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }



  getDewlines() {
    console.log('service called');
    return this._http.get<Dewline[]>(this.myAppUrl + 'api/Dewline/Index').pipe(map(
      response => {
        return response;
      }));
  }

  getDewlineById(id: number) {
    return this._http.get(this.myAppUrl + 'api/Dewline/Details/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveDewline(dewline: Dewline) {
    console.log('service called');
    return this._http.post(this.myAppUrl + 'api/Dewline/Create', dewline)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateDewline(dewline: Dewline) {
    return this._http.put(this.myAppUrl + 'api/Dewline/Edit', dewline)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteDewline(id: number): Observable<any> {
    return this._http.delete(this.myAppUrl + 'api/Dewline/Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }
 }


 import { MidCanada } from 'src/models/bcatp';

 @Injectable({
  providedIn: 'root'
 })
 export class MidCanadaService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }



  getMidCanadas() {
    console.log('service called');
    return this._http.get<MidCanada[]>(this.myAppUrl + 'api/MidCanada/Index').pipe(map(
      response => {
        return response;
      }));
  }

  getMidCanadaById(id: number) {
    return this._http.get(this.myAppUrl + 'api/MidCanada/Details/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveMidCanada(midcanada: MidCanada) {
    console.log('service called');
    return this._http.post(this.myAppUrl + 'api/MidCanada/Create', midcanada)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateMidCanada(midcanada: MidCanada) {
    return this._http.put(this.myAppUrl + 'api/MidCanada/Edit', midcanada)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteMidCanada(id: number): Observable<any> {
    return this._http.delete(this.myAppUrl + 'api/MidCanada/Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }
 }


 import { Pinetree } from 'src/models/bcatp';

 @Injectable({
  providedIn: 'root'
 })
 export class PinetreeService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }



  getPinetrees() {
    console.log('service called');
    return this._http.get<Pinetree[]>(this.myAppUrl + 'api/Pinetree/Index').pipe(map(
      response => {
        return response;
      }));
  }

  getPinetreeById(id: number) {
    return this._http.get(this.myAppUrl + 'api/Pinetree/Details/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  savePinetree(pinetree: Pinetree) {
    console.log('service called');
    return this._http.post(this.myAppUrl + 'api/Pinetree/Create', pinetree)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updatePinetree(pinetree: Pinetree) {
    return this._http.put(this.myAppUrl + 'api/Pinetree/Edit', pinetree)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deletePinetree(id: number): Observable<any> {
    return this._http.delete(this.myAppUrl + 'api/Pinetree/Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }
 }


 import { Airforce } from 'src/models/bcatp';

 @Injectable({
  providedIn: 'root'
 })
 export class AirforceService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }



  getAirforces() {
    console.log('service called');
    return this._http.get<Airforce[]>(this.myAppUrl + 'api/Airforce/Index').pipe(map(
      response => {
        return response;
      }));
  }

  getAirforceById(id: number) {
    return this._http.get(this.myAppUrl + 'api/Airforce/Details/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveAirforce(airforce: Airforce) {
    console.log('service called');
    return this._http.post(this.myAppUrl + 'api/Airforce/Create', airforce)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateAirforce(airforce: Airforce) {
    return this._http.put(this.myAppUrl + 'api/Airforce/Edit', airforce)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteAirforce(id: number): Observable<any> {
    return this._http.delete(this.myAppUrl + 'api/Airforce/Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

 }

 import { Army } from 'src/models/bcatp';

 @Injectable({
  providedIn: 'root'
 })
 export class ArmyService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }



  getArmys() {
    console.log('service called');
    return this._http.get<Army[]>(this.myAppUrl + 'api/Army/Index').pipe(map(
      response => {
        return response;
      }));
  }

  getArmyById(id: number) {
    return this._http.get(this.myAppUrl + 'api/Army/Details/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveArmy(army: Army) {
    console.log('service called');
    return this._http.post(this.myAppUrl + 'api/Army/Create', army)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateArmy(army: Army) {
    return this._http.put(this.myAppUrl + 'api/Army/Edit', army)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteArmy(id: number): Observable<any> {
    return this._http.delete(this.myAppUrl + 'api/Army/Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }


 }

 import { Defunct } from 'src/models/bcatp';

 @Injectable({
  providedIn: 'root'
 })
 export class DefunctService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }



  getDefuncts() {
    console.log('service called');
    return this._http.get<Defunct[]>(this.myAppUrl + 'api/Defunct/Index').pipe(map(
      response => {
        return response;
      }));
  }

  getDefunctById(id: number) {
    return this._http.get(this.myAppUrl + 'api/Defunct/Details/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveDefunct(defunct: Defunct) {
    console.log('service called');
    return this._http.post(this.myAppUrl + 'api/Defunct/Create', defunct)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateDefunct(defunct: Defunct) {
    return this._http.put(this.myAppUrl + 'api/Defunct/Edit', defunct)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteDefunct(id: number): Observable<any> {
    return this._http.delete(this.myAppUrl + 'api/Defunct/Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }
 }
