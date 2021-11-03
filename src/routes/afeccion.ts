import * as afeccionCtr from '../controllers/afeccion.controller';
import { Request, Response } from 'express';
var mongoose = require('mongoose');

export async function obtenerAfecciones(req: Request, res: Response) {
   
    await afeccionCtr.obtenerAfecciones().then(async data => {
        res.json(data);
    });
}
export async function obtenerSintomasAfeccion(req: Request, res: Response) {
    const afeccionId=mongoose.Types.ObjectId(req.params.idAfeccion);
    await afeccionCtr.obtenerSintomasAfeccion(afeccionId).then(async data => {
        console.log("LA DATA",data);
        if (data.length==0) {
            console.log("ERROR");
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else{
        res.json(data);} //con afeccionId nos trae solo el id de la afección
    });
}

export async function obtenerTratamientosAfeccion(req: Request, res: Response) {
    const afeccionId=mongoose.Types.ObjectId(req.params.idAfeccion);
    await afeccionCtr.obtenerSintomasAfeccion(afeccionId).then(async data => {
        console.log("LA DATA",data);
        if (data.length==0) {
            console.log("ERROR");
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else{
        res.json(data);} //con afeccionId nos trae solo el id de la afección
    });
}

/*export async function obtenerDiagnostico(req: Request, res: Response) {
    const afeccionId=mongoose.Types.ObjectId(req.params.idAfeccion);
   // console.log("El id de la afeccion es? ",afeccionId);
    await afeccionCtr.obtenerDiagnostico(afeccionId).then(async data => {
       // console.log("La data es afeccion o diagnositico? ",data);
        if (data.length===0) {
            console.log("ERROR");
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else{
        res.json(data);}

    });
}*/



export async function obtenerNombreAfeccion(req: Request, res: Response) {
    const afeccionId=mongoose.Types.ObjectId(req.params.idAfeccion);
   // console.log("El id de la afeccion es? ",afeccionId);
    await afeccionCtr.obtenerNombreAfeccion(afeccionId).then(async data => {
        console.log("La data es afeccion o diagnositico? ",data);
        //if (data.length===0) {
            if (data==null) {
            console.log("ERROR");
            res.status(400).json({
                title: 'Ocurrió un error'
            });
        }
        else{
        res.json(data);}

    });
}




export async function agregaConsultaAAfeccion(req: Request, res: Response) {
    const afeccionId=mongoose.Types.ObjectId(req.params.idAfeccion);
    if (!(mongoose.Types.ObjectId.isValid(afeccionId))) {
        res.json(404);
    }
    else{
        const consultaID = req.body;
        await afeccionCtr.agregaConsultaAAfeccion(afeccionId,consultaID).then(async data => {
            if(data.valido){
                res.json({status: res.status, data: data});
            }else{
                res.status(400).json({
                    status: res.status, data: data
                });
            }
            });
        }
    }
        

export async function agregaTratamientoAAfeccion(req: Request, res: Response) {
    const afeccionId=mongoose.Types.ObjectId(req.params.idAfeccion);
    if (!(mongoose.Types.ObjectId.isValid(afeccionId))) {
        res.json(404);
    }
    else{
        const consultaID = req.body;
        await afeccionCtr.agregaTratamientoAAfeccion(afeccionId,consultaID).then(async data => {
            res.json({status: res.status, data: data});
            });
        }   
}