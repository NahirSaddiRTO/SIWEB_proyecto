const formacionProfesional = require("../models/formacionProfesional");

export async function obtenerFormacionProfesional(nroMatricula:any,tipoMatricula:any) {
    const query = {
        nroMatricula,
        tipoMatricula
    };
    
    const lista = await formacionProfesional.find(query);
    return lista;
}
