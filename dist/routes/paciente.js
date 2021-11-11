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
exports.registrarPaciente = exports.obtenerPacientesxDNI = void 0;
var paciente = require('../models/paciente');
const pacienteCtr = __importStar(require("../controllers/paciente.controller"));
async function obtenerPacientesxDNI(req, res) {
    const nrodocumento = req.params.nroDoc;
    const tipodni = req.params.tipoDoc;
    pacienteCtr.obtenerPacientesxDNI(nrodocumento, tipodni).then(async (data) => {
        const paciente = data;
        //console.log(req.body);
        //res.json(paciente);
        if (paciente.length === 0) {
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            res.json(paciente);
        }
    });
}
exports.obtenerPacientesxDNI = obtenerPacientesxDNI;
async function registrarPaciente(req, res) {
    try {
        if (req.body && req.body.nrodocumento && req.body.tipodni) {
            await pacienteCtr.obtenerPacientesxDNI(req.body.nrodocumento, req.body.tipodni).then(async (data) => {
                if (data.length == 0) {
                    const datosPaciente = new paciente(req.body);
                    await pacienteCtr.registrarPaciente(datosPaciente).then(async (data) => {
                        if (data.valido) {
                            res.json({ status: res.status, data: data });
                        }
                        else {
                            res.status(400).json({
                                status: res.status, data: data
                            });
                        }
                    });
                }
                else {
                    res.status(400).json({ status: res.status, data: { valido: false, datosConsulta: "PACIENTE EXISTENTE" } });
                }
            });
        }
        res.status(400).json({ status: res.status, data: { valido: false, datosConsulta: "Falta nro y tipo dni" } });
    }
    catch (err) {
        return err;
    }
}
exports.registrarPaciente = registrarPaciente;
