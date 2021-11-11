"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaTratamientoComponent = void 0;
const core_1 = require("@angular/core");
const enumerados_1 = require("src/app/interfaces/enumerados");
const enumerados = __importStar(require("../../interfaces/enumerados"));
let ConsultaTratamientoComponent = class ConsultaTratamientoComponent {
    constructor(tratamientoService, calendar, router) {
        this.tratamientoService = tratamientoService;
        this.calendar = calendar;
        this.router = router;
        this.altaTratamientoExitosa = false;
        // Formacion Profesional
        this.formacionProfesional = [];
        this.formProf = {
            nroMatricula: '',
            tipoMatricula: '',
            fechaTitulo: new Date(),
            especialidad: '',
        };
        this.medicacion = {
            nombre: '',
            proposito: '',
            dosis: '',
        };
        this.medicos = [];
        this.medico = {
            _id: '',
            nombre: '',
            apellido: '',
            calle: '',
            altura: 0,
            piso: 0,
            tipoDni: enumerados_1.Identificacion.LE,
            nroDocumento: '',
            telefono: [0],
            formacionProfesional: '',
            sexo: enumerados_1.Sexo.otro,
        };
        this.pacientes = [];
        this.paciente = {
            nrodocumento: '',
            tipodni: '',
            nombre: '',
            apellido: '',
            piso: 0,
            calle: '',
            altura: 0,
            fechanacimiento: Date,
            estado: '',
            telefono_pac: [0],
            sexo: '',
        };
        this.pacienteConsulta = {
            nrodocumento: '',
            tipodni: '',
            nombre: '',
            apellido: '',
            piso: 0,
            calle: '',
            altura: 0,
            fechanacimiento: Date,
            estado: '',
            telefono_pac: [0],
            sexo: '',
        };
        this.historiasClinicas = [];
        this.afeccionesHc = [];
        this.hc = {
            _id: '',
            legajo: '',
            afeccion: {
                id: '',
            },
            medicacion: {
                id: '',
            },
            paciente: {
                id: '',
            },
        };
        this.idPaciente = '';
        this.idPacienteConsulta = '';
        this.diagnosticos = [];
        this.hayDiagnostico = false;
        this.buscarDiagnostico = false;
        this.medicaciones = [];
        // medicacion!: IMedicacion;
        this.medicacionValida = false;
        // Afecciones
        this.afecciones = [];
        this.nomUnaAfeccion = '';
        this.nomUnaAfeccionConsulta = '';
        this.encontroPacienteConsulta = false;
        this.encontroPaciente = false;
        this.hayAfeccion = false;
        this.tratamiento = {
            //_id: '',
            descripcion: '',
            duracion_en_dias: 0,
            tipo: '',
            fecha: new Date(),
            Medico: { id: '' },
            Medicacion: [{ id: '' }], //[{ id: '' }],
        };
        this.tipoSeleccionado = false;
        this.descripcionLista = false;
        this.hayCantDias = false;
        this.hayFecha = false;
        this.hayAfeccionConsulta = false;
        this.consultaTratamientoOn = false;
        this.hayDiagnosticoConsulta = false;
        this.formacionProfesionalBusqueda = [];
        this.medicoBusqueda = {
            _id: '',
            nombre: '',
            apellido: '',
            calle: '',
            altura: 0,
            piso: 0,
            tipoDni: enumerados_1.Identificacion.LE,
            nroDocumento: '',
            telefono: [0],
            formacionProfesional: '',
            sexo: enumerados_1.Sexo.otro,
        };
        this.mostrarErrorFP = false;
        this.mostrarErrorMedico = false;
        this.division;
    }
    seleccionaTipo(elTipo) {
        this.tratamiento.tipo = elTipo;
        this.tipoSeleccionado = true;
    }
    descripcionTratamiento(laDescripcion) {
        this.tratamiento.descripcion = laDescripcion;
        this.descripcionLista = true;
    }
    diasTratamiento(cant) {
        this.tratamiento.duracion_en_dias = cant;
        this.hayCantDias = true;
    }
    dateTratamiento(laFecha) {
        this.tratamiento.fecha = laFecha;
        this.hayFecha = true;
    }
    ngOnInit() {
        this.paciente.sexo = enumerados.getObjSexos();
        this.paciente.tipoDni = enumerados.getTipoIdentificacion();
        this.paciente.estado = enumerados.getEstadoCivil();
    }
    /*FORMACION PROF*/
    buscarProfesional(tipoMatricula, nroMatricula) {
        console.log(tipoMatricula, nroMatricula);
        this.tratamientoService.getProfesional(tipoMatricula, nroMatricula).subscribe(data => {
            console.log("data de formacion profesional es", data);
            this.formacionProfesionalBusqueda = data;
            if (this.formacionProfesionalBusqueda.length == 0) {
                this.mostrarErrorFP = true;
            }
            else {
                this.mostrarErrorFP = false;
                const idFormacion = this.formacionProfesionalBusqueda[0]._id;
                this.buscarMedicoConFP(idFormacion);
            }
        });
    }
    buscarMedicoConFP(idFormacion) {
        this.tratamientoService.getMedicoConFP(idFormacion).subscribe(data => {
            this.medicoBusqueda = data;
            console.log("el medico es ", this.medicoBusqueda);
            console.log("el medico es de type ", typeof this.medicoBusqueda);
            if (this.medicoBusqueda.length == 0) {
                this.mostrarErrorMedico = true;
            }
            else {
                this.nombreMedico = this.medicoBusqueda[0].nombre + ',' + this.medicoBusqueda[0].apellido;
                this.tratamiento.Medico = this.medicoBusqueda[0];
                console.log("el medico para tratamiento quedo en ", this.tratamiento.Medico);
                this.idMedicoBusqueda = this.tratamiento.Medico.id;
                //this.tratamiento.Medico=this.tratamiento.Medico.id;
                console.log("el id del medico para tratamiento quedo en ", typeof this.tratamiento.Medico); //this.idMedicoBusqueda)
                //this.tratamiento.medico=this.idMedicoBusqueda
                this.mostrarErrorMedico = false;
            }
        });
    }
    /* FORMACION PROF */
    //esto es para el calendario
    selectToday() {
        this.model = this.calendar.getToday();
    }
    buscarDiagnosticoOn() {
        this.buscarDiagnostico = true;
    }
    getPaciente(nrodocumento, tipodni) {
        console.log(nrodocumento, tipodni);
        this.tratamientoService
            .getPaciente(nrodocumento, tipodni)
            .subscribe((data) => {
            this.paciente = data;
            if (this.pacientes != null) {
                this.encontroPaciente = true;
                console.log('el paciente tiene esta info ', this.paciente[0]);
                // this.nombrePaciente=this.paciente[0].nombre +','+this.paciente[0].apellido;
                this.idPaciente = this.paciente[0]._id;
            }
        });
    }
    getPacienteConsulta(nrodocumento, tipodni) {
        console.log(nrodocumento, tipodni);
        this.tratamientoService
            .getPacienteConsulta(nrodocumento, tipodni)
            .subscribe((data) => {
            this.pacienteConsulta = data;
            if (this.pacienteConsulta != null) {
                this.encontroPacienteConsulta = true;
                console.log('el paciente CONSULTA tiene esta info ', this.pacienteConsulta[0]);
                // this.nombrePaciente=this.paciente[0].nombre +','+this.paciente[0].apellido;
                this.idPacienteConsulta = this.pacienteConsulta[0]._id;
            }
        });
    }
    getAfeccionesConsulta() {
        console.log('el id del paciente es ', this.idPacienteConsulta);
        console.log("a ver ", this.pacienteConsulta[0]._id);
        this.tratamientoService
            .getHCPacienteConsulta(this.pacienteConsulta[0]._id) //obtengo la HC del paciente, le mando el objeto paciente con el id
            .subscribe((res) => {
            console.log('El ID de la HC del Paciente en res es: ', res._id);
            console.log("La HC del Paciente es: ", res);
            this.getAfeccionesDeHCConsulta(res._id);
        }, (err) => console.error(err));
    }
    getAfeccionesDeHCConsulta(idAfeccion) {
        //capaz deberia ser any y no que entre un string porque no puedo sacar los atributos de un string sino de un object xd
        console.log('entro a con un tipo', typeof idAfeccion);
        console.log('entro a con afeccion con id ', idAfeccion);
        this.tratamientoService.getInfoAfecciones(idAfeccion).subscribe((data) => {
            this.afecciones = data;
            console.log('El resultado afecciones ES: ', this.afecciones);
            this.getLaAfeccionConsulta(this.afecciones);
            this.hayAfeccionConsulta = true;
            console.log(this.hayAfeccionConsulta);
        }, (err) => console.error(err));
    }
    getLaAfeccionConsulta(unaAfeccion) {
        console.log("Entro a getLaAfeccionConsulta para traer DATO DE LA AFECCION con ", unaAfeccion);
        this.tratamientoService.getInfoLaAfeccionConsulta(unaAfeccion).subscribe((data) => {
            console.log('El resultado final de DATOS de 1 AFECCION: ', data);
            const nombre = data;
            this.nomUnaAfeccionConsulta = nombre;
            console.log('El resultado final de DATOS entrando al arreglo de AFECCION ES: ', this.nomUnaAfeccionConsulta);
        }, (err) => console.error(err));
    }
    getAfecciones() {
        console.log('el id del paciente es ', this.idPaciente);
        this.tratamientoService
            .getHCPaciente(this.paciente[0]._id) //obtengo la HC del paciente, le mando el objeto paciente con el id
            .subscribe((res) => {
            console.log('El ID de la HC del Paciente en res es: ', res._id);
            console.log("La HC del Paciente es: ", res);
            //las siguientes dos lineas CREO que no las necesito
            this.getAfeccionesDeHC(res._id);
        }, (err) => console.error(err));
    }
    getAfeccionesDeHC(idAfeccion) {
        //capaz deberia ser any y no que entre un string porque no puedo sacar los atributos de un string sino de un object xd
        console.log('entro a con un tipo', typeof idAfeccion);
        console.log('entro a con afeccion con id ', idAfeccion);
        this.tratamientoService.getInfoAfecciones(idAfeccion).subscribe((data) => {
            this.afecciones = data;
            console.log('El resultado afecciones ES: ', this.afecciones);
            this.getLaAfeccion(this.afecciones);
            this.hayAfeccion = true;
            console.log(this.hayAfeccion);
        }, (err) => console.error(err));
    }
    getLaAfeccion(unaAfeccion) {
        console.log("Entro a getLaAfeccion para traer DATO DE LA AFECCION con ", unaAfeccion);
        this.tratamientoService.getInfoLaAfeccion(unaAfeccion).subscribe((data) => {
            console.log('El resultado final de DATOS de 1 AFECCION: ', data);
            const nombre = data;
            this.nomUnaAfeccion = nombre;
            console.log('El resultado final de DATOS entrando al arreglo de AFECCION ES: ', this.nomUnaAfeccion);
        }, (err) => console.error(err));
    }
    obtenerDiagnostico() {
        //.getDiagnostico(this.afecciones)
        this.tratamientoService.getDiagnostico()
            .subscribe((res) => {
            console.log("la data del diagnostico es ", res);
            this.diagnostico = res;
            if (this.diagnostico != 'No existe diagnostico definitivo para esta afeccion') {
                this.hayDiagnostico = true;
            }
        }, (err) => console.error(err));
    }
    obtenerDiagnosticoConsulta() {
        //.getDiagnostico(this.afecciones)
        this.tratamientoService.getDiagnosticoConsulta()
            .subscribe((res) => {
            console.log("la data del diagnostico es ", res);
            this.diagnosticoConsulta = res;
            if (this.diagnostico != 'No existe diagnostico definitivo para esta afeccion') {
                this.hayDiagnosticoConsulta = true;
            }
        }, (err) => console.error(err));
    }
    obtenerDatosTratamiento() {
        this.tratamientoService.getDatosTratamiento()
            .subscribe((res) => {
            console.log("la data del diagnostico es ", res);
            this.datosTratamiento = res;
            if (this.datosTratamiento != null) {
                this.tratamiento.tipo = this.datosTratamiento.tipo;
                this.tratamiento.duracion_en_dias = this.datosTratamiento.duracion_en_dias;
                this.tratamiento.descripcion = this.datosTratamiento.descripcion;
                this.tratamiento.fecha = this.datosTratamiento.fecha;
                this.consultaTratamientoOn = true;
            }
        }, (err) => console.error(err));
    }
    verificarMedicacion(medicacion) {
        console.log(medicacion);
        this.tratamientoService.getMedicacion(medicacion).subscribe((data) => {
            console.log("LA BENDITA MEDICACION ", data);
            this.paciente = data;
            if (this.pacientes != null) {
                console.log('la medicación tiene esta info ', data);
                this.tratamiento.Medicacion = data.medicacion;
                console.log('la medicación del tratamiento tiene esta info ', this.tratamiento.Medicacion);
                this.medicacionValida = true;
            }
        });
    }
    guardarTratamiento() {
        this.altaTratamientoExitosa = true;
        console.log("crear tratamiento");
        console.log("el tratamiento es ", this.tratamiento);
        this.tratamientoService.crearTratamiento(this.tratamiento).subscribe((data) => {
            let idTratamiento = data.data.datosTratamiento;
            console.log("despues de que le hice post a tratamiento ", data);
            console.log("a ver que me da por idTratamiento ", idTratamiento);
            this.agregarTratamientoAfeccion(idTratamiento, this.afecciones);
            this.router.navigate(['/']);
        });
    }
    ;
    agregarTratamientoAfeccion(idTratamiento, idAfeccion) {
        let body = {
            "_idTratamiento": idTratamiento
        };
        this.tratamientoService.putAfeccion(idAfeccion, body).subscribe(data => {
            console.log("afeccion modificada", data);
        });
    }
};
ConsultaTratamientoComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-consulta-tratamiento',
        templateUrl: './consulta-tratamiento.component.html',
        styleUrls: ['./consulta-tratamiento.component.css'],
    })
], ConsultaTratamientoComponent);
exports.ConsultaTratamientoComponent = ConsultaTratamientoComponent;
