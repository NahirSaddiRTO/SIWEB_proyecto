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
exports.PacienteComponent = void 0;
const core_1 = require("@angular/core");
const enumerados = __importStar(require("./../../interfaces/enumerados"));
let PacienteComponent = class PacienteComponent {
    constructor(consultaService, router) {
        this.consultaService = consultaService;
        this.router = router;
        this.sexos = [];
        this.tiposDni = [];
        this.estados = [];
        this.paciente = {
            nrodocumento: '',
            tipodni: '',
            nombre: '',
            apellido: '',
            piso: null,
            calle: null,
            altura: null,
            fechanacimiento: Date,
            estado: '',
            telefono_pac: [null],
            sexo: '',
        };
    }
    ngOnInit() {
        this.sexos = enumerados.getObjSexos();
        this.tiposDni = enumerados.getTipoIdentificacion();
        this.estados = enumerados.getEstadoCivil();
    }
    changeValueTipoDni(event) {
        const value = event.target.value;
        this.paciente.tipodni = value;
        console.log("tipo dni", this.paciente.tipodni);
    }
    changeValueEstados(event) {
        const value = event.target.value;
        this.paciente.estado = value;
        console.log("estado", this.paciente.estado);
    }
    changeValueSexo(event) {
        const value = event.target.value;
        this.paciente.sexo = value;
        console.log("sexo", this.paciente.sexo);
    }
    crearPaciente() {
        console.log("paciente", this.paciente);
        if (this.paciente.nrodocumento == '' || this.paciente.tipodni == ''
            || this.paciente.nombre == '' || this.paciente.apellido == '' ||
            this.paciente.fechanacimiento == '' || this.paciente.sexo == '') {
            alert('FALTAN DATOS');
        }
        else {
            this.consultaService.postPaciente(this.paciente).subscribe(data => {
                console.log("paciente creado", data);
                let bodyHC = {
                    "paciente": {
                        "_id": data.data.datosConsulta._id
                    }
                };
                this.consultaService.postHC(bodyHC).subscribe(dataHC => {
                    console.log("hc creada", dataHC);
                });
            });
            alert('PACIENTE CON HC CREADO');
            this.router.navigate(['/alta-consulta']);
        }
    }
};
PacienteComponent = __decorate([
    core_1.Component({
        selector: 'app-paciente',
        templateUrl: './Alta-pacienteHC.component.html',
        styleUrls: ['./paciente.component.css']
    })
], PacienteComponent);
exports.PacienteComponent = PacienteComponent;
