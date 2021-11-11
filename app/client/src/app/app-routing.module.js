"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const alta_tratamiento_component_1 = require("./components/tratamiento/alta-tratamiento.component");
const afeccion_component_1 = require("./components/afeccion/afeccion.component");
const consulta_component_1 = require("./components/consulta/consulta.component");
const paciente_component_1 = require("./components/paciente/paciente.component");
const medicacion_component_1 = require("./components/medicacion/medicacion.component");
const consulta_tratamiento_component_1 = require("./components/consulta-tratamientos/consulta-tratamiento.component");
const routes = [
    { path: 'afeccion', component: afeccion_component_1.AfeccionComponent },
    { path: 'alta-consulta', component: consulta_component_1.ConsultaComponent },
    { path: 'alta-tratamiento', component: alta_tratamiento_component_1.AltaTratamientoComponent },
    { path: 'alta-pacienteHC', component: paciente_component_1.PacienteComponent },
    { path: 'consultaMedicaciones', component: medicacion_component_1.MedicacionComponent },
    { path: 'consultaTratamiento', component: consulta_tratamiento_component_1.ConsultaTratamientoComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
