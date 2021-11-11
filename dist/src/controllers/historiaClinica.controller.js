"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarHC = exports.obtenerAfeccion = exports.obtenerAfeccionDeHC = exports.obtenerHCxPaciente = exports.obtenerHistoriaClinicaXDNI = void 0;
const historiaClinica_1 = __importDefault(require("../models/historiaClinica"));
async function obtenerHistoriaClinicaXDNI(tipoDoc, nroDoc) {
    const query = {
        tipoDoc,
        nroDoc
    };
    const lista = await historiaClinica_1.default.find(query);
    return lista;
}
exports.obtenerHistoriaClinicaXDNI = obtenerHistoriaClinicaXDNI;
async function obtenerHCxPaciente(idPaciente) {
    const query = {
        'paciente._id': idPaciente
    };
    // console.log("query",query)
    const lista = await historiaClinica_1.default.find(query);
    // console.log("LISTA",lista);
    return lista;
}
exports.obtenerHCxPaciente = obtenerHCxPaciente;
async function obtenerAfeccionDeHC(legajoHC) {
    const query = {
        'legajo': legajoHC
    };
    const lista = await historiaClinica_1.default.find(query);
    return lista;
}
exports.obtenerAfeccionDeHC = obtenerAfeccionDeHC;
async function obtenerAfeccion(idAfeccion) {
    const query = {
        hcId: idAfeccion.idHC,
    };
    console.log("la query EEEESSS", query);
    const lista = await historiaClinica_1.default.findById(query.hcId);
    console.log("la listaaa ", lista);
    console.log("a ver si da afeccion ", lista.afeccion._id);
    return lista.afeccion._id;
}
exports.obtenerAfeccion = obtenerAfeccion;
async function registrarHC(data, nrodocumento) {
    try {
        let resultado;
        let valido = false;
        let estado = "No validado";
        if (data) {
            estado = "validado";
            valido = true;
            data.legajo = "LE" + nrodocumento;
            await data.save();
        }
        resultado = { valido, datosHC: data, estado };
        return resultado;
    }
    catch (err) {
        return err;
    }
}
exports.registrarHC = registrarHC;
