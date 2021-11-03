import * as tratamientoCtr from '../controllers/tratamiento.controller';
import { Request, Response } from 'express';
const  tratamiento = require("../models/tratamiento");
var mongoose = require('mongoose');

export async function obtenerTratamiento(req: Request, res: Response) {
   // const consultaId=mongoose.Types.ObjectId(req.params.idConsulta);
     await tratamientoCtr.obtenerTratamientos().then(async data => {
        res.json(data);
    });
}

export async function obtenerTratamientoXTipo(req: Request, res: Response) {
  //  const consultaId=mongoose.Types.ObjectId(req.params.idConsulta);
  //  await afeccionCtr.validarConsulta(consultaId).then(async data => {
     const tipoId=mongoose.Types.ObjectId(req.params.tipoId);
    await tratamientoCtr.obtenerTratamientoXTipo(tipoId).then(async data => {
        res.json(data);
    });

};

export async function obtenerTratamientoXId(req: Request, res: Response) {
    //  const consultaId=mongoose.Types.ObjectId(req.params.idConsulta);
    //  await afeccionCtr.validarConsulta(consultaId).then(async data => {
        console.log("entro con ",req.params.idTratamiento)
       const tratamientoId=mongoose.Types.ObjectId(req.params.idTratamiento);
       console.log(tratamientoId)
      await tratamientoCtr.obtenerTratamientoXId(tratamientoId).then(async data => {
          res.json(data);
      });
  
  };


export async function obtenerTratamientosxMedico(req: Request, res: Response) {
    const medicoId=mongoose.Types.ObjectId(req.params.idMedico);
    let fechaDesde:any;
    let fechaHasta:any;
    if(req.query){
         fechaDesde = req.query.fechaDesde;
         fechaHasta = req.query.fechaHasta;
    }
     await tratamientoCtr.obtenerTratamientosxMedico(medicoId,fechaDesde,fechaHasta).then(async data => {
        if(data.length == 0){
            res.status(400).json({
                title: 'Ocurrió un error'
            });
           }else{
            res.json(data);
           }
    });
}


export async function registrarTratamiento(req: Request, res: Response) {
    const datosTratamiento: any = new tratamiento(req.body);
    await tratamientoCtr.validarTratamiento(datosTratamiento).then(async data => {
    console.log("paso por acá con ",datosTratamiento)
        if(data && data.valido){
            console.log("entroo")
            await datosTratamiento.save();
            console.log("salgo")
        }
    res.json({status: res.status, data: data});
});

}

