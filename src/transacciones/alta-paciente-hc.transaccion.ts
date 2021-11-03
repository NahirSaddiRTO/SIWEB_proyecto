import { Router} from 'express';
import * as pacienteRoutes from '../routes/paciente'; 
import * as historiaClinicaRoutes from '../routes/historiaClinica'; 
/*ESTA TRANSACCIÓN SE LLAMA EN ALTA-CONSULTA*/

class AltaPacienteHC {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

  routes() {
      //REGISTRAR PACIENTE
      this.router.post('/paciente/?', pacienteRoutes.registrarPaciente);
      //REGISTRAR HC
      this.router.post('/historiaClinica/?', historiaClinicaRoutes.registrarHC);
    
    }
}

const altaPacienteHC = new AltaPacienteHC();

export default altaPacienteHC.router;