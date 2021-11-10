"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDENTIFICACION = exports.ESTADOCIVIL = exports.SEXO = void 0;
exports.SEXO = {
    type: String,
    enum: ['femenino', 'masculino', 'otro']
};
exports.ESTADOCIVIL = {
    type: String,
    enum: ['casado', 'separado', 'divorciado', 'viudo', 'soltero', 'concubino', 'otro', null]
};
exports.IDENTIFICACION = {
    type: String,
    enum: ['documentoExtranjero', 'pasaporte', 'DNI', 'LC', 'LE'],
    required: true
};
