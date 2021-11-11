"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarTratamiento = exports.obtenerTratamientosxMedico = exports.obtenerTratamientoXId = exports.obtenerTratamientoXTipo = exports.obtenerTratamientos = void 0;
const tratamiento = require("../models/tratamiento");
async function obtenerTratamientos() {
    let doc = await tratamiento.find();
    return doc;
}
exports.obtenerTratamientos = obtenerTratamientos;
async function obtenerTratamientoXTipo(tipo) {
    const query = {
        tipo
    };
    const lista = await tipo.find(query);
    return lista;
}
exports.obtenerTratamientoXTipo = obtenerTratamientoXTipo;
async function obtenerTratamientoXId(idTrata) {
    const query = {
        '_id': idTrata
    };
    console.log("La query es ", idTrata);
    const lista = await tratamiento.findById(query);
    console.log("El tratamiento que trajo es ", lista);
    return lista;
}
exports.obtenerTratamientoXId = obtenerTratamientoXId;
async function obtenerTratamientosxMedico(idMedico, fechaDesde, fechaHasta) {
    console.log(fechaDesde, fechaHasta);
    const query = {
        'Medico._id': idMedico,
        'fecha': { $gte: (fechaDesde), $lt: (fechaHasta) }
    };
    let data = await tratamiento.find(query);
    return data;
}
exports.obtenerTratamientosxMedico = obtenerTratamientosxMedico;
async function validarTratamiento(data) {
    console.log("entro a validarTratamiento");
    let resultado;
    let valido = false;
    let estado = "No validado";
    if (data) {
        console.log(data);
        console.log(data.duracion_en_dias);
        console.log(data.tipo);
        console.log(data.descripcion);
        console.log(data.fecha);
        console.log(data.Medicacion[0]);
        if (data.duracion_en_dias && data.tipo && data.descripcion && data.fecha) {
            if (data.Medico._id && data.Medicacion[0]._id) { //esto me daba que no estaba validado: data.Medicacion._id
                estado = "validado";
                valido = true;
            }
            else {
                data += "Faltan el medico o la medicacion";
            }
        }
        else {
            data += "Faltan la descripción, la duracion en días, la fecha o el tipo de tratamiento";
        }
    }
    else {
        data += "Faltan datos del tratamiento.";
    }
    console.log(valido);
    console.log(data);
    console.log(estado);
    resultado = { valido, datosTratamiento: data, estado };
    return resultado;
}
exports.validarTratamiento = validarTratamiento;
