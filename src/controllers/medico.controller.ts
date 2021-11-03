const medico = require("../models/medico");

export async function obtenerMedicosMatriculaEspecialidad() {
    console.log("HOLAAA");
}

export async function obtenerMedicosXMatriculaEspecialidad(nroMatricula:any,tipoMatricula:any, especialidad:any) {
    const query = {
        nroMatricula,
        tipoMatricula,
        especialidad
    };
    const lista = await medico.find(query);
    return lista;
}
export async function obtenerMedicoxFormacion(idFormacion:any){
    const query = {
        'formacionProfesional._id':idFormacion
    };
    const lista = await medico.find(query);
    console.log(lista);
    return lista;
}