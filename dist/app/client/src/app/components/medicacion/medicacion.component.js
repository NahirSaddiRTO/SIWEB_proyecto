"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicacionComponent = void 0;
const core_1 = require("@angular/core");
let MedicacionComponent = class MedicacionComponent {
    constructor(tratamientoService, consultaService) {
        this.tratamientoService = tratamientoService;
        this.consultaService = consultaService;
        this.tratamientosMedico = [];
        this.medicaciones = [];
        this.verMedicaciones = false;
        this.mostrarErrorTratamientosMedico = false;
        this.headElements = ['ID', 'Fecha', 'Tipo', 'Descripción', 'Medicaciones'];
        this.headMedicaciones = ['ID', 'Dosis', 'Nombre', 'Proposito'];
    }
    ngOnInit() {
    }
    buscarConsultas(idMedico, fechaDesde, fechaHasta) {
        console.log(idMedico, fechaDesde, fechaHasta);
        this.tratamientoService.getTratamientosxMedico(idMedico, fechaDesde, fechaHasta).subscribe(data => {
            this.tratamientosMedico = data;
            console.log("tratamientosMedico", this.tratamientosMedico);
            if (this.tratamientosMedico.length == 0) {
                console.log("no tiene elementos", this.tratamientosMedico);
                this.mostrarErrorTratamientosMedico = true;
            }
            else {
                console.log("tiene elementos");
                this.mostrarErrorTratamientosMedico = false;
            }
        });
    }
    mostrarMedicacion(datos) {
        console.log("datos", datos);
        this.medicaciones = [];
        datos.Medicacion.forEach((element) => {
            console.log("element", element);
            this.buscarMedicaciones(element._id);
        });
    }
    buscarMedicaciones(idMedicacion) {
        console.log(idMedicacion);
        this.consultaService.getMedicaciones(idMedicacion).subscribe(data => {
            this.medicaciones.push(data);
            console.log("medicaciones", this.medicaciones);
            if (this.medicaciones.length != 0) {
                console.log("no tiene medicaciones", this.medicaciones);
                this.verMedicaciones = true;
            }
            else {
                console.log("tiene medicaciones");
                this.verMedicaciones = false;
            }
        });
    }
};
MedicacionComponent = __decorate([
    core_1.Component({
        selector: 'app-medicacion',
        templateUrl: './medicacion.component.html',
        styleUrls: ['./medicacion.component.css']
    })
], MedicacionComponent);
exports.MedicacionComponent = MedicacionComponent;
