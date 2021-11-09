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
const medicoRoutes = __importStar(require("../routes/medico"));
const tratamientoRoutes = __importStar(require("../routes/tratamiento"));
const medicacionRoutes = __importStar(require("../routes/medicacion"));
class ConsultaMedicaciones {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        //OBTENER FORMACION PROFESIONAL POR NRO Y TIPO DE MATRICULA
        this.router.get('/formacion-profesional/:tipo/:nro', formProfesionalRoutes.obtenerFormacionProfesional);
        //OBTENER MÉDICO DE ESTA MATRICULA Y ESPECIALIDAD
        this.router.get('/medico/:idFormacion', medicoRoutes.obtenerMedicoxFormacion);
        //OBTENER TRATAMIENTOS EN RANGO FECHAS, CON MEDICO INGRESADO
        this.router.get('/tratamiento/:idMedico?', tratamientoRoutes.obtenerTratamientosxMedico);
        //OBTENER MEDICACIONES DE ESOS TRATAMIENTO
        this.router.get('/medicaciones/:idMedicacion?', medicacionRoutes.obtenerMedicacionxID);
    }
}
const consultaMedicaciones = new ConsultaMedicaciones();
exports.default = consultaMedicaciones.router;
