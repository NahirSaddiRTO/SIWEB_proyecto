"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarConsulta = exports.obtenerConsultasPaciente = exports.obtenerConsultasMedico = void 0;
const consulta = require("../models/consulta");
async function obtenerConsultasMedico(idMedico, fechaDesde, fechaHasta) {
    const query = {
        'medico._id': idMedico,
        'fechaHora': { $gte: (fechaDesde), $lt: (fechaHasta) }
    };
    const lista = await consulta.find(query);
    return lista;
}
exports.obtenerConsultasMedico = obtenerConsultasMedico;
async function obtenerConsultasPaciente(idPaciente, fechaDesde, fechaHasta) {
    const query = {
        'paciente._id': idPaciente,
        'fechaHora': { $gte: (fechaDesde), $lt: (fechaHasta) }
    };
    console.log("query", query);
    const lista = await consulta.find(query);
    return lista;
}
exports.obtenerConsultasPaciente = obtenerConsultasPaciente;
async function validarConsulta(data) {
    let resultado;
    let valido = false;
    let estado = "No validado";
    if (data) {
        if (data.motivo && data.fechaHora) {
            if (data.paciente._id && data.medico._id && data.centroSalud._id) {
                estado = "validado";
                valido = true;
            }
            else {
                data += "Faltan paciente o medico o centro de salud";
            }
        }
        else {
            data += "Faltan los motivos y la fecha";
        }
    }
    else {
        data += "Faltan datos de la consulta.";
    }
    resultado = { valido, datosConsulta: data, estado };
    return resultado;
}
exports.validarConsulta = validarConsulta;
