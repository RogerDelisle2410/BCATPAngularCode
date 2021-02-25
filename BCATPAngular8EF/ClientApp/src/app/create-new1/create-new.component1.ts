import { Component, OnInit, Input, Output, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// import { BcatpService, NavyService, DewlineService} from '../services/bcatp.service';
import { BcatpService, NavyService, DewlineService, PinetreeService, MidCanadaService } from '../services/bcatp.service';
import { AirforceService, ArmyService, DefunctService } from '../services/bcatp.service';


// import { Bcatp, Navy, Dewline } from 'src/models/bcatp';
import { Bcatp, Navy, Dewline, Pinetree, MidCanada, Airforce, Army, Defunct } from 'src/models/bcatp';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';

import { AddBcatp,  AddNavy,  AddDewline,  AddPinetree  } from '../state/actions/bcatp.actions';
// tslint:disable-next-line: max-line-length
import {  AddAirforce,  AddArmy,  AddDefunct,  AddMidCanada } from '../state/actions/bcatp.actions';

import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateBcatpComponent implements OnInit, OnDestroy {
  FormName2: FormGroup;
  title = 'Create';
  id: number;
  formname2: string;
  getById: string;
  name2: string;


  lat: number;
  lng: number;
  mapType = 'satellite';
  zoom = 13;
  address: string;   
  private geoCoder;

  nameSubscription: Subscription;
  latSubscription: Subscription;
  lngSubscription: Subscription;

  get name3() { return this.FormName2.get('name').value; }
  get lat3() { return this.FormName2.get('latitude').value; }
  get lng3() { return this.FormName2.get('longitude').value; }

  @ViewChild('search', { static: true })
  public searchElementRef: ElementRef;

  constructor(private modalService: NgbModal, private _fb: FormBuilder, private _avRoute: ActivatedRoute, public location: Location,
    private _BcatpService: BcatpService,
    private _NavyService: NavyService,
    private _DewlineService: DewlineService,
    private _PinetreeService: PinetreeService,
    private _MidCanadaService: MidCanadaService,
    private _AirforceService: AirforceService,
    private _ArmyService: ArmyService,
    private _DefunctService: DefunctService,
    private _router: Router,
    private store: Store<AppState>,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {
    if (this._avRoute.snapshot.params['id']) {
      this.id = this._avRoute.snapshot.params['id'];
    }
    if (this._avRoute.snapshot.params['formname2']) {
      this.formname2 = this._avRoute.snapshot.params['formname2'];
    }
    if (this._avRoute.snapshot.params['name']) {
      this.name2 = this._avRoute.snapshot.params['name'];
    }
    if (this._avRoute.snapshot.params['latitude']) {
      this.lat = Math.max(this._avRoute.snapshot.params['latitude']);
    }
    if (this._avRoute.snapshot.params['longitude']) {
      this.lng = Math.max(this._avRoute.snapshot.params['longitude']);
    }

    this.FormName2 = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      comment: [''],
      wiki: ['']
    });
  }

  ngOnInit() {


    this.latSubscription = this.FormName2.get('latitude').valueChanges.subscribe();
    this.lngSubscription = this.FormName2.get('longitude').valueChanges.subscribe();

    this.getById = 'this._' + this.formname2 + 'Service.get' + this.formname2 +
      'ById(this.id).subscribe((response=' + this.formname2 + ') => { this.FormName2.setValue(response);}, error => console.error(error));';

    if (this.id > 0) {
      this.title = 'Create';

      switch (this.formname2) {
        case 'Bcatp':
          this._BcatpService.getBcatpById(this.id).subscribe((response = Bcatp) => {
            this.FormName2.setValue(response);
          }, error => console.error(error));
          break;
        case 'Navy':
          this._NavyService.getNavyById(this.id).subscribe((response = Navy) => {
            this.FormName2.setValue(response);
          }, error => console.error(error));
          break;
        case 'Dewline':
          this._DewlineService.getDewlineById(this.id).subscribe((response = Dewline) => {
            this.FormName2.setValue(response);
          }, error => console.error(error));
          break;
        case 'Pinetree':
          this._PinetreeService.getPinetreeById(this.id).subscribe((response = Pinetree) => {
            this.FormName2.setValue(response);
          }, error => console.error(error));
          break;
        case 'MidCanada':
          this._MidCanadaService.getMidCanadaById(this.id).subscribe((response = MidCanada) => {
            this.FormName2.setValue(response);
          }, error => console.error(error));
          break;
        case 'Airforce':
          this._AirforceService.getAirforceById(this.id).subscribe((response = Airforce) => {
            this.FormName2.setValue(response);
          }, error => console.error(error));
          break;
        case 'Army':
          this._ArmyService.getArmyById(this.id).subscribe((response = Army) => {
            this.FormName2.setValue(response);
          }, error => console.error(error));
          break;
        case 'Defunct':
          this._DefunctService.getDefunctById(this.id).subscribe((response = Defunct) => {
            this.FormName2.setValue(response);
          }, error => console.error(error));
          break;
      }
     }

    this.mapsAPILoader.load().then(() => {
      this.name.setValue('Calgary');
      this.latitude.setValue(51.09831098319883);
      this.longitude.setValue(-114.01218795776366);
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // tslint:disable-next-line: comment-format
          //get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // tslint:disable-next-line: comment-format
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // tslint:disable-next-line: comment-format
          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();

        });
      });
    });
   }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.FormName2.value('latitude').value = this.lat;
        this.FormName2.value('longitude').value = this.lng;

        this.getAddress(this.lat, this.lng);
      });
    }
  }
 

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat3: latitude, lng3: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  ngOnDestroy() {
    // this.nameSubscription.unsubscribe();
    this.latSubscription.unsubscribe();
    this.lngSubscription.unsubscribe();
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.address = $event.placeId;

    this.latitude.setValue(this.lat);
    this.longitude.setValue(this.lng);
    // this.name.setValue(this.address);
    this.getAddress(this.latitude, this.longitude);
  }

  save() {

    if (!this.FormName2.valid) {
      return;
    }

    if (this.title === 'Create') {
      switch (this.formname2) {
        case 'Bcatp':
          this.store.dispatch(AddBcatp({ bcatp: this.FormName2.value }));
          break;
        case 'Navy':
          this.store.dispatch(AddNavy({ navy: this.FormName2.value }));
          break;
        case 'Dewline':
          this.store.dispatch(AddDewline({ dewline: this.FormName2.value }));
          break;
        case 'Pinetree':
          this.store.dispatch(AddPinetree({ pinetree: this.FormName2.value }));
          break;
        case 'MidCanada':
          this.store.dispatch(AddMidCanada({ midcanada: this.FormName2.value }));
          break;
        case 'Army':
          this.store.dispatch(AddArmy({ army: this.FormName2.value }));
          break;
        case 'Airforce':
          this.store.dispatch(AddAirforce({ airforce: this.FormName2.value }));
          break;
        case 'Defunct':
          this.store.dispatch(AddDefunct({ defunct: this.FormName2.value }));
          break;
      }
    }
    this.location.back();
  }

  cancel() {
    if (this.title === 'Create') {
      this.title = '';
      // this.location.back();
      this._router.navigate(['/fetch-bcatp']);
    } else if (this.title === 'Edit') {
      this.title = '';
      this._router.navigate(['/fetch-bcatp']);
      // this.location.back();
    }
  }

  get name() { return this.FormName2.get('name'); }
  get longitude() { return this.FormName2.get('longitude'); }
  get latitude() { return this.FormName2.get('latitude'); }
  get comment() { return this.FormName2.get('comment'); }
  get wiki() { return this.FormName2.get('wiki'); }

}
