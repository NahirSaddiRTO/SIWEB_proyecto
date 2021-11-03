import * as mongoose from 'mongoose';
import * as constantes from '../models/constantes';

const medicoSchema = new mongoose.Schema({
    nombre: {type: String,required: true},
    apellido: {type: String,required: true},
    calle: {type: String,required: false},
    altura: {type: Number,required: false},
    piso:{type: Number,required: false},
    tipoDni:constantes.IDENTIFICACION,
    nroDocumento:{type: String,required: true},
    telefono:{type: [Number],required: true},
    formacionProfesional:{'_id':mongoose.Schema.Types.ObjectId},
    sexo:constantes.SEXO
});

const medico = mongoose.model('medico', medicoSchema,'Medico');

export = medico;