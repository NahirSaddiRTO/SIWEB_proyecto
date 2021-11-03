
const  tratamiento = require("../models/tratamiento");
 
export async function obtenerTratamientos() {
    let doc = await tratamiento.find()
    return doc;
}

 
export async function obtenerTratamientoXTipo(tipo:any) {
    const query = {
        tipo
    };
    const lista = await tipo.find(query);
    return lista;
}
export async function obtenerTratamientoXId(idTrata:any) {
    const query = {
        '_id':idTrata
    };
    console.log("La query es ",idTrata)
    const lista = await tratamiento.findById(query);
    console.log("El tratamiento que trajo es ",lista)
    return lista;
}


export async function obtenerTratamientosxMedico(idMedico:any,fechaDesde:Date,fechaHasta:Date){
    console.log(fechaDesde,fechaHasta);
     const query = {
         'Medico._id':idMedico,
         'fecha': { $gte: (fechaDesde), $lt: (fechaHasta)}
     };
     let data = await tratamiento.find(query);
     return data
 }


export async function validarTratamiento(data:any) {
    console.log("entro a validarTratamiento")
    let resultado;
    let valido=false;
    let estado = "No validado";
    if (data){
        console.log(data)
        console.log(data.duracion_en_dias)
        console.log(data.tipo)
        console.log(data.descripcion)
        console.log(data.fecha)
        console.log(data.Medicacion[0])
        if( data.duracion_en_dias && data.tipo && data.descripcion && data.fecha ){
            if(data.Medico._id && data.Medicacion[0]._id){ //esto me daba que no estaba validado: data.Medicacion._id
                estado= "validado"
                valido = true;
            }
            else{
                data+="Faltan el medico o la medicacion";
            }
        }
        else{
            data+="Faltan la descripción, la duracion en días, la fecha o el tipo de tratamiento";
        }
    }
    else{
        data+="Faltan datos del tratamiento.";
    }
    console.log(valido)
    console.log(data)
    console.log(estado)
    resultado = { valido, datosTratamiento:data, estado};

    return resultado;

}


