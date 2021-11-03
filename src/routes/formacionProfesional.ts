
import * as formacionProfesionalCtr from '../controllers/formacionProfesional.controller';
import * as especialidadCtr from '../controllers/especialidad.controller';

import { Router, Request, Response } from 'express';

export async function obtenerFormacionProfesional(req: Request, res: Response) {
    const nroMatricula = req.params.nro;
    const tipoMatricula = req.params.tipo;
    
    formacionProfesionalCtr.obtenerFormacionProfesional(nroMatricula,tipoMatricula).then(async data => {
        const especialidad = data;
      //  const resultados = await especialidadCtr.obtenerEspecialidadxID(especialidad);
       // console.log("resultado",resultados);
       if(especialidad.length == 0){
        res.status(400).json({
            title: 'Ocurrió un error'
        });
       }else{
        res.json(especialidad);
       }
    });
}

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