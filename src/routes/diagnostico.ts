import * as diagnosticoCtr from '../controllers/diagnostico.controller';
import { Router, Request, Response } from 'express';
var mongoose = require('mongoose');



export async function obtenerDiagnostico(req: Request, res: Response) {
    console.log("ENTRO AL BACK ")
    const diagnosticoId=mongoose.Types.ObjectId(req.params.idDiagnostico);
    console.log("El id de la diagnostico es? ",diagnosticoId);
    await diagnosticoCtr.obtenerDiagnostico(diagnosticoId).then(async data => {
        console.log("La data es diagnositico??????? ",data);
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

