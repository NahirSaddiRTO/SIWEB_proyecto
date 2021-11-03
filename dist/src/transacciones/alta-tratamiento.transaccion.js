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
const formProfesionalRoutes = __importStar(require("../routes/formacionProfesional"));
const tratamientoRoutes = __importStar(require("../routes/tratamiento"));
const medicoRoutes = __importStar(require("../routes/medico"));
const pacienteRoutes = __importStar(require("../routes/paciente"));
const historiaClinicaRoutes = __importStar(require("../routes/historiaClinica"));
const afeccionRoutes = __importStar(require("../routes/afeccion"));
const medicacionRoutes = __importStar(require("../routes/medicacion"));
class AltaTratamiento {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        //OBTENER FORMACION PROFESIONAL POR NRO Y TIPO DE MATRICULA 
        this.router.get('/formacion-profesional/:tipo/:nro', formProfesionalRoutes.obtenerFormacionProfesional); //
        //OBTENER MÉDICO DE ESTA FORMACION (MATRICULA) Y ESPECIALIDAD
        this.router.get('/medico/:idFormacion', medicoRoutes.obtenerMedicoxFormacion); ///
        //OBTENER PACIENTE POR DATOS BASICOS: tipoDNI - nroDNI
        this.router.get('/paciente/:nroDoc/:tipoDoc', pacienteRoutes.obtenerPacientesxDNI); //////////
        //OBTENER HISTORIA CLINICA DE PACIENTE CON DATOS BASICOS: tipoDNI - nroDNI ---> usamos id en realidad
        this.router.get('/historia-clinica/paciente/:idPaciente', historiaClinicaRoutes.obtenerHistoriaClinica); ///////
        //OBTENER AFECCIONES DE LA HISTORIA CLINICA
        this.router.get('/historia-clinica/:idHC', historiaClinicaRoutes.obtenerAfeccion); //////////////////////
        //OBTENER DIAGNOSTICO tipo atributo: DEFINITIVO DE AFECCION
        this.router.get('/afeccion/:idAfeccion', afeccionRoutes.obtenerDiagnostico);
        //OBTENER TIPOS ---> NO, se va a hacer del lado del cliente
        //VERIFICAR MEDICACION ingresada por el CLIENTE
        this.router.get('/medicacion/:nombre', medicacionRoutes.obtenerMedicacionxNombre);
        //REGISTRAR TRATAMIENTO
        this.router.post('/tratamiento', tratamientoRoutes.registrarTratamiento);
        // ASOCIO TRATAMIENTO A LA AFECCION CORRESPONDIENTE
        this.router.put('/afeccion/:idAfeccion', afeccionRoutes.agregaTratamientoAAfeccion);
    }
}
const altaTratamiento = new AltaTratamiento();
exports.default = altaTratamiento.router;
