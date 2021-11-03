
import  {Router} from 'express';
import * as formProfesionalRoutes from '../routes/formacionProfesional';
import * as tratamientoRoutes from '../routes/tratamiento';
import * as medicoRoutes from '../routes/medico';
import * as pacienteRoutes from '../routes/paciente';
import * as historiaClinicaRoutes from '../routes/historiaClinica';
import * as afeccionRoutes from '../routes/afeccion';
import * as medicacionRoutes from '../routes/medicacion';
import * as diagnosticoRoutes from '../routes/diagnostico';
class AltaTratamiento {
    router: Router;

    constructor() {                                             
        this.router = Router();
        this.routes();
    }
  routes() {
//OBTENER FORMACION PROFESIONAL POR NRO Y TIPO DE MATRICULA 
this.router.get('/formacion-profesional/:tipo/:nro', formProfesionalRoutes.obtenerFormacionProfesional);//
//OBTENER MÉDICO DE ESTA FORMACION (MATRICULA) Y ESPECIALIDAD
this.router.get('/medico/:idFormacion', medicoRoutes.obtenerMedicoxFormacion);///
//OBTENER PACIENTE POR DATOS BASICOS: tipoDNI - nroDNI
this.router.get('/paciente/:nroDoc/:tipoDoc',pacienteRoutes.obtenerPacientesxDNI);//////////
//OBTENER HISTORIA CLINICA DE PACIENTE CON DATOS BASICOS: tipoDNI - nroDNI ---> usamos id en realidad
this.router.get('/historia-clinica/paciente/:idPaciente',historiaClinicaRoutes.obtenerHistoriaClinica); ///////
//OBTENER AFECCIONES DE LA HISTORIA CLINICA
this.router.get('/historia-clinica/:idHC',historiaClinicaRoutes.obtenerAfeccion);//////////////////////

this.router.get('/afeccion/:idAfeccion',afeccionRoutes.obtenerNombreAfeccion);


//OBTENER DIAGNOSTICO tipo atributo: DEFINITIVO DE AFECCION
//OBTENER TIPOS ---> Se va a hacer del lado del cliente
//this.router.get('/afeccion/:idAfeccion',afeccionRoutes.obtenerDiagnostico);
this.router.get('/diagnostico/:idDiagnostico',diagnosticoRoutes.obtenerDiagnostico);



//VERIFICAR MEDICACION ingresada por el CLIENTE
this.router.get('/medicacion/:nombre',medicacionRoutes.obtenerMedicacionPorXNombre);
//REGISTRAR TRATAMIENTO
console.log('pasa antes de post de tratamiento');
this.router.post('/tratamiento', tratamientoRoutes.registrarTratamiento);
console.log('pasa después de post de tratamiento');
// ASOCIO TRATAMIENTO A LA AFECCION CORRESPONDIENTE
this.router.put('/afeccion/:idAfeccion',afeccionRoutes.agregaTratamientoAAfeccion);
}
}
const altaTratamiento = new AltaTratamiento();
export default altaTratamiento.router;
