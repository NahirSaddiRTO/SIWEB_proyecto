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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const centroSaludRoutes = __importStar(require("../routes/centroSalud"));
const formProfesionalRoutes = __importStar(require("../routes/formacionProfesional"));
const medicoRoutes = __importStar(require("../routes/medico"));
const consultaRoutes = __importStar(require("../routes/consulta"));
const pacienteRoutes = __importStar(require("../routes/paciente"));
const afeccionRoutes = __importStar(require("../routes/afeccion"));
class AltaConsulta {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        //OBTENER CENTROS DE SALUD
        this.router.get('/centro-salud', centroSaludRoutes.obtenerCentrosSalud);
        //OBTENER FORMACION PROFESIONAL POR NRO Y TIPO DE MATRICULA
        this.router.get('/formacion-profesional/:tipo/:nro', formProfesionalRoutes.obtenerFormacionProfesional);
        //OBTENER MÉDICO CON ESA FORMACION PROFESIONAL
        this.router.get('/medico/:idFormacion', medicoRoutes.obtenerMedicoxFormacion);
        //OBTENER CONSULTAS DE ESE MEDICO EN UNA FECHA
        this.router.get('/consulta/medico/:idMedico?', consultaRoutes.obtenerConsultasMedico);
        //OBTENER PACIENTE
        this.router.get('/paciente/:tipoDoc/:nroDoc', pacienteRoutes.obtenerPacientesxDNI);
        //DAR ALTA PACIENTE CON HC
        //OBTENER CONSULTAS DEL PACIENTE EN UNA FECHA
        this.router.get('/consulta/paciente/:idPaciente?', consultaRoutes.obtenerConsultasPaciente);
        //OBTENER AFECCIONES
        this.router.get('/afecciones', afeccionRoutes.obtenerAfecciones);
        //REGISTRAR CONSULTA
        this.router.post('/consulta', consultaRoutes.registrarConsulta);
        // ASOCIO CONSULTA A LA AFECCION SELECCIONADA
        this.router.put('/afeccion/:idAfeccion', afeccionRoutes.agregaConsultaAAfeccion);
    }
}
const altaConsulta = new AltaConsulta();
exports.default = altaConsulta.router;
