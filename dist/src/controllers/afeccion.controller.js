"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregaTratamientoAAfeccion = exports.agregaConsultaAAfeccion = exports.obtenerDiagnostico = exports.obtenerTratamientosAfeccion = exports.obtenerSintomasAfeccion = exports.obtenerAfecciones = void 0;
const afeccion = require("../models/afeccion");
const diagnosticoM = require("../models/diagnostico");
const sintoma = require("../models/sintoma");
async function obtenerAfecciones() {
    const lista = await afeccion.find();
    return lista;
}
exports.obtenerAfecciones = obtenerAfecciones;
async function obtenerSintomasAfeccion(afeccionId) {
    let afeccionSelected = await afeccion.findById(afeccionId);
    //console.log("LA Afeccion ES",afeccionSelected);
    if (afeccionSelected != null) {
        afeccionSelected = afeccionSelected.sintomas;
        // Object.assign({},afeccionSelected);
    }
    else {
        afeccionSelected = [];
    }
    console.log("El sintoma ES", afeccionSelected);
    return afeccionSelected;
}
exports.obtenerSintomasAfeccion = obtenerSintomasAfeccion;
async function obtenerTratamientosAfeccion(afeccionId) {
    let afeccionSelected = await afeccion.findById(afeccionId);
    //console.log("LA Afeccion ES",afeccionSelected);
    if (afeccionSelected != null) {
        afeccionSelected = afeccionSelected.tratamiento;
        Object.assign({ afeccionSelected });
    }
    else {
        afeccionSelected = [];
    }
    console.log("El tratamiento ES", afeccionSelected);
    return afeccionSelected;
}
exports.obtenerTratamientosAfeccion = obtenerTratamientosAfeccion;
async function obtenerDiagnostico(idAfeccion) {
    // const query = //await afeccion.find({ '': 'Tennis' });
    /*{
         'diagnostico._id':afeccionId.diagnostico_id,
        //'diagnostico.tipoDiagnostico':"Definitivo"
     };*/
    /* let query=await afeccion.findById(afeccionId);
     if (query!= null) {
         query=query.diagnostico._id;
        // query= await diagnosticoM.find({'tipo-diagnostico':'Definitivo'});
     }else{
         query=[];
     }*/
    //  console.log("AGAIN id afeccion",idAfeccion);
    let laAfeccion = await afeccion.findById(idAfeccion);
    // console.log('idAfeccion diagnostico',laAfeccion.diagnostico);
    const query = {
        'diagnostico._id': laAfeccion.diagnostico,
    };
    // console.log("la query ",query);
    const listaDiagnostico = await diagnosticoM.findById(query["diagnostico._id"]).where('tipoDiagnostico').equals('Definitivo');
    // console.log("ahora la lista EEEES ",listaDiagnostico);
    return [listaDiagnostico];
}
exports.obtenerDiagnostico = obtenerDiagnostico;
async function agregaConsultaAAfeccion(afeccionId, consultaId) {
    try {
        let valido = false;
        let resultado;
        let estado = "";
        let afeccionAModificar = await afeccion.findById(afeccionId);
        if (afeccionAModificar) {
            valido = true;
            afeccionAModificar.consulta.push({ "_id": consultaId._idConsulta });
            await afeccionAModificar.save();
            estado = "afeccion actualizada";
            resultado = { valido, afeccionModificada: afeccionAModificar, estado };
            return resultado;
        }
        else {
            estado = "no encuentra afeccion";
            resultado = { valido, estado };
            return resultado;
        }
    }
    catch (err) {
        return err;
    }
}
exports.agregaConsultaAAfeccion = agregaConsultaAAfeccion;
async function agregaTratamientoAAfeccion(afeccionId, tratamientoId) {
    try {
        let resultado;
        let estado = "";
        let afeccionAModificar = await afeccion.findById(afeccionId);
        afeccionAModificar.consulta.push({ "_id": tratamientoId._idTratamiento });
        await afeccionAModificar.save();
        estado = "afeccion actualizada";
        resultado = { afeccionModificada: afeccionAModificar, estado };
        return resultado;
    }
    catch (err) {
        return err;
    }
}
exports.agregaTratamientoAAfeccion = agregaTratamientoAAfeccion;
