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
exports.obtenerMedicacionxID = exports.obtenerMedicacionxNombre = void 0;
const medicacionCtr = __importStar(require("../controllers/medicacion.controller"));
var mongoose = require('mongoose');
async function obtenerMedicacionxNombre(req, res) {
    const nombre = req.params.nombre;
    // console.log("Paso por acá");
    medicacionCtr.obtenerMedicacionPorNombre(nombre).then(async (data) => {
        const medicacion = data;
        console.log(medicacion);
        if (medicacion.length == 0) {
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            res.json({ medicacion });
        }
    });
}
exports.obtenerMedicacionxNombre = obtenerMedicacionxNombre;
async function obtenerMedicacionxID(req, res) {
    await medicacionCtr.obtenerMedicacionxID(req.params.idMedicacion).then(async (data) => {
        if (!data) {
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            res.json(data);
        }
    });
}
exports.obtenerMedicacionxID = obtenerMedicacionxID;
