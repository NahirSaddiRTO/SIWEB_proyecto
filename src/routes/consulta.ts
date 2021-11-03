import * as consultaCtr from '../controllers/consulta.controller';
import { Request, Response } from 'express';
const  consulta = require("../models/consulta");
var mongoose = require('mongoose');

export async function obtenerConsultasMedico(req: Request, res: Response) {
    const medicoId=mongoose.Types.ObjectId(req.params.idMedico);
    let fechaDesde:any;
    let fechaHasta:any;
    if(req.query){
         fechaDesde = req.query.fechaDesde;
         fechaHasta = req.query.fechaHasta;
    }
     await consultaCtr.obtenerConsultasMedico(medicoId,fechaDesde,fechaHasta).then(async data => {
        if(data.length == 0){
            res.status(200).json({
                title: 'No hay consultas en esa fecha'
            });
           }else{
            res.json(data);
           }
    });
}

export async function obtenerConsultasPaciente(req: Request, res: Response) {
    const pacienteId=mongoose.Types.ObjectId(req.params.idPaciente);
    let fechaDesde:any;
    let fechaHasta:any;
    if(req.query){
         fechaDesde = req.query.fechaDesde;
         fechaHasta = req.query.fechaHasta;
    }
     await consultaCtr.obtenerConsultasPaciente(pacienteId,fechaDesde,fechaHasta).then(async data => {
        if(data.length == 0){
            res.status(200).json({
                title: 'No hay consultas en esa fecha'
            });
           }else{
            res.json(data);
           }
    });
}


export async function registrarConsulta(req: Request, res: Response) {
        const datosConsulta: any = new consulta(req.body);
        await consultaCtr.validarConsulta(datosConsulta).then(async data => {
            if(data && data.valido){
                await datosConsulta.save();
            }
        res.json({status: res.status, data: data});
});
}
