"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDiagnostico = exports.obtenerTratamientosAfeccion = exports.obtenerAfecciones = void 0;
const diagnostico = require("../models/diagnostico");
async function obtenerAfecciones() {
    const lista = await diagnostico.find();
    return lista;
}
exports.obtenerAfecciones = obtenerAfecciones;
async function obtenerTratamientosAfeccion(afeccionId) {
    let afeccionSelected = await diagnostico.findById(afeccionId);
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
/*ESTE ES EL METODO QUE USOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO*/
async function obtenerDiagnostico(idAfeccion) {
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
    let elDiagnostico = await diagnostico.findById(idAfeccion);
    console.log("a ver que tiene la afeccion en controller", elDiagnostico);
    // console.log('idAfeccion diagnostico',laAfeccion.diagnostico);
    const query = {
        'nombre': elDiagnostico.nombre,
        'tipoDiagnostico': elDiagnostico.tipoDiagnostico
    };
    console.log("la query ", query);
    //const lista = await diagnostico.find(query)
    // console.log("LA QUERY de DIAGnostico dio ",typeof lista)
    let resultado;
    if (query.tipoDiagnostico == 'Definitivo') {
        if (query == null) {
            resultado = "No existe diagnostico definitivo para esta afeccion";
        }
        else {
            resultado = query.nombre;
        }
    }
    else {
        resultado = "No existe diagnostico definitivo para esta afeccion";
    }
    //const listaDiagnostico = await elDiagnostico.findById(query["diagnostico._id"]).where('tipoDiagnostico').equals('Definitivo');
    // console.log("ahora la lista EEEES ",listaDiagnostico);
    return resultado;
}
exports.obtenerDiagnostico = obtenerDiagnostico;
