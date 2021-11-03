import express from 'express';
import morgan from 'morgan';
//Declaro rutas
import indexRoutes from './routes/index';

//Declaro transacciones
import altaConsulta from './transacciones/alta-consulta.transaccion';
import altaPacienteHC from './transacciones/alta-paciente-hc.transaccion';
import consultaMedicaciones from './transacciones/consulta-medicaciones.transaccion';
import altaTratamiento from './transacciones/alta-tratamiento.transaccion';
import consultaTratamiento from './transacciones/consulta-tratamientosdiag_pAfeccion.transaccion';

class Applicaction {

    app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', process.env.PORT || 4000);
    }
    

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Access-Control-Allow-Methods', '*');
            
            

            next();
          });
    }

    routes() {
        this.app.use('/', indexRoutes);
        this.app.use('/alta-consulta', altaConsulta);
        this.app.use('/alta-paciente-hc', altaPacienteHC);
        this.app.use('/consultaMedicaciones', consultaMedicaciones);
        this.app.use('/alta-tratamiento', altaTratamiento);
        this.app.use('/consulta-tratamientos', consultaTratamiento);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Servidor corriendo ', this.app.get('port'));
        });
    }
}

export default Applicaction;