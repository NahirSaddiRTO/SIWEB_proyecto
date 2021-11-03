import * as mongoose from 'mongoose';

const centroSaludSchema = new mongoose.Schema({
    nombre: {type: String,required: true},
    direccion: { type: String,required: true},
    telefono: { type: String,required: true},
    localidad: { type: String,required: true}

});

const centroSalud = mongoose.model('centroSalud', centroSaludSchema,'CentroSalud');

export = centroSalud;