import * as mongoose from 'mongoose';

const diagnosticoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    fechaHora: {type: Date,required: true},
    descripcion: { type: Date, required:true},
    tipoDiagnostico: { type: String, required: true}

});

const diagnostico = mongoose.model('diagnostico', diagnosticoSchema,'Diagnostico');

export = diagnostico;