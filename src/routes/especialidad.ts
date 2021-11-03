import * as especialidadCtr from '../controllers/especialidad.controller';
import { Router, Request, Response } from 'express';

export async function obtenerEspecialidadxID(req: Request, res: Response) {
     await especialidadCtr.obtenerEspecialidadxID(req.params.id).then(async data => {
        res.json(data);
    });
}