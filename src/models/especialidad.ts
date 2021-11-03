import * as mongoose from 'mongoose';

const especialidadSchema = new mongoose.Schema({
    nombre: {type: String,required: true},
    institucion: { type: String}

});

const especialidad = mongoose.model('especialidad', especialidadSchema,'Especialidad');

export = especialidad;