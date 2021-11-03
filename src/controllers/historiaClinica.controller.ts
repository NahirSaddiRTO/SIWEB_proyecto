import hc from '../models/historiaClinica';
export async function obtenerHistoriaClinicaXDNI(tipoDoc:any,nroDoc:any){
    const query = {
        tipoDoc,
        nroDoc
    };
    const lista = await hc.find(query);
    return lista;
}

export async function obtenerHCxPaciente(idPaciente:any){
    const query = {
        'paciente._id':idPaciente
    };
   // console.log("query",query)
    const lista = await hc.find(query);
   // console.log("LISTA",lista);
    return lista;
}

export async function obtenerAfeccionDeHC(legajoHC:any){
    const query = {
        'legajo':legajoHC
    };
    const lista = await hc.find(query);
    return lista;
}

export async function obtenerAfeccion(idAfeccion:any){
    const query = {
        hcId:idAfeccion.idHC,
        
    };
    console.log("la query EEEESSS",query);
    const lista:any = await hc.findById(query.hcId);
   

    console.log("la listaaa ",lista);
    console.log("a ver si da afeccion ",lista.afeccion._id)
    return lista.afeccion._id;
}

export async function registrarHC(data:any,nrodocumento:any) {
        try{
        let resultado;
        let valido=false;
        let estado = "No validado";
         if (data){
             estado= "validado"
             valido = true;
             data.legajo="LE"+nrodocumento;
            await data.save();
            }
           
         resultado = { valido, datosHC:data, estado};
         
        return resultado;
        }
        catch (err) {
            return err;
        }

    }