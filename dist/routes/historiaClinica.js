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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerAfeccion = exports.obtenerAfeccionesHC = exports.obtenerHistoriaClinica = exports.registrarHC = void 0;
const historiaClinicaCtl = __importStar(require("../controllers/historiaClinica.controller"));
const historiaClinica_1 = __importDefault(require("../models/historiaClinica"));
var mongoose = require('mongoose');
const pacienteCtr = __importStar(require("../controllers/paciente.controller"));
async function registrarHC(req, res) {
    const datosHC = new historiaClinica_1.default(req.body);
    let docPaciente;
    if (req.body.paciente) {
        const paciente = req.body.paciente;
        const pacienteId = mongoose.Types.ObjectId(paciente._id);
        await pacienteCtr.obtenerPacientexID(pacienteId).then(async (data) => {
            docPaciente = data.nrodocumento;
        });
        await historiaClinicaCtl.registrarHC(datosHC, docPaciente).then(async (data) => {
            res.json({ status: res.status, data: data });
        });
    }
    else {
        res.status(400).json({
            error: 'No hay paciente para crear HC'
        });
    }
}
exports.registrarHC = registrarHC;
async function obtenerHistoriaClinica(req, res) {
    console.log("Por parametro me viene esto ", req.params.idPaciente);
    const pacienteId = mongoose.Types.ObjectId(req.params.idPaciente);
    console.log("a ver el id del paciente ", pacienteId);
    await historiaClinicaCtl.obtenerHCxPaciente(pacienteId).then(async (data) => {
        if (data.length == 0) {
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            //console.log("desde la transaccion la hc es: ",res) //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            res.json(data);
        }
    });
}
exports.obtenerHistoriaClinica = obtenerHistoriaClinica;
async function obtenerAfeccionesHC(req, res) {
    const legajo = req.params.legajoHC;
    await historiaClinicaCtl.obtenerAfeccionDeHC(legajo).then(async (data) => {
        res.json({ status: res.status, data: data });
    });
}
exports.obtenerAfeccionesHC = obtenerAfeccionesHC;
/* export async function obtenerAfeccion(req: Request, res: Response) {
     const idHc = req.params.hcId;

     console.log("Lo que se manda", req.params);
     historiaClinicaCtl.obtenerAfeccion(idHc).then(async data => {
         const afeccion = data;
         console.log("Resultado de DATA",afeccion);
         if(afeccion.length == 0){
             res.status(400).json({
                 title: 'Ocurrió un error'
             });
            }else{
             res.json(afeccion);
            }
       // console.log(req.body);
       //  res.json(afeccion);
     });
 }*/
async function obtenerAfeccion(req, res) {
    const idAfeccion = req.params;
    //console.log("Veamos que se manda ",typeof idAfeccion);
    historiaClinicaCtl.obtenerAfeccion(idAfeccion).then(async (data) => {
        const afeccion = data;
        if (afeccion.length == 0) {
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            res.json(afeccion);
            console.log("La afeccion del data es ", res.json);
        }
        // console.log(req.body);
        //  res.json(afeccion);
    });
}
exports.obtenerAfeccion = obtenerAfeccion;
