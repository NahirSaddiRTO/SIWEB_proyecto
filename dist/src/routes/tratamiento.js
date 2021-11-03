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
exports.registrarTratamiento = exports.obtenerTratamientosxMedico = exports.obtenerTratamientoXTipo = exports.obtenerTratamiento = void 0;
const tratamientoCtr = __importStar(require("../controllers/tratamiento.controller"));
const tratamiento = require("../models/tratamiento");
var mongoose = require('mongoose');
async function obtenerTratamiento(req, res) {
    // const consultaId=mongoose.Types.ObjectId(req.params.idConsulta);
    await tratamientoCtr.obtenerTratamientos().then(async (data) => {
        res.json(data);
    });
}
exports.obtenerTratamiento = obtenerTratamiento;
async function obtenerTratamientoXTipo(req, res) {
    //  const consultaId=mongoose.Types.ObjectId(req.params.idConsulta);
    //  await afeccionCtr.validarConsulta(consultaId).then(async data => {
    const tipoId = mongoose.Types.ObjectId(req.params.tipoId);
    await tratamientoCtr.obtenerTratamientoXTipo(tipoId).then(async (data) => {
        res.json(data);
    });
}
exports.obtenerTratamientoXTipo = obtenerTratamientoXTipo;
;
async function obtenerTratamientosxMedico(req, res) {
    const medicoId = mongoose.Types.ObjectId(req.params.idMedico);
    let fechaDesde;
    let fechaHasta;
    if (req.query) {
        fechaDesde = req.query.fechaDesde;
        fechaHasta = req.query.fechaHasta;
    }
    await tratamientoCtr.obtenerTratamientosxMedico(medicoId, fechaDesde, fechaHasta).then(async (data) => {
        if (data.length == 0) {
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            res.json(data);
        }
    });
}
exports.obtenerTratamientosxMedico = obtenerTratamientosxMedico;
async function registrarTratamiento(req, res) {
    const datosTratamiento = new tratamiento(req.body);
    await tratamientoCtr.validarTratamiento(datosTratamiento).then(async (data) => {
        if (data && data.valido) {
            await datosTratamiento.save();
        }
        res.json({ status: res.status, data: data });
    });
}
exports.registrarTratamiento = registrarTratamiento;
