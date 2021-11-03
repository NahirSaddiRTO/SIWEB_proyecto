
import * as historiaClinicaCtl from '../controllers/historiaClinica.controller';

import hc from '../models/historiaClinica';
import afeccion from '../models/afeccion';
import { Request, Response } from 'express';
var mongoose = require('mongoose');

import * as pacienteCtr from '../controllers/paciente.controller';
import * as afeccionCtr from '../controllers/afeccion.controller';

export async function registrarHC(req: Request, res: Response) {
        const datosHC: any = new hc(req.body);
        let docPaciente;
        if(req.body.paciente){
                const paciente = req.body.paciente;
                const pacienteId=mongoose.Types.ObjectId(paciente._id);
                await pacienteCtr.obtenerPacientexID(pacienteId).then(async data => {       
                docPaciente=data.nrodocumento;
                 });
                 await historiaClinicaCtl.registrarHC(datosHC,docPaciente).then(async data => {
                          res.json({status: res.status, data: data});
                        });
                  
        }else{
            res.status(400).json({
               error: 'No hay paciente para crear HC'
            });
        }
 

    }
    
export async function obtenerHistoriaClinica(req: Request, res: Response) {
    console.log("Por parametro me viene esto ",req.params.idPaciente)
        const pacienteId = mongoose.Types.ObjectId(req.params.idPaciente);
        console.log("a ver el id del paciente ",pacienteId);
        await historiaClinicaCtl.obtenerHCxPaciente(pacienteId).then(async data => {
            if(data.length == 0){
                res.status(400).json({
                    title: 'Ocurrió un error'
                });
               }else{
                   //console.log("desde la transaccion la hc es: ",res) //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                res.json(data);
               }
    });
    }

    export async function obtenerAfeccionesHC(req: Request, res: Response) {
        const legajo = req.params.legajoHC;
        await historiaClinicaCtl.obtenerAfeccionDeHC(legajo).then(async data => {
            res.json({status: res.status, data: data});
    });
    }


   /* export async function obtenerAfeccion(req: Request, res: Response) {
        const idHc = req.params.hcId;

        console.log("Lo que se manda", req.params);
        historiaClinicaCtl.obtenerAfeccion(idHc).then(async data => {
            const afeccion = data;
            console.log("Resultado de DATA",afeccion);
            if(afeccion.length == 0){
                res.status(400).json({
                    title: 'Ocurrió un error'
                });
               }else{
                res.json(afeccion);
               }
          // console.log(req.body);
          //  res.json(afeccion);
        });
    }*/

    export async function obtenerAfeccion(req: Request, res: Response) {

        const idAfeccion = req.params;

        //console.log("Veamos que se manda ",typeof idAfeccion);
        historiaClinicaCtl.obtenerAfeccion(idAfeccion).then(async data => {
            const afeccion:any = data;
            
            if(afeccion.length == 0){
                res.status(400).json({
                    title: 'Ocurrió un error'
                });
               }else{
                res.json(afeccion);
                console.log("La afeccion del data es ",res.json)
               }
          // console.log(req.body);
          //  res.json(afeccion);
        });
    }


