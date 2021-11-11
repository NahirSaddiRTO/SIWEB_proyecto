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
exports.obtenerDiagnostico = void 0;
const diagnosticoCtr = __importStar(require("../controllers/diagnostico.controller"));
var mongoose = require('mongoose');
async function obtenerDiagnostico(req, res) {
    console.log("ENTRO AL BACK ");
    const diagnosticoId = mongoose.Types.ObjectId(req.params.idDiagnostico);
    console.log("El id de la diagnostico es? ", diagnosticoId);
    await diagnosticoCtr.obtenerDiagnostico(diagnosticoId).then(async (data) => {
        console.log("La data es diagnositico??????? ", data);
        if (data == null) {
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
