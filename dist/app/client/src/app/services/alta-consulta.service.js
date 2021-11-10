"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let ConsultaService = class ConsultaService {
    constructor(http) {
        this.http = http;
        this.URI = 'http://localhost:4000/alta-consulta';
        this.URI_HC = 'http://localhost:4000/alta-paciente-hc';
        this.URI_CM = 'http://localhost:4000/consultaMedicaciones';
    }
    getCentroSalud() {
        return this.http.get(this.URI + '/centro-salud').pipe(operators_1.map((data) => {
            return data;
        }), operators_1.catchError((err, caught) => {
            console.error(err);
            throw err;
        }));
    }
    getProfesional(tipoMatricula, nroMatricula) {
        console.log(this.URI + '/formacion-profesional/' + tipoMatricula + '/' + nroMatricula);
        return this.http.get(this.URI + '/formacion-profesional/' + tipoMatricula + '/' + nroMatricula).pipe(operators_1.map((data) => {
            console.log("ddd", data);
            return data;
        }), operators_1.catchError(this.handleError('getProfesional', [])));
    }
    getMedicoConFP(idFormacion) {
        console.log(this.URI + '/medico/' + idFormacion);
        return this.http.get(this.URI + '/medico/' + idFormacion).pipe(operators_1.map((data) => {
            console.log("medico", data);
            return data;
        }), operators_1.catchError(this.handleError('getMedicoConFP', [])));
    }
    getConsultasMedico(idMedico, fechaDesde) {
        console.log(this.URI + '/medico/' + idMedico + '?fechaDesde=' + fechaDesde);
        return this.http.get(this.URI + '/consulta/medico/' + idMedico + '?fechaDesde=' + fechaDesde).pipe(operators_1.map((data) => {
            console.log("consulta", data);
            return data;
        }), operators_1.catchError(this.handleError('getConsultasMedico', [])));
    }
    getPaciente(nroDni, tipoDni) {
        console.log(this.URI + '/paciente/' + tipoDni + '/' + nroDni);
        return this.http.get(this.URI + '/paciente/' + tipoDni + '/' + nroDni).pipe(operators_1.map((data) => {
            console.log("paciente", data);
            return data;
        }), operators_1.catchError(this.handleError('getPaciente', [])));
    }
    getConsultasPaciente(idPaciente, fechaDesde) {
        console.log(this.URI + '/consulta/paciente/' + idPaciente + '?fechaDesde=' + fechaDesde);
        return this.http.get(this.URI + '/consulta/paciente/' + idPaciente + '?fechaDesde=' + fechaDesde).pipe(operators_1.map((data) => {
            console.log("consulta", data);
            return data;
        }), operators_1.catchError(this.handleError('getConsultasPaciente', [])));
    }
    getAfecciones() {
        return this.http.get(this.URI + '/afecciones').pipe(operators_1.map((data) => {
            return data;
        }), operators_1.catchError((err, caught) => {
            console.error(err);
            throw err;
        }));
    }
    postConsulta(consulta) {
        return this.http.post(this.URI + '/consulta', consulta);
    }
    putAfeccion(idAfeccion, body) {
        return this.http.put(this.URI + '/afeccion/' + idAfeccion, body);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            return rxjs_1.of(result);
        };
    }
    postPaciente(paciente) {
        return this.http.post(this.URI_HC + '/paciente', paciente);
    }
    postHC(body) {
        return this.http.post(this.URI_HC + '/historiaClinica', body);
    }
    getMedicaciones(idMedicacion) {
        console.log(this.URI_CM + '/medicaciones/' + idMedicacion);
        return this.http.get(this.URI_CM + '/medicaciones/' + idMedicacion).pipe(operators_1.map((data) => {
            console.log("IMedicaciones", data);
            return data;
        }), operators_1.catchError(this.handleError('getMedicaciones', [])));
    }
};
ConsultaService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], ConsultaService);
exports.ConsultaService = ConsultaService;
