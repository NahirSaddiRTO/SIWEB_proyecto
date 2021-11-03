import { Router} from 'express';
import * as formProfesionalRoutes from '../routes/formacionProfesional';
import * as medicoRoutes from '../routes/medico';
import * as tratamientoRoutes from '../routes/tratamiento';
import * as medicacionRoutes from '../routes/medicacion';


class ConsultaMedicaciones {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

  routes() {
    //OBTENER FORMACION PROFESIONAL POR NRO Y TIPO DE MATRICULA
    this.router.get('/formacion-profesional/:tipo/:nro', formProfesionalRoutes.obtenerFormacionProfesional);
    //OBTENER MÉDICO DE ESTA MATRICULA Y ESPECIALIDAD
    this.router.get('/medico/:idFormacion', medicoRoutes.obtenerMedicoxFormacion);
    //OBTENER TRATAMIENTOS EN RANGO FECHAS, CON MEDICO INGRESADO
    this.router.get('/tratamiento/:idMedico?', tratamientoRoutes.obtenerTratamientosxMedico);
    //OBTENER MEDICACIONES DE ESOS TRATAMIENTO
    this.router.get('/medicaciones/:idMedicacion?', medicacionRoutes.obtenerMedicacionxID);
    }
}

const consultaMedicaciones = new ConsultaMedicaciones();

export default consultaMedicaciones.router;