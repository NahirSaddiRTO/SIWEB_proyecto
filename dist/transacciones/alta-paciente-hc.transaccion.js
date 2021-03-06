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
const pacienteRoutes = __importStar(require("../routes/paciente"));
const historiaClinicaRoutes = __importStar(require("../routes/historiaClinica"));
/*ESTA TRANSACCIÓN SE LLAMA EN ALTA-CONSULTA*/
class AltaPacienteHC {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        //REGISTRAR PACIENTE
        this.router.post('/paciente/?', pacienteRoutes.registrarPaciente);
        //REGISTRAR HC
        this.router.post('/historiaClinica/?', historiaClinicaRoutes.registrarHC);
    }
}
const altaPacienteHC = new AltaPacienteHC();
exports.default = altaPacienteHC.router;
