"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TratamientoService = void 0;
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
let TratamientoService = class TratamientoService {
    constructor(http) {
        this.http = http;
        //selectedTratamiento: Tratamiento;
        this.afeccion = [];
        this.tratamientos = [];
        this.URL_API = "http://localhost:4000/alta-tratamiento";
        // readonly URL_API = "http://localhost:4000/alta-tratamiento/formacion-profesional/Medica/TU260255"
        this.URI = 'http://localhost:4000/consultaMedicaciones';
        this.URL = 'http://localhost:4000/consulta-tratamientos';
        this.URIB = 'http://localhost:4000/alta-consulta';
        // this.infoAfeccion;
    }
    //para agregar tratamientos
    postTratamiento(elTratamiento) {
        return this.http.post(this.URL_API, elTratamiento);
    }
    getMedico(idFormacion) {
        //return this.http.get<Tratamiento[]>(this.URL_API); //.subscribe()?
        return this.http.get(this.URL_API + '/medico/:idFormacion').pipe((0, operators_1.map)((data) => {
            return data;
        }), (0, operators_1.catchError)((err, caught) => {
            console.error(err);
            throw err;
        }));
    }
    getPaciente(nroDoc, tipoDoc) {
        return this.http.get(this.URL_API + '/paciente/' + nroDoc + '/' + tipoDoc).pipe((0, operators_1.map)((data) => {
            console.log("el paciente es", data);
            return data;
        }));
    }
    getPacienteConsulta(nroDoc, tipoDoc) {
        return this.http.get(this.URL + '/paciente/' + nroDoc + '/' + tipoDoc).pipe((0, operators_1.map)((data) => {
            console.log("el paciente es", data);
            return data;
        }));
    }
    getHCPaciente(idPaciente) {
        //return this.http.put(this.URL_API + `/${elTratamiento._id}`, elTratamiento);
        return this.http.get(this.URL_API + '/historia-clinica/paciente/' + idPaciente).pipe((0, operators_1.map)((data) => {
            console.log("La DATA en getHCPAciente tiene: ", data);
            console.log("A VERRRR la HistoriaClinica del PACIENTE tiene:", data[0]); //hc es un arreglo(no deberia) entonces me traigo el 1er elem del aregglo de hc, que es una hc
            console.log("A VER el id de la HC del paciente", data[0]._id);
            this.historiaClinica = data[0];
            return this.historiaClinica; //aca devuelvo la historia clinica
        }), (0, operators_1.catchError)((err, caught) => {
            console.error(err);
            throw err;
        }));
    }
    getHCPacienteConsulta(idPaciente) {
        //return this.http.put(this.URL_API + `/${elTratamiento._id}`, elTratamiento);
        return this.http.get(this.URL + '/historia-clinica/paciente/' + idPaciente).pipe((0, operators_1.map)((data) => {
            console.log("La DATA en getHCPAciente tiene: ", data);
            console.log("A VERRRR la HistoriaClinica del PACIENTE tiene:", data[0]); //hc es un arreglo(no deberia) entonces me traigo el 1er elem del aregglo de hc, que es una hc
            console.log("A VER el id de la HC del paciente", data[0]._id);
            this.historiaClinica = data[0];
            return this.historiaClinica; //aca devuelvo la historia clinica
        }), (0, operators_1.catchError)((err, caught) => {
            console.error(err);
            throw err;
        }));
    }
    getAfeccionDeHCPaciente(idPaciente) {
        return this.http.get(this.URL_API + '/historia-clinica/paciente/' + idPaciente).pipe((0, operators_1.map)((data) => {
            //   console.log("LA DATA de getAfecciondeHCPaciente : ",data);
            this.afeccion[0] = data[0].afeccion; //me traigo el id de la afeccion de la hc del paciente
            this.historiaClinica = data[0];
            return this.historiaClinica; //aca devuelvo la historia clinica
        }), (0, operators_1.catchError)((err, caught) => {
            console.error(err);
            throw err;
        }));
    }
    getInfoAfecciones(idAfeccion) {
        console.log("entro a getinfoafecciones con ", idAfeccion);
        return this.http.get(this.URL_API + '/historia-clinica/' + idAfeccion).pipe((0, operators_1.map)((data) => {
            console.log("eldato desde service de afecciones es de tipo:", typeof data);
            return data;
        }), (0, operators_1.catchError)((err, caught) => {
            console.log("ERROOOOR");
            console.error(err);
            throw err;
        }));
    }
    getInfoAfeccionesConsulta(idAfeccion) {
        console.log("entro a getinfoafecciones con ", idAfeccion);
        return this.http.get(this.URL + '/historia-clinica/' + idAfeccion).pipe((0, operators_1.map)((data) => {
            // console.log("eldato desde service de afecciones es de tipo:", typeof data)
            return data;
        }), (0, operators_1.catchError)((err, caught) => {
            console.log("ERROOOOR");
            console.error(err);
            throw err;
        }));
    }
    getInfoLaAfeccion(idUnaAfeccion) {
        console.log("entro a get info de LA afeccion ");
        return this.http.get(this.URL_API + '/afeccion/' + idUnaAfeccion).pipe((0, operators_1.map)((data) => {
            //  console.log("eldato desde service de afecciones de hc:", data)
            // const nombreAfeccion: any=data.nom
            this.infoAfeccion = data;
            const nombreAfeccion = this.infoAfeccion.nom;
            // console.log(" el nombre de la afeccion en el documento de infoAfeccion es ",nombreAfeccion)
            return nombreAfeccion;
        }), (0, operators_1.catchError)((err, caught) => {
            console.log("ERROOOOR");
            console.error(err);
            throw err;
        }));
    }
    getInfoLaAfeccionConsulta(idUnaAfeccion) {
        console.log("entro a get info de LA afeccion ");
        return this.http.get(this.URL + '/afeccion/' + idUnaAfeccion).pipe((0, operators_1.map)((data) => {
            //  console.log("eldato desde service de afecciones de hc:", data)
            // const nombreAfeccion: any=data.nom
            this.infoAfeccionConsulta = data;
            console.log("La info de afeccion de la consulta es ", this.infoAfeccionConsulta);
            /*guardamos datos que se quieren mostrar en la consulta */
            this.sintomasAfeccion = this.infoAfeccionConsulta.sintomas;
            this.tratamientoAfeccion = this.infoAfeccionConsulta.tratamiento;
            const nombreAfeccion = this.infoAfeccionConsulta.nom;
            // console.log(" el nombre de la afeccion en el documento de infoAfeccion es ",nombreAfeccion)
            return nombreAfeccion;
        }), (0, operators_1.catchError)((err, caught) => {
            console.log("ERROOOOR");
            console.error(err);
            throw err;
        }));
    }
    getDiagnostico() {
        //return this.http.put(this.URL_API + `/${elTratamiento._id}`, elTratamiento);
        console.log("EN EL SERVICE el id del diagnostico es ", this.infoAfeccion.diag);
        console.log("El tipo del id es ", typeof this.infoAfeccion.diag._id);
        return this.http.get(this.URL_API + '/diagnostico/' + this.infoAfeccion.diag._id).pipe((0, operators_1.map)((data) => {
            console.log("El dato que trae de diagnostico es ", data);
            return data;
        }), (0, operators_1.catchError)((err, caught) => {
            console.error(err);
            throw err;
        }));
        /* const diagnosticoAfeccion: any=this.infoAfeccion.diag
         console.log("el diagnostico es ",diagnosticoAfeccion)
         return diagnosticoAfeccion;*/
    }
    getDiagnosticoConsulta() {
        //return this.http.put(this.URL_API + `/${elTratamiento._id}`, elTratamiento);
        console.log("EN EL SERVICE el id del diagnostico es ", this.infoAfeccionConsulta.diag);
        console.log("El tipo del id es ", typeof this.infoAfeccionConsulta.diag._id);
        return this.http.get(this.URL + '/diagnostico/' + this.infoAfeccionConsulta.diag._id).pipe((0, operators_1.map)((data) => {
            console.log("El dato que trae de diagnostico es ", data);
            return data;
        }), (0, operators_1.catchError)((err, caught) => {
            console.error(err);
            throw err;
        }));
    }
    getDatosTratamiento() {
        console.log("por parametro el tratamiento que busco tiene el id: ", this.infoAfeccionConsulta.tratamiento[0]._id);
        return this.http.get(this.URL + '/tratamiento/' + this.infoAfeccionConsulta.tratamiento[0]._id).pipe((0, operators_1.map)((data) => {
            console.log("El dato que trae de tratamiento es ", data);
            return data;
        }), (0, operators_1.catchError)((err, caught) => {
            console.error(err);
            throw err;
        }));
    }
    getMedicacion(nombre) {
        console.log("EN EL SERVICE el nombre de la medicacion es ", nombre);
        return this.http.get(this.URL_API + '/medicacion/' + nombre).pipe((0, operators_1.map)((data) => {
            console.log("El dato que trae de MEDICACION es ", data);
            return data;
        }), (0, operators_1.catchError)((err, caught) => {
            console.error(err);
            throw err;
        }));
    }
    crearTratamiento(elTratamiento) {
        console.log("el tratamiento que entra es ", elTratamiento);
        return this.http.post(this.URL_API + '/tratamiento', elTratamiento);
    }
    putAfeccion(idAfeccion, tratamiento) {
        return this.http.put(this.URL_API + '/afeccion/' + idAfeccion, tratamiento);
    }
    getTratamientosxMedico(idMedico, fechaDesde, fechaHasta) {
        console.log(this.URI + '/tratamiento/' + idMedico + '?fechaDesde=' + fechaDesde + '&fechaHasta=' + fechaHasta);
        return this.http.get(this.URI + '/tratamiento/' + idMedico + '?fechaDesde=' + fechaDesde + '&fechaHasta=' + fechaHasta).pipe((0, operators_1.map)((data) => {
            console.log("tratamiento", data);
            return data;
        }), (0, operators_1.catchError)(this.handleError('getTratamientosxMedico', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            return (0, rxjs_1.of)(result);
        };
    }
    /* form profesional */
    getProfesional(tipoMatricula, nroMatricula) {
        console.log(this.URIB + '/formacion-profesional/' + tipoMatricula + '/' + nroMatricula);
        return this.http.get(this.URI + '/formacion-profesional/' + tipoMatricula + '/' + nroMatricula).pipe((0, operators_1.map)((data) => {
            console.log("ddd", data);
            return data;
        }), (0, operators_1.catchError)(this.handleError('getProfesional', [])));
    }
    getMedicoConFP(idFormacion) {
        console.log(this.URIB + '/medico/' + idFormacion);
        return this.http.get(this.URI + '/medico/' + idFormacion).pipe((0, operators_1.map)((data) => {
            console.log("medico", data);
            return data;
        }), (0, operators_1.catchError)(this.handleError('getMedicoConFP', [])));
    }
};
TratamientoService = __decorate([
    (0, core_1.Injectable)({
        providedIn: "root",
    })
], TratamientoService);
exports.TratamientoService = TratamientoService;
