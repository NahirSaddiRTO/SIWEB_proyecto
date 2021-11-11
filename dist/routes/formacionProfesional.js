"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerFormacionProfesional = void 0;
const formacionProfesionalCtr = __importStar(require("../controllers/formacionProfesional.controller"));
async function obtenerFormacionProfesional(req, res) {
    const nroMatricula = req.params.nro;
    const tipoMatricula = req.params.tipo;
    formacionProfesionalCtr.obtenerFormacionProfesional(nroMatricula, tipoMatricula).then(async (data) => {
        const especialidad = data;
        //  const resultados = await especialidadCtr.obtenerEspecialidadxID(especialidad);
        // console.log("resultado",resultados);
        if (especialidad.length == 0) {
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else {
            res.json(especialidad);
        }
    });
}
exports.obtenerFormacionProfesional = obtenerFormacionProfesional;
/*export async function obtenerFormacionProfesionalEspecialidad(req: Request, res: Response) {
    const nroMatricula = req.params.nro;
    const tipoMatricula = req.params.tipo;
    const especialidad = req.params.especialidad;
    
    formacionProfesionalCtr.obtenerFormacionProfesional(nroMatricula,tipoMatricula).then(async data => {
        const especialidad = data;
      //  const resultados = await especialidadCtr.obtenerEspecialidadxID(especialidad);
       // console.log("resultado",resultados);
       console.log(req.body);
        res.json(especialidad);
    });
}*/ 
