
import * as centroSaludCtr from '../controllers/centroSalud.controller';
import { Router, Request, Response } from 'express';

export async function obtenerCentrosSalud(req: Request, res: Response) {
    console.log("Ruta centro salud")
   await centroSaludCtr.obtenerCentrosSalud().then(async data => {
       console.log("resultado ruta", data);
        res.json(data);
    });
}