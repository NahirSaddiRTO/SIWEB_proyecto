import { Router} from 'express';
import * as centroSaludRoutes from '../routes/centroSalud';
import * as formProfesionalRoutes from '../routes/formacionProfesional';
import * as medicoRoutes from '../routes/medico';
import * as consultaRoutes from '../routes/consulta';
import * as pacienteRoutes from '../routes/paciente';   
import * as afeccionRoutes from '../routes/afeccion';

class AltaConsulta {
    router: Router;
    
    constructor() {                                             
        this.router = Router();
        this.routes();
    }

  routes() {
      //OBTENER CENTROS DE SALUD
      this.router.get('/centro-salud', centroSaludRoutes.obtenerCentrosSalud);
      //OBTENER FORMACION PROFESIONAL POR NRO Y TIPO DE MATRICULA
      this.router.get('/formacion-profesional/:tipo/:nro', formProfesionalRoutes.obtenerFormacionProfesional);
      //OBTENER MÉDICO CON ESA FORMACION PROFESIONAL
       this.router.get('/medico/:idFormacion', medicoRoutes.obtenerMedicoxFormacion);
       //OBTENER CONSULTAS DE ESE MEDICO EN UNA FECHA
       this.router.get('/consulta/medico/:idMedico?', consultaRoutes.obtenerConsultasMedico);
       //OBTENER PACIENTE
       this.router.get('/paciente/:tipoDoc/:nroDoc', pacienteRoutes.obtenerPacientesxDNI);
       
       //DAR ALTA PACIENTE CON HC

       //OBTENER CONSULTAS DEL PACIENTE EN UNA FECHA
       this.router.get('/consulta/paciente/:idPaciente?', consultaRoutes.obtenerConsultasPaciente);
       //OBTENER AFECCIONES
       this.router.get('/afecciones', afeccionRoutes.obtenerAfecciones);
       //REGISTRAR CONSULTA
        this.router.post('/consulta', consultaRoutes.registrarConsulta);
        // ASOCIO CONSULTA A LA AFECCION SELECCIONADA
        this.router.put('/afeccion/:idAfeccion',afeccionRoutes.agregaConsultaAAfeccion);
    }
}

const altaConsulta = new AltaConsulta();

export default altaConsulta.router;
