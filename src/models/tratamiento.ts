import * as mongoose from 'mongoose';
import * as medicoSchema from '../models/medico';

const tratamientoSchema = new mongoose.Schema({
  /*  _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,},*/
    descripcion: {type: String,required: true},
    duracion_en_dias: {type: Number,required: false},
    fecha: {type: Date,required: true},
    tipo: {type: String,required: true},
    Medico:{'_id':mongoose.Schema.Types.ObjectId},
    Medicacion:[{'_id':mongoose.Schema.Types.ObjectId}]
});

const tratamiento = mongoose.model('tratamiento', tratamientoSchema,'Tratamiento');

export = tratamiento;