"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaComponent = void 0;
const core_1 = require("@angular/core");
let ConsultaComponent = class ConsultaComponent {
    constructor(consultaService, router) {
        this.consultaService = consultaService;
        this.router = router;
        this.centrosSalud = [];
        this.formacionProfesional = [];
        this.medico = [];
        this.paciente = [];
        this.afecciones = [];
        this.consultasMedico = [];
        this.consultasPaciente = [];
        this.afeccion = [];
        this.consultaFin = [];
        this.mostrarErrorFP = false;
        this.mostrarErrorMedico = false;
        this.mostrarErrorConsultasMedico = false;
        this.mostrarErrorPaciente = false;
        this.mostrarErrorConsultasPaciente = false;
        this.asociaAfeccion = false;
        this.consultaCreada = false;
        this.consulta = {
            fechaHora: new Date(),
            motivo: '',
            paciente: { _id: '' },
            medico: { _id: '' },
            centroSalud: { _id: '' }
        };
    }
    ngOnInit() {
        this.buscarCentroSalud();
        console.log(this.centroSaludSelec);
    }
    buscarCentroSalud() {
        this.consultaService.getCentroSalud().subscribe(data => {
            this.centrosSalud = data;
            console.log("centros", this.centrosSalud);
        });
    }
    //   buscarProfesional(tipoMatricula:any, nroMatricula:any){
    //     console.log(tipoMatricula,nroMatricula);
    //     this.consultaService.getProfesional(tipoMatricula,nroMatricula).subscribe(data => { 
    //       console.log("data",data)
    //       this.formacionProfesional = data;
    //       if(this.formacionProfesional.length==0){
    //         this.mostrarErrorFP = true;
    //       }
    //       else{
    //         this.mostrarErrorFP = false;
    //         const idFormacion = this.formacionProfesional[0]._id;
    //         this.buscarMedicoConFP(idFormacion);
    //       }
    //   });
    //  }
    //  buscarMedicoConFP(idFormacion:any){
    //   this.consultaService.getMedicoConFP(idFormacion).subscribe(data => { 
    //     this.medico = data;
    //     console.log("medico",this.medico);
    //     if(this.medico.length==0){
    //       this.mostrarErrorMedico = true;
    //     }
    //     else{
    //       this.nombreMedico=this.medico[0].nombre +','+this.medico[0].apellido;
    //       this.mostrarErrorMedico = false;
    //     }
    // });
    // }
    buscarConsultasMedico(idMedico, fechaDesde) {
        //const idMedico = this.medico[0]._id;
        this.consulta.medico._id = idMedico;
        this.consultaService.getConsultasMedico(idMedico, fechaDesde).subscribe(data => {
            this.consultasMedico = data;
            console.log("consultasMedico", this.consultasMedico);
            if (!Array.isArray(this.consultasMedico)) {
                this.mostrarErrorConsultasMedico = true;
            }
            else {
                this.mostrarErrorConsultasMedico = false;
            }
        });
    }
    buscarPaciente(nroDni, tipoDni) {
        console.log(nroDni, tipoDni);
        this.consultaService.getPaciente(nroDni, tipoDni).subscribe(data => {
            this.paciente = data;
            if (this.paciente.length == 0) {
                //CREO PACIENTE
                this.mostrarErrorPaciente = true;
            }
            else {
                //muestro info del paciente
                this.nombrePaciente = this.paciente[0].nombre + ',' + this.paciente[0].apellido;
                const idPaciente = this.paciente[0]._id;
                this.buscarConsultasPaciente(idPaciente, this.fechaDesdeMedico);
                this.mostrarErrorPaciente = false;
                // const idFormacion = this.formacionProfesional[0]._id;
                // this.buscarMedicoConFP(idFormacion);
            }
        });
    }
    buscarConsultasPaciente(idPaciente, fechaDesde) {
        console.log(idPaciente, fechaDesde);
        this.consultaService.getConsultasPaciente(idPaciente, fechaDesde).subscribe(data => {
            this.consultasPaciente = data;
            console.log("consultasPaciente", this.consultasPaciente);
            if (!Array.isArray(this.consultasPaciente)) {
                this.mostrarErrorConsultasPaciente = true;
            }
            else {
                this.mostrarErrorConsultasPaciente = false;
            }
        });
    }
    asociarAfeccion() {
        //  this.asociaAfeccion.
        console.log("event", this.asociaAfeccion);
        if (!this.asociaAfeccion) {
            console.log("busca afecciones");
            this.buscarAfecciones();
        }
        else {
            console.log("no va a buscar ni mierda");
        }
    }
    buscarAfecciones() {
        this.consultaService.getAfecciones().subscribe(data => {
            this.afecciones = data;
            console.log("afecciones", this.afecciones);
        });
    }
    changeValueCentroSalud(event) {
        const value = event.target.value;
        this.centroSaludSelec = value;
    }
    changeValueAfeccion(event) {
        const value = event.target.value;
        this.afeccionSelec = value;
        console.log(this.afeccionSelec);
    }
    crearConsulta(consulta) {
        this.consultaService.postConsulta(consulta).subscribe(data => {
            let idConsulta = data.data.datosConsulta._id;
            if (this.asociaAfeccion) {
                console.log("quiero asociar");
                this.agregarConsultaAafeccion(idConsulta, this.afeccionSelec);
            }
            this.consultaCreada = true;
            alert('CONSULTA CREADA');
            this.router.navigate(['/']);
        });
    }
    agregarConsultaAafeccion(idConsulta, idAfeccion) {
        let body = {
            "_idConsulta": idConsulta
        };
        this.consultaService.putAfeccion(idAfeccion, body).subscribe(data => {
            console.log("afeccion modificada", data);
        });
    }
    save() {
        console.log("crear consulta");
        if (this.consulta.motivo == '') {
            alert('FALTA EL MOTIVO DE LA CONSULTA');
        }
        else {
            this.consulta.paciente._id = this.paciente[0]._id;
            //  this.consulta.medico._id=this.medico[0]._id;
            this.consulta.fechaHora = this.fechaDesdeMedico;
            console.log("consulta", this.consulta);
            this.crearConsulta(this.consulta);
        }
    }
    ;
    crearPaciente() {
        this.router.navigate(['/alta-pacienteHC']);
    }
};
ConsultaComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-consulta',
        templateUrl: './Alta-consulta.component.html',
        styleUrls: ['./consulta.component.css']
    })
], ConsultaComponent);
exports.ConsultaComponent = ConsultaComponent;
