const consulta = require("../models/consulta");

export async function obtenerConsultasMedico(idMedico:any,fechaDesde:Date,fechaHasta:Date){
    const query = {
        'medico._id':idMedico,
        'fechaHora': { $eq: (fechaDesde)}
    };
    const lista = await consulta.find(query);
    return lista;
}

export async function obtenerConsultasPaciente(idPaciente:any,fechaDesde:Date,fechaHasta:Date) {
    const query = {
        'paciente._id':idPaciente,
//        'fechaHora': { $gte: (fechaDesde), $lt: (fechaHasta)}
        
        'fechaHora': { $eq: (fechaDesde)}
    };
    console.log("query",query)
    const lista = await consulta.find(query);
    return lista;
}
export async function validarConsulta(data:any) {
    let resultado;
    let valido=false;
    let estado = "No validado";
    if (data){
        if(data.motivo && data.fechaHora){
            if(data.paciente._id && data.medico._id && data.centroSalud._id ){
                estado= "validado"
                valido = true;
            }
            else{
                data+="Faltan paciente o medico o centro de salud";
            }
        }
        else{
            data+="Faltan los motivos y la fecha";
        }
    }
    else{
        data+="Faltan datos de la consulta.";
    }
    resultado = { valido, datosConsulta:data, estado};

    return resultado;

}