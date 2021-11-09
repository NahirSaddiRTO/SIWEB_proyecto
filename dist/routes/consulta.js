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
exports.registrarConsulta = exports.obtenerConsultasPaciente = exports.obtenerConsultasMedico = void 0;
const consultaCtr = __importStar(require("../controllers/consulta.controller"));
const consulta = require("../models/consulta");
var mongoose = require('mongoose');
async function obtenerConsultasMedico(req, res) {
    const medicoId = mongoose.Types.ObjectId(req.params.idMedico);
    let fechaDesde;
    let fechaHasta;
    if (req.query) {
        fechaDesde = req.query.fechaDesde;
        fechaHasta = req.query.fechaHasta;
    }
    await consultaCtr.obtenerConsultasMedico(medicoId, fechaDesde, fechaHasta).then(async (data) => {
        if (data.length == 0) {
            res.status(200).json({
                title: 'No hay consultas en esa fecha'
            });
        }
        else {
            res.json(data);
        }
    });
}
exports.obtenerConsultasMedico = obtenerConsultasMedico;
async function obtenerConsultasPaciente(req, res) {
    const pacienteId = mongoose.Types.ObjectId(req.params.idPaciente);
    let fechaDesde;
    let fechaHasta;
    if (req.query) {
        fechaDesde = req.query.fechaDesde;
        fechaHasta = req.query.fechaHasta;
    }
    await consultaCtr.obtenerConsultasPaciente(pacienteId, fechaDesde, fechaHasta).then(async (data) => {
        if (data.length == 0) {
            res.status(200).json({
                title: 'No hay consultas en esa fecha'
            });
        }
        else {
            res.json(data);
        }
    });
}
exports.obtenerConsultasPaciente = obtenerConsultasPaciente;
async function registrarConsulta(req, res) {
    const datosConsulta = new consulta(req.body);
    await consultaCtr.validarConsulta(datosConsulta).then(async (data) => {
        if (data && data.valido) {
            await datosConsulta.save();
        }
        res.json({ status: res.status, data: data });
    });
}
exports.registrarConsulta = registrarConsulta;
