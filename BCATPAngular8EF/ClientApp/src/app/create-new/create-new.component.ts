import { Component, OnInit, Input, Output, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BcatpService, NavyService, DewlineService, PinetreeService, MidCanadaService } from '../services/bcatp.service';
import { AirforceService, ArmyService, DefunctService } from '../services/bcatp.service';
import { Bcatp, Navy, Dewline, Pinetree, MidCanada, Airforce, Army, Defunct } from 'src/models/bcatp';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { AddBcatp, AddNavy, AddDewline, AddPinetree } from '../state/actions/bcatp.actions';
import { AddAirforce, AddArmy, AddDefunct, AddMidCanada } from '../state/actions/bcatp.actions';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { MapsAPILoader, MouseEvent } from '@agm/core';

import { FetchDataComponent } from '../fetch-data/fetch-data.component';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})

export class CreateBcatpComponent implements OnInit, OnDestroy {
  FormName3: FormGroup;
  title = 'Create';
  latitude: number;
  longitude: number;

  id: number;
  formname3: string;
  name2: string;
  zoom: number;
  address: string;
  private geoCoder;
  mapType = 'satellite';
  getById: string;
  private route;
  nameSubscription: Subscription;
  latSubscription: Subscription;
  lngSubscription: Subscription;

  get name3() { return this.FormName3.get('name').value; }
  get latitude2() { return this.FormName3.get('latitude').value; }
  get longitude2() { return this.FormName3.get('longitude').value; }

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
/*    private router: Router,*/
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {

    if (this._avRoute.snapshot.params['id']) {
      this.id = this._avRoute.snapshot.params['id'];
    }
    if (this._avRoute.snapshot.params['formname3']) {
      this.formname3 = this._avRoute.snapshot.params['formname3'];
    }
    if (this._avRoute.snapshot.params['name']) {
      this.name2 = this._avRoute.snapshot.params['name'];
    }
    if (this._avRoute.snapshot.params['latitude']) {
      this.latitude = Math.max(this._avRoute.snapshot.params['latitude']);
    }
    if (this._avRoute.snapshot.params['longitude']) {
      this.longitude = Math.max(this._avRoute.snapshot.params['longitude']);
    }

    this.FormName3 = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      comment: [''],
      wiki: ['']
    });

  }


  ngOnInit() {
    this.latSubscription = this.FormName3.get('latitude').valueChanges.subscribe();
    this.lngSubscription = this.FormName3.get('longitude').valueChanges.subscribe();

    this.getById = 'this._' + this.formname3 + 'Service.get' + this.formname3 +
      'ById(this.id).subscribe((response=' + this.formname3 + ') => { this.FormName3.setValue(response);}, error => console.error(error));';

    this.title = 'Create';

    switch (this.formname3) {
      case 'Bcatp':
        this._BcatpService.getBcatpById(this.id).subscribe((response = Bcatp) => {
          this.FormName3.setValue(response);
        }, error => console.error(error));
        break;
      case 'Navy':
        this._NavyService.getNavyById(this.id).subscribe((response = Navy) => {
          this.FormName3.setValue(response);
        }, error => console.error(error));
        break;
      case 'Dewline':
        this._DewlineService.getDewlineById(this.id).subscribe((response = Dewline) => {
          this.FormName3.setValue(response);
        }, error => console.error(error));
        break;
      case 'Pinetree':
        this._PinetreeService.getPinetreeById(this.id).subscribe((response = Pinetree) => {
          this.FormName3.setValue(response);
        }, error => console.error(error));
        break;
      case 'MidCanada':
        this._MidCanadaService.getMidCanadaById(this.id).subscribe((response = MidCanada) => {
          this.FormName3.setValue(response);
        }, error => console.error(error));
        break;
      case 'Airforce':
        this._AirforceService.getAirforceById(this.id).subscribe((response = Airforce) => {
          this.FormName3.setValue(response);
        }, error => console.error(error));
        break;
      case 'Army':
        this._ArmyService.getArmyById(this.id).subscribe((response = Army) => {
          this.FormName3.setValue(response);
        }, error => console.error(error));
        break;
      case 'Defunct':
        this._DefunctService.getDefunctById(this.id).subscribe((response = Defunct) => {
          this.FormName3.setValue(response);
        }, error => console.error(error));
        break;
    }


    this.mapsAPILoader.load().then(() => {
      //this.name.setValue('Calgary');
      //this.lat.setValue(51.09831098319883);
      //this.lng.setValue(-114.01218795776366);
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

          this.lat.setValue(this.latitude);
          this.lng.setValue(this.longitude); 

          this.zoom = 18;
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 18;

        this.FormName3.value('latitude').value = this.lat;
        this.FormName3.value('longitude').value = this.lng;

        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { latitude2: latitude, longitude2: longitude } }, (results, status) => {
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
    this.nameSubscription.unsubscribe();
    this.latSubscription.unsubscribe();
    this.lngSubscription.unsubscribe();
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  save() {

    if (!this.FormName3.valid) {
      return;
    }
    if (this.title === 'Create') {
      switch (this.formname3) {
        case 'Bcatp':
          this.store.dispatch(AddBcatp({ bcatp: this.FormName3.value }));
          break;
        case 'Navy':
          this.store.dispatch(AddNavy({ navy: this.FormName3.value }));
          break;
        case 'Dewline':
          this.store.dispatch(AddDewline({ dewline: this.FormName3.value }));
          break;
        case 'Pinetree':
          this.store.dispatch(AddPinetree({ pinetree: this.FormName3.value }));
          break;
        case 'MidCanada':
          this.store.dispatch(AddMidCanada({ midcanada: this.FormName3.value }));
          break;
        case 'Army':
          this.store.dispatch(AddArmy({ army: this.FormName3.value }));
          break;
        case 'Airforce':
          this.store.dispatch(AddAirforce({ airforce: this.FormName3.value }));
          break;
        case 'Defunct':
          this.store.dispatch(AddDefunct({ defunct: this.FormName3.value }));
          break;
      }
    }


  this._router.resetConfig([{ path: 'fetch-navy/:Navy/:navy', component:  FetchDataComponent },]);
    

    //this._router.config.push({ path: 'fetch-navy', component: FetchDataComponent });

 
    //this._router.navigate(['/fetch-bcatp']);

    //this.location.back();
    //this.location.back();
  }

  cancel() {
    this.title = '';
   //  this._router.navigate(['/fetch-bcatp']);
   this.location.back();
  }

  get name() { return this.FormName3.get('name'); }
  get lng() { return this.FormName3.get('longitude'); }
  get lat() { return this.FormName3.get('latitude'); }
  get comment() { return this.FormName3.get('comment'); }
  get wiki() { return this.FormName3.get('wiki'); }

}
