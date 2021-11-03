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
exports.agregaTratamientoAAfeccion = exports.agregaConsultaAAfeccion = exports.obtenerDiagnostico = exports.obtenerTratamientosAfeccion = exports.obtenerSintomasAfeccion = exports.obtenerAfecciones = void 0;
const afeccionCtr = __importStar(require("../controllers/afeccion.controller"));
var mongoose = require('mongoose');
async function obtenerAfecciones(req, res) {
    await afeccionCtr.obtenerAfecciones().then(async (data) => {
        res.json(data);
    });
}
exports.obtenerAfecciones = obtenerAfecciones;
async function obtenerSintomasAfeccion(req, res) {
    const afeccionId = mongoose.Types.ObjectId(req.params.idAfeccion);
    await afeccionCtr.obtenerSintomasAfeccion(afeccionId).then(async (data) => {
        console.log("LA DATA", data);
        if (data.length == 0) {
            console.log("ERROR");
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            res.json(data);
        } //con afeccionId nos trae solo el id de la afección
    });
}
exports.obtenerSintomasAfeccion = obtenerSintomasAfeccion;
async function obtenerTratamientosAfeccion(req, res) {
    const afeccionId = mongoose.Types.ObjectId(req.params.idAfeccion);
    await afeccionCtr.obtenerSintomasAfeccion(afeccionId).then(async (data) => {
        console.log("LA DATA", data);
        if (data.length == 0) {
            console.log("ERROR");
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            res.json(data);
        } //con afeccionId nos trae solo el id de la afección
    });
}
exports.obtenerTratamientosAfeccion = obtenerTratamientosAfeccion;
async function obtenerDiagnostico(req, res) {
    const afeccionId = mongoose.Types.ObjectId(req.params.idAfeccion);
    // console.log("El id de la afeccion es? ",afeccionId);
    await afeccionCtr.obtenerDiagnostico(afeccionId).then(async (data) => {
        // console.log("La data es afeccion o diagnositico? ",data);
        if (data.length === 0) {
            console.log("ERROR");
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            res.json(data);
        }
    });
}
exports.obtenerDiagnostico = obtenerDiagnostico;
async function agregaConsultaAAfeccion(req, res) {
    const afeccionId = mongoose.Types.ObjectId(req.params.idAfeccion);
    if (!(mongoose.Types.ObjectId.isValid(afeccionId))) {
        res.json(404);
    }
    else {
        const consultaID = req.body;
        await afeccionCtr.agregaConsultaAAfeccion(afeccionId, consultaID).then(async (data) => {
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
}
exports.agregaConsultaAAfeccion = agregaConsultaAAfeccion;
async function agregaTratamientoAAfeccion(req, res) {
    const afeccionId = mongoose.Types.ObjectId(req.params.idAfeccion);
    if (!(mongoose.Types.ObjectId.isValid(afeccionId))) {
        res.json(404);
    }
    else {
        const consultaID = req.body;
        await afeccionCtr.agregaTratamientoAAfeccion(afeccionId, consultaID).then(async (data) => {
            res.json({ status: res.status, data: data });
        });
    }
}
exports.agregaTratamientoAAfeccion = agregaTratamientoAAfeccion;
