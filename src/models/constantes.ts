
export const SEXO = {
    type: String,
    enum: ['femenino', 'masculino', 'otro']
};

export const ESTADOCIVIL = {
    type: String,
    enum: ['casado', 'separado', 'divorciado', 'viudo', 'soltero', 'concubino', 'otro', null]
};


export const IDENTIFICACION = {
    type: String,
    enum: ['documentoExtranjero', 'pasaporte','DNI','LC','LE'],
    required: true
};

