
const especialidad = require("../models/especialidad");

export function obtenerEspecialidadxID(id:any): Promise<{especialidad: any }> {
    return new Promise((resolve, reject) => {
        especialidad.findById(id, (err:any, data:any) => {
            if (err) {
                reject(err);
            } else {
                if (data) {
                    resolve(data);
                } else {
                    reject(null);
                }
            }
        });
    });
}
