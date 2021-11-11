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
exports.obtenerMedicosXMatriculaEspecialidad = exports.obtenerMedicoxFormacion = void 0;
const medicoCtr = __importStar(require("../controllers/medico.controller"));
var mongoose = require('mongoose');
async function obtenerMedicoxFormacion(req, res) {
    const formacionId = mongoose.Types.ObjectId(req.params.idFormacion);
    await medicoCtr.obtenerMedicoxFormacion(formacionId).then(async (data) => {
        console.log("la data", data);
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
exports.obtenerMedicoxFormacion = obtenerMedicoxFormacion;
async function obtenerMedicosXMatriculaEspecialidad(req, res) {
    const nroMatricula = req.params.nroMatricula;
    const tipoMatricula = req.params.tipoMatricula;
    // const medicoId=mongoose.Types.ObjectId(req.params.idMedico);
    //  await medicoCtr.obtenerMedicosXMatriculaEspecialidad(nroMatricula,tipoMatricula).then(async data => {
    //     const medico=data;
    //     res.json(medico);
    // });
}
exports.obtenerMedicosXMatriculaEspecialidad = obtenerMedicosXMatriculaEspecialidad;
