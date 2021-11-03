import  {Router} from 'express';
import * as tratamientoRoutes from '../routes/tratamiento';
import * as  pacienteRoutes from '../routes/paciente';
import * as historiaClinicaRoutes from '../routes/historiaClinica';
import * as afeccionRoutes from '../routes/afeccion';

import * as diagnosticoRoutes from '../routes/diagnostico';
class ConsultaTratamiento {
    router: Router;

    constructor() {                                             
        this.router = Router();
        this.routes();
    }
    routes() {
    //OBTENER PACIENTE
    this.router.get('/paciente/:nroDoc/:tipoDoc', pacienteRoutes.obtenerPacientesxDNI);
    //OBTENER HISTORIA CLINICA del PACIENTE POR NRO Y TIPO DE DOC junto a sus ¿afecciones?
    this.router.get('/historia-clinica/paciente/:idPaciente', historiaClinicaRoutes.obtenerHistoriaClinica);
    //OBTENER SINTOMAS DE ESTA AFECCION y DIAGNOSTICO .. acá la afección la elije el cliente desde las disponibles de la HC
    this.router.get('/afeccion/:idAfeccion', afeccionRoutes.obtenerNombreAfeccion);//obtenerSintomasAfeccion);


/*CHEQUEAR ESTA RUTA*/
 //   this.router.get('/afeccion/:idAfeccion', afeccionRoutes.obtenerDiagnostico);
 this.router.get('/diagnostico/:idDiagnostico',diagnosticoRoutes.obtenerDiagnostico);


  //  this.router.get('/afeccion/:idAfeccion', afeccionRoutes.obtenerDiagnosticoDAfeccion);
    this.router.get('/afeccion/:idAfeccion', afeccionRoutes.obtenerTratamientosAfeccion);
    this.router.get('/tratamiento/:idTratamiento', tratamientoRoutes.obtenerTratamientoXId);
}
}
const consultaTratamiento = new ConsultaTratamiento();

export default consultaTratamiento.router;