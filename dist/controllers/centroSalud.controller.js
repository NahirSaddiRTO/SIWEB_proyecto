"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCentrosSalud = void 0;
const centroSalud = require("../models/centroSalud");
async function obtenerCentrosSalud() {
    let doc = await centroSalud.find();
    console.log("controller Centro salud");
    return doc;
}
exports.obtenerCentrosSalud = obtenerCentrosSalud;
