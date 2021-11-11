"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormacionProfesionalComponent = void 0;
const core_1 = require("@angular/core");
let FormacionProfesionalComponent = class FormacionProfesionalComponent {
    constructor(consultaService) {
        this.consultaService = consultaService;
        this.formacionProfesional = [];
        this.medico = [];
        this.mostrarErrorFP = false;
        this.mostrarErrorMedico = false;
    }
    ngOnInit() {
    }
    buscarProfesional(tipoMatricula, nroMatricula) {
        console.log(tipoMatricula, nroMatricula);
        this.consultaService.getProfesional(tipoMatricula, nroMatricula).subscribe(data => {
            console.log("data", data);
            this.formacionProfesional = data;
            if (this.formacionProfesional.length == 0) {
                this.mostrarErrorFP = true;
            }
            else {
                this.mostrarErrorFP = false;
                const idFormacion = this.formacionProfesional[0]._id;
                this.buscarMedicoConFP(idFormacion);
            }
        });
    }
    buscarMedicoConFP(idFormacion) {
        this.consultaService.getMedicoConFP(idFormacion).subscribe(data => {
            this.medico = data;
            console.log("medico", this.medico);
            if (this.medico.length == 0) {
                this.mostrarErrorMedico = true;
            }
            else {
                this.nombreMedico = this.medico[0].nombre + ',' + this.medico[0].apellido;
                this.idMedico = this.medico[0]._id;
                this.mostrarErrorMedico = false;
            }
        });
    }
};
FormacionProfesionalComponent = __decorate([
    core_1.Component({
        selector: 'app-formacion-profesional',
        templateUrl: './formacion-profesional.component.html',
        styleUrls: ['./formacion-profesional.component.css']
    })
], FormacionProfesionalComponent);
exports.FormacionProfesionalComponent = FormacionProfesionalComponent;
