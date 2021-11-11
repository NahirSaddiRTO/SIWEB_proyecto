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
const mongoose = __importStar(require("mongoose"));
const constantes = __importStar(require("../models/constantes"));
const pacienteSchema = new mongoose.Schema({
    nrodocumento: { type: String, required: true },
    tipodni: constantes.IDENTIFICACION,
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    piso: { type: Number, required: false },
    calle: { type: String, required: false },
    altura: { type: Number, required: false },
    fechanacimiento: { type: Date, required: true },
    estado: constantes.ESTADOCIVIL,
    telefono_pac: [{ type: Number, required: false }],
    sexo: constantes.SEXO
});
const paciente = mongoose.model('paciente', pacienteSchema, 'Paciente');
module.exports = paciente;
