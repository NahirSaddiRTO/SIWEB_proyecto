import * as medicoCtr from '../controllers/medico.controller';
import { Router, Request, Response } from 'express';
var mongoose = require('mongoose');



export async function obtenerMedicoxFormacion(req: Request, res: Response) {
    const formacionId=mongoose.Types.ObjectId(req.params.idFormacion);
     await medicoCtr.obtenerMedicoxFormacion(formacionId).then(async data => {
         console.log("la data",data);
        if(data.length == 0){
            res.status(400).json({
                title: 'Ocurrió un error'
            });
           }else{
            res.json(data);
           }
    });
}

export async function obtenerMedicosXMatriculaEspecialidad(req: Request, res: Response) {
    const nroMatricula = req.params.nroMatricula;
    const tipoMatricula = req.params.tipoMatricula;
    
   // const medicoId=mongoose.Types.ObjectId(req.params.idMedico);
    //  await medicoCtr.obtenerMedicosXMatriculaEspecialidad(nroMatricula,tipoMatricula).then(async data => {
    //     const medico=data;
    //     res.json(medico);
    // });
}

