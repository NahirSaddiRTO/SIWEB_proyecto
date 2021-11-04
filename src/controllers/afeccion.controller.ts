
const afeccion = require("../models/afeccion");
const diagnosticoM = require("../models/diagnostico");
const sintoma = require("../models/sintoma");


export async function obtenerAfecciones() {
    const lista = await afeccion.find();
    return lista;
}

export async function obtenerSintomasAfeccion(afeccionId:any) {
    let afeccionSelected = await afeccion.findById(afeccionId);
    //console.log("LA Afeccion ES",afeccionSelected);
    if (afeccionSelected != null) {
        afeccionSelected=afeccionSelected.sintomas;
       // Object.assign({},afeccionSelected);
    }else{
        afeccionSelected=[];
    }
    console.log("El sintoma ES",afeccionSelected);
    return afeccionSelected
}

export async function obtenerTratamientosAfeccion(afeccionId:any) {
    let afeccionSelected = await afeccion.findById(afeccionId);
    //console.log("LA Afeccion ES",afeccionSelected);
    if (afeccionSelected != null) {
        afeccionSelected=afeccionSelected.tratamiento;
        Object.assign({afeccionSelected});
    }else{
        afeccionSelected=[];
    }
    console.log("El tratamiento ES",afeccionSelected);
    return afeccionSelected
}

/*export async function obtenerDiagnostico(idAfeccion:any) {
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
  /*  let laAfeccion=await afeccion.findById(idAfeccion);
    console.log("a ver que tiene la afeccion en controller",laAfeccion)
   // console.log('idAfeccion diagnostico',laAfeccion.diagnostico);
    const query = {
        'diagnostico._id':laAfeccion.diagnostico,
    };
   // console.log("la query ",query);
  
 /*   const listaDiagnostico = await diagnosticoM.findById(query["diagnostico._id"]).where('tipoDiagnostico').equals('Definitivo');
   // console.log("ahora la lista EEEES ",listaDiagnostico);
    return [listaDiagnostico]
}*/


export async function obtenerNombreAfeccion(idAfeccion:any) {

     console.log("entro al back con obtenerDatosAfeccion")
     let laAfeccion=await afeccion.findById(idAfeccion);
     console.log("a ver que tiene la afeccion en controller",laAfeccion)
     const query = {
         'diagnostico._id':laAfeccion.diagnostico,
     };
     console.log("el nombre ",laAfeccion.nombre);
     return {nom : laAfeccion.nombre, diag: laAfeccion.diagnostico, sintomas: laAfeccion.sintomas, tratamiento: laAfeccion.tratamiento}
 }

export async function agregaConsultaAAfeccion(afeccionId: any, consultaId: any): Promise<any> {
    try{    
    let valido=false;
    let resultado;
    let estado ="";
    let afeccionAModificar: any = await afeccion.findById(afeccionId);
    if(afeccionAModificar){
    valido=true;
    afeccionAModificar.consulta.push({"_id": consultaId._idConsulta});
    await afeccionAModificar.save();
    estado="afeccion actualizada"
    resultado = {valido,afeccionModificada:afeccionAModificar, estado};
    return resultado;
}
else{
    estado="no encuentra afeccion"
    
    resultado ={ valido, estado};
    return resultado;
}
    }
    catch (err) {
        return err;
}}

export async function agregaTratamientoAAfeccion(afeccionId: any, tratamientoId: any) {
    try{    
    let resultado;
    let estado ="";
    let afeccionAModificar: any = await afeccion.findById(afeccionId);
    afeccionAModificar.tratamiento.push({"_id": tratamientoId._idTratamiento});
    await afeccionAModificar.save();
    estado="afeccion actualizada"
    resultado = { afeccionModificada:afeccionAModificar, estado};
    return resultado;
    }
    catch (err) {
        return err;
}}

