import * as medicacionCtr from '../controllers/medicacion.controller';
import { Request, Response } from 'express';
import medicacion from '../models/medicacion';
var mongoose = require('mongoose');

export async function obtenerMedicacionxNombre(req: Request, res: Response) {
    console.log("entro al back y me fijo si entra el nombre: ",req.params.nombre)
    const nombre = req.params.nombre;

   // console.log("Paso por acá");
    medicacionCtr.obtenerMedicacionPorNombre(nombre).then(async data => {

        const medicacion = data;
        console.log(medicacion);
        if(medicacion.length == 0){

           res.status(400).json({
                title: 'Ocurrió un error'
            });
           }else{
            res.json({medicacion});
       }
    });
}

export async function obtenerMedicacionPorXNombre(req: Request, res: Response) {
    console.log("entro al back y me fijo si entra el nombre: ",req.params.nombre)
    const nombre = req.params.nombre;

   // console.log("Paso por acá");
    medicacionCtr.obtenerMedicacionXNombre(nombre).then(async data => {

        const medicacion = data;
        console.log(medicacion);
        if(medicacion.length == 0){

           res.status(400).json({
                title: 'Ocurrió un error'
            });
           }else{
            res.json({medicacion});
       }
    });
}
  
  
  export async function obtenerMedicacionxID(req: Request, res: Response) {
    await medicacionCtr.obtenerMedicacionxID(req.params.idMedicacion).then(async data => {
        if(!data){
            res.status(400).json({
                title: 'Ocurrió un error'
            });
           }else{
            res.json(data);
           }
   });
}