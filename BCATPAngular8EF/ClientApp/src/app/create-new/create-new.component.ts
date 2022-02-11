import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BcatpService, NavyService, DewlineService, PinetreeService, MidCanadaService } from '../services/bcatp.service';
import { AirforceService, ArmyService, DefunctService, TanksService, PlanesService, ShipsService } from '../services/bcatp.service';
import { Bcatp, Navy, Dewline, Pinetree, MidCanada, Airforce, Army, Defunct, Tanks, Planes, Ships } from 'src/models/bcatp';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { AddBcatp, AddNavy, AddDewline, AddPinetree } from '../state/actions/bcatp.actions';
import { AddAirforce, AddArmy, AddDefunct, AddMidCanada, AddTanks, AddPlanes, AddShips } from '../state/actions/bcatp.actions';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-create-new-armament',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateBcatpComponent implements OnInit, OnDestroy {
  FormName3: FormGroup;
  FormName4: FormGroup;
  title = 'Create';

  latitude: number | 6;
  longitude: number | 6;
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
  name4Subscription: Subscription;
  params: any;

  get name3() { return this.FormName3.get('name').value; }
  get latitude2() { return this.FormName3.get('latitude').value; }
  get longitude2() { return this.FormName3.get('longitude').value; }
  get name4() { return this.FormName4.get('name').value; }
  get latitude4() { return this.FormName4.get('latitude').value; }
  get longitude4() { return this.FormName4.get('longitude').value; }

  @ViewChild('search', { static: true })
  public searchElementRef: ElementRef;

  constructor(private modalService: NgbModal, private _fb1: FormBuilder, private _fb2: FormBuilder, private _avRoute: ActivatedRoute, public location: Location,
    private _BcatpService: BcatpService,
    private _NavyService: NavyService,
    private _DewlineService: DewlineService,
    private _PinetreeService: PinetreeService,
    private _MidCanadaService: MidCanadaService,
    private _AirforceService: AirforceService,
    private _ArmyService: ArmyService,
    private _DefunctService: DefunctService,
    private _TanksService: TanksService,
    private _PlanesService: PlanesService,
    private _ShipsService: ShipsService,
    private _router: Router,
    private store: Store<AppState>,
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

    this.FormName3 = this._fb1.group({
      id: 0,
      name: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      comment: [''],
      wiki: ['']
    });
    this.FormName4 = this._fb2.group({
      id: 0,
      name: ['', [Validators.required]],
      longitude: 0,
      latitude: 0,
      comment: [''],
      wiki: ['']
    });
  }

  ngOnInit() {

    if (this.formname3 === 'Planes' || this.formname3 === 'Ships' || this.formname3 === 'Tanks') {
      this.lat.setValue(0);
      this.lng.setValue(0);
      this.myFunction();
    }

    this.nameSubscription = this.FormName3.get('name').valueChanges.subscribe();
    this.latSubscription = this.FormName3.get('latitude').valueChanges.subscribe();
    this.lngSubscription = this.FormName3.get('longitude').valueChanges.subscribe();
    this.name4Subscription = this.FormName4.get('name').valueChanges.subscribe();

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
      case 'Tanks':
        this._TanksService.getTanksById(this.id).subscribe((response = Tanks) => {
          this.FormName4.setValue(response);
        }, error => console.error(error));
        break;
      case 'Planes':
        this._PlanesService.getPlanesById(this.id).subscribe((response = Planes) => {
          this.FormName4.setValue(response);
        }, error => console.error(error));
        break;
      case 'Ships':
        this._ShipsService.getShipsById(this.id).subscribe((response = Ships) => {
          this.FormName4.setValue(response);
        }, error => console.error(error));
        break;
    }


    this.mapsAPILoader.load().then(() => {
      this.nm.setValue(' ');
      this.lat.setValue(0);
      this.lng.setValue(0);
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.name2 = place.formatted_address
          this.name2 = this.name2.split(',')[0];
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

          this.nm.setValue(this.name2);
          this.lat.setValue(this.latitude);
          this.lng.setValue(this.longitude);

          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = Number(position.coords.latitude.toFixed(6));
        this.longitude = Number(position.coords.longitude.toFixed(6));
        this.zoom = 12;

        this.FormName3.value('name').value = this.nm;
        //this.FormName3.value('latitude').value = this.lat;
        //this.FormName3.value('longitude').value = this.lng;
        this.FormName3.value('latitude').value = this.latitude;
        this.FormName3.value('longitude').value = this.longitude;
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
    this.name4Subscription.unsubscribe();
    this.latSubscription.unsubscribe();
    this.lngSubscription.unsubscribe();
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.name2 = $event.placeId;

    this.latitude = Number($event.coords.lat.toFixed(6));
    this.longitude = Number($event.coords.lng.toFixed(6));

    //this.latitude = $event.coords.lat;
    //this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  save1() {
    /*  alert('save 1');*/
    //if (this.formname3 === 'Planes' || this.formname3 === 'Ships' || this.formname3 === 'Tanks') {
    //  this.longitude = 0; this.latitude = 0;
    //}
    this.lat.setValue(this.latitude);
    this.lng.setValue(this.longitude);
    if (!this.FormName3.valid) {
      return;
    }
    if (this.title === 'Create') {

      switch (this.formname3) {
        case 'Bcatp':
          this.store.dispatch(AddBcatp({ bcatp: this.FormName3.value }));
          this._router.navigateByUrl('/fetch-data/Bcatp/bcatp');
          break;
        case 'Navy':
          this.store.dispatch(AddNavy({ navy: this.FormName3.value }));
          this._router.navigateByUrl('/fetch-navy/Navy/navy');
          break;
        case 'Dewline':
          this.store.dispatch(AddDewline({ dewline: this.FormName3.value }));
          this._router.navigateByUrl('/fetch-dewline/Dewline/dewline');
          break;
        case 'Pinetree':
          this.store.dispatch(AddPinetree({ pinetree: this.FormName3.value }));
          this._router.navigateByUrl('/fetch-pinetree/Pinetree/pinetree');
          break;
        case 'MidCanada':
          this.store.dispatch(AddMidCanada({ midcanada: this.FormName3.value }));
          this._router.navigateByUrl('/fetch-midcanada/MidCanada/midcanada');
          break;
        case 'Army':
          this.store.dispatch(AddArmy({ army: this.FormName3.value }));
          this._router.navigateByUrl('/fetch-army/Army/army');
          break;
        case 'Airforce':
          this.store.dispatch(AddAirforce({ airforce: this.FormName3.value }));
          this._router.navigateByUrl('/fetch-airforce/Airforce/airforce');
          break;
        case 'Defunct': ;
          this.store.dispatch(AddDefunct({ defunct: this.FormName3.value }));
          this._router.navigateByUrl('/fetch-defunct/Defunct/defunct');
          break;
        //case 'Tanks':
        //  this.store.dispatch(AddTanks({ tanks: this.FormName3.value }));
        //  this._router.navigateByUrl('/fetch-tanks/Tanks/tanks');
        //  break;
        //case 'Planes':
        //  this.store.dispatch(AddPlanes({ planes: this.FormName3.value }));
        //  this._router.navigateByUrl('/fetch-planes/Planes/planes');
        //  break;
        //case 'Ships':
        //  this.store.dispatch(AddShips({ ships: this.FormName3.value }));
        //  this._router.navigateByUrl('/fetch-ships/Ships/ships');
        //  break;
      }
    }
    this.location.back();
  }

  save2() {
    /* alert('save 2');*/
    if (this.formname3 === 'Planes' || this.formname3 === 'Ships' || this.formname3 === 'Tanks') {
      this.longitude = 0; this.latitude = 0;
    }
    if (!this.FormName4.valid) {
      return;
    }
    if (this.title === 'Create') {

      switch (this.formname3) {
        case 'Tanks':
          this.store.dispatch(AddTanks({ tanks: this.FormName4.value }));
          this._router.navigateByUrl('/fetch-tanks/Tanks/tanks');
          break;
        case 'Planes':
          this.store.dispatch(AddPlanes({ planes: this.FormName4.value }));
          this._router.navigateByUrl('/fetch-planes/Planes/planes');
          break;
        case 'Ships':
          this.store.dispatch(AddShips({ ships: this.FormName4.value }));
          this._router.navigateByUrl('/fetch-ships/Ships/ships');
          break;
      }
    }
    this.location.back();
  }

  myFunction() {
    var x = document.getElementById("searchBar");
    x.style.display = "none";
  }

  cancel1() {
    this.title = '';
    this.location.back();
    /*this._router.navigate(['/fetch-bcatp']);*/
  }
  cancel2() {
    this.title = '';
    this.location.back();
    /*this._router.navigate(['/fetch-bcatp']);*/
  }
  get nm() { return this.FormName3.get('name'); }
  get lng() { return this.FormName3.get('longitude'); }
  get lat() { return this.FormName3.get('latitude'); }
  get comment() { return this.FormName3.get('comment'); }
  get wiki() { return this.FormName3.get('wiki'); }

  //get nm() { return this.FormName3.get('name'); }
  //get comment() { return this.FormName4.get('comment'); }
  //get wiki() { return this.FormName4.get('wiki'); }

  get nm2() { return this.FormName4.get('name'); }
  get lng2() { return this.FormName4.get('longitude'); }
  get lat2() { return this.FormName4.get('latitude'); }
  get comment2() { return this.FormName4.get('comment'); }
  get wiki2() { return this.FormName4.get('wiki'); }
}
