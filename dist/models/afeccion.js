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
const afeccionSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tratamiento: [{ '_id': mongoose.Schema.Types.ObjectId }],
    sintomas: [{ '_id': mongoose.Schema.Types.ObjectId }],
    consulta: [{ '_id': mongoose.Schema.Types.ObjectId }],
    diagnostico: { '_id': mongoose.Schema.Types.ObjectId },
});
const afeccion = mongoose.model('afeccion', afeccionSchema, 'Afeccion');
module.exports = afeccion;
