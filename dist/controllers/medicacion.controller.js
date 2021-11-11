"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerMedicacionxID = exports.obtenerMedicacionXNombre = exports.obtenerMedicacionPorNombre = void 0;
const afeccion = require("../models/medicacion");
const diagnosticoM = require("../models/diagnostico");
const sintoma = require("../models/sintoma");
const medicacion = require("../models/medicacion");
async function obtenerMedicacionPorNombre(nombre) {
    const lista = await afeccion.find({ nombre });
    return lista;
}
exports.obtenerMedicacionPorNombre = obtenerMedicacionPorNombre;
async function obtenerMedicacionXNombre(nombre) {
    const lista = await medicacion.find({ nombre });
    return lista;
}
exports.obtenerMedicacionXNombre = obtenerMedicacionXNombre;
async function obtenerMedicacionxID(id) {
    const medic = await medicacion.findById(id);
    return medic;
}
exports.obtenerMedicacionxID = obtenerMedicacionxID;
