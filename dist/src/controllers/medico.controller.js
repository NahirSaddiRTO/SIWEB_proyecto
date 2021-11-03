"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerMedicoxFormacion = exports.obtenerMedicosXMatriculaEspecialidad = exports.obtenerMedicosMatriculaEspecialidad = void 0;
const medico = require("../models/medico");
async function obtenerMedicosMatriculaEspecialidad() {
    console.log("HOLAAA");
}
exports.obtenerMedicosMatriculaEspecialidad = obtenerMedicosMatriculaEspecialidad;
async function obtenerMedicosXMatriculaEspecialidad(nroMatricula, tipoMatricula, especialidad) {
    const query = {
        nroMatricula,
        tipoMatricula,
        especialidad
    };
    const lista = await medico.find(query);
    return lista;
}
exports.obtenerMedicosXMatriculaEspecialidad = obtenerMedicosXMatriculaEspecialidad;
async function obtenerMedicoxFormacion(idFormacion) {
    const query = {
        'formacionProfesional._id': idFormacion
    };
    const lista = await medico.find(query);
    console.log(lista);
    return lista;
}
exports.obtenerMedicoxFormacion = obtenerMedicoxFormacion;
