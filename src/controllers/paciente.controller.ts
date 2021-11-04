
const paciente = require("../models/paciente");

export async function obtenerPacientesxDNI(nrodocumento:any,tipodni:any) {
    const query = {
        nrodocumento,
        tipodni
    };
    const lista = await paciente.find(query);
    return lista;
}

export async function registrarPaciente(data:any): Promise<any> {
    try{
    let resultado;
    let valido=false;
    let estado = "No validado";
    console.log("paciente",data)
    if (data){
         if(data.nrodocumento && data.tipodni){
            if(data.nombre && data.apellido && data.fechanacimiento &&  data.telefono_pac){
                estado= "validado"
                valido = true;
                await data.save();
            }
            else{
                data+="Faltan datos personales del paciente";
            }
        }
        else{
            data+="Faltan el nro de documento y tipo DNI";
        }
    }
     else{
         data+="Faltan datos del paciente.";
     }
     resultado = { valido, datosConsulta:data, estado};
     return resultado;
    }
    catch (err) {
        return err;
    }
    
}

export async function obtenerPacientexID(idPaciente:any) {
    const pac = await paciente.findById(idPaciente);
    return pac;
}