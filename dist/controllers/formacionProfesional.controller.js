"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerFormacionProfesional = void 0;
const formacionProfesional = require("../models/formacionProfesional");
async function obtenerFormacionProfesional(nroMatricula, tipoMatricula) {
    const query = {
        nroMatricula,
        tipoMatricula
    };
    const lista = await formacionProfesional.find(query);
    return lista;
}
exports.obtenerFormacionProfesional = obtenerFormacionProfesional;
