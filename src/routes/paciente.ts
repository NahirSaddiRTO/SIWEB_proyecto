var paciente= require('../models/paciente');
import * as pacienteCtr from '../controllers/paciente.controller';
import { Request, Response } from 'express';

export async function obtenerPacientesxDNI(req: Request, res: Response) {
    const nrodocumento = req.params.nroDoc;
    const tipodni = req.params.tipoDoc;
    pacienteCtr.obtenerPacientesxDNI(nrodocumento,tipodni).then(async data => {
        const paciente = data;
       
        //console.log(req.body);
        //res.json(paciente);
        if(paciente.length === 0){
            res.status(400).json({
                title: 'Ocurrió un error'
            });
           }else{
            res.json(paciente);
           }
    });
}

export async function registrarPaciente(req: Request, res: Response) {
    try{    
    if(req.body && req.body.nrodocumento && req.body.tipodni){
        await pacienteCtr.obtenerPacientesxDNI(req.body.nrodocumento,req.body.tipodni).then(async data => {
            if(data.length == 0){
                const datosPaciente: any = new paciente(req.body);
                await pacienteCtr.registrarPaciente(datosPaciente).then(async data => {
                    if(data.valido){
                        res.json({status: res.status, data: data});
                    }else{
                        res.status(400).json({
                            status: res.status, data: data
                        });
                    }
                    
                   
            });
        }
        else{
            res.status(400).json({  status: res.status, data: {valido:false, datosConsulta: "PACIENTE EXISTENTE"}}
               
            );
        }
        });
    }
    res.status(400).json(
        {  status: res.status, data: {valido:false, datosConsulta: "Falta nro y tipo dni"}}
    );
    

}
catch (err) {
    return err;
}}


