
const afeccion = require("../models/medicacion");
const diagnosticoM = require("../models/diagnostico");
const sintoma = require("../models/sintoma");
const medicacion = require("../models/medicacion");

import * as mongoose from 'mongoose';

export async function obtenerMedicacionPorNombre(nombre:any) {
    const lista = await afeccion.find({nombre});
    return lista;
}

export async function obtenerMedicacionXNombre(nombre:any) {
    const lista = await medicacion.find({nombre});
    return lista;
}

export async function obtenerMedicacionxID(id:any){
    const medic = await medicacion.findById(id);
    return medic;
}


