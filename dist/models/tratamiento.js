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
const tratamientoSchema = new mongoose.Schema({
    /*  _id: {
          type: mongoose.Schema.Types.ObjectId,
          index: true,
          required: true,
          auto: true,},*/
    descripcion: { type: String, required: true },
    duracion_en_dias: { type: Number, required: false },
    fecha: { type: Date, required: true },
    tipo: { type: String, required: true },
    Medico: { '_id': mongoose.Schema.Types.ObjectId },
    Medicacion: [{ '_id': mongoose.Schema.Types.ObjectId }]
});
const tratamiento = mongoose.model('tratamiento', tratamientoSchema, 'Tratamiento');
module.exports = tratamiento;
