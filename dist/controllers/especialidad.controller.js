"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerEspecialidadxID = void 0;
const especialidad = require("../models/especialidad");
function obtenerEspecialidadxID(id) {
    return new Promise((resolve, reject) => {
        especialidad.findById(id, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                if (data) {
                    resolve(data);
                }
                else {
                    reject(null);
                }
            }
        });
    });
}
exports.obtenerEspecialidadxID = obtenerEspecialidadxID;
