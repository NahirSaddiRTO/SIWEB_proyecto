"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
//Declaro rutas
const index_1 = __importDefault(require("./routes/index"));
//Declaro transacciones
const alta_consulta_transaccion_1 = __importDefault(require("./transacciones/alta-consulta.transaccion"));
const alta_paciente_hc_transaccion_1 = __importDefault(require("./transacciones/alta-paciente-hc.transaccion"));
const consulta_medicaciones_transaccion_1 = __importDefault(require("./transacciones/consulta-medicaciones.transaccion"));
const alta_tratamiento_transaccion_1 = __importDefault(require("./transacciones/alta-tratamiento.transaccion"));
const consulta_tratamientosdiag_pAfeccion_transaccion_1 = __importDefault(require("./transacciones/consulta-tratamientosdiag_pAfeccion.transaccion"));
class Applicaction {
    constructor() {
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', process.env.PORT || 4000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Access-Control-Allow-Methods', '*');
            next();
        });
    }
    routes() {
        this.app.use('/', index_1.default);
        this.app.use('/alta-consulta', alta_consulta_transaccion_1.default);
        this.app.use('/alta-paciente-hc', alta_paciente_hc_transaccion_1.default);
        this.app.use('/consultaMedicaciones', consulta_medicaciones_transaccion_1.default);
        this.app.use('/alta-tratamiento', alta_tratamiento_transaccion_1.default);
        this.app.use('/consulta-tratamientos', consulta_tratamientosdiag_pAfeccion_transaccion_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Servidor corriendo ', this.app.get('port'));
        });
    }
}
exports.default = Applicaction;
