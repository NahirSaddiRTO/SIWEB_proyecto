"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const forms_2 = require("@angular/forms");
//COMPONENTES
const root_component_1 = require("./root/root.component");
const afeccion_component_1 = require("./components/afeccion/afeccion.component");
const alta_tratamiento_component_1 = require("./components/tratamiento/alta-tratamiento.component");
const consulta_component_1 = require("./components/consulta/consulta.component");
const paciente_component_1 = require("./components/paciente/paciente.component");
const medicacion_component_1 = require("./components/medicacion/medicacion.component");
const formacion_profesional_component_1 = require("./components/formacion-profesional/formacion-profesional.component");
//RUTAS
const app_routing_module_1 = require("./app-routing.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            root_component_1.RootComponent,
            afeccion_component_1.AfeccionComponent,
            consulta_component_1.ConsultaComponent,
            alta_tratamiento_component_1.AltaTratamientoComponent,
            paciente_component_1.PacienteComponent,
            medicacion_component_1.MedicacionComponent,
            formacion_profesional_component_1.FormacionProfesionalComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            ng_bootstrap_1.NgbModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            forms_2.ReactiveFormsModule
        ],
        providers: [],
        bootstrap: [root_component_1.RootComponent]
    })
], AppModule);
exports.AppModule = AppModule;
