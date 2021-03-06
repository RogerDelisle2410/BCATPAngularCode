"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var add_edit_component_1 = require("./add-edit/add-edit.component");
var create_new_component_1 = require("./create-new/create-new.component");
var display_data_1 = require("./display-data/display-data");
var header_component_1 = require("./header/header.component");
var navy_reducer_1 = require("./state/reducers/navy.reducer");
var bcatp_reducer_1 = require("./state/reducers/bcatp.reducer");
var dewline_reducer_1 = require("./state/reducers/dewline.reducer");
var pinetree_reducer_1 = require("./state/reducers/pinetree.reducer");
var midcanada_reducer_1 = require("./state/reducers/midcanada.reducer");
var airforce_reducer_1 = require("./state/reducers/airforce.reducer");
var army_reducer_1 = require("./state/reducers/army.reducer");
var defunct_reducer_1 = require("./state/reducers/defunct.reducer");
var effects_1 = require("@ngrx/effects");
var bcatp_effect_1 = require("./state/effects/bcatp.effect");
var store_devtools_1 = require("@ngrx/store-devtools");
var ng2_search_filter_1 = require("ng2-search-filter");
var ngx_pagination_1 = require("ngx-pagination");
var core_2 = require("@agm/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var icon_1 = require("@angular/material/icon");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                fetch_data_component_1.FetchDataComponent,
                add_edit_component_1.AddBcatpComponent,
                create_new_component_1.CreateBcatpComponent,
                display_data_1.DataComponent,
                header_component_1.HeaderComponent
            ],
            imports: [
                ng_bootstrap_1.NgbModule,
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ngx_pagination_1.NgxPaginationModule,
                ng2_search_filter_1.Ng2SearchPipeModule,
                icon_1.MatIconModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyC3hPcF2p9InbZv2GXLy9bAMlfiNvD8nyI',
                    libraries: ['places', 'geometry']
                }),
                forms_1.ReactiveFormsModule,
                store_1.StoreModule.forRoot({
                    navy: navy_reducer_1.navyReducer, bcatp: bcatp_reducer_1.bcatpReducer, dewline: dewline_reducer_1.dewlineReducer, pinetree: pinetree_reducer_1.pinetreeReducer, midcanada: midcanada_reducer_1.midcanadaReducer, airforce: airforce_reducer_1.airforceReducer, army: army_reducer_1.armyReducer, defunct: defunct_reducer_1.defunctReducer
                }),
                effects_1.EffectsModule.forRoot([bcatp_effect_1.NavyEffect, bcatp_effect_1.BcatpEffect, bcatp_effect_1.DewlineEffect, bcatp_effect_1.PinetreeEffect, bcatp_effect_1.MidCanadaEffect, bcatp_effect_1.AirforceEffect, bcatp_effect_1.ArmyEffect, bcatp_effect_1.DefunctEffect]),
                store_devtools_1.StoreDevtoolsModule.instrument({
                    maxAge: 25
                }),
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'fetch-home', component: home_component_1.HomeComponent },
                    { path: 'fetch-data/:formname/:formname2', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'fetch-navy/:formname/:formname2', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'fetch-dewline/:formname/:formname2', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'fetch-pinetree/:formname/:formname2', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'fetch-midcanada/:formname/:formname2', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'fetch-airforce/:formname/:formname2', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'fetch-army/:formname/:formname2', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'fetch-defunct/:formname/:formname2', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'bcatp/edit/:formname/:id/:name/:latitude/:longitude', component: add_edit_component_1.AddBcatpComponent },
                    { path: 'bcatp/add/:formname3', component: create_new_component_1.CreateBcatpComponent },
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map