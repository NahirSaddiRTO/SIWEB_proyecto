  
import * as mongoose from 'mongoose';
import * as constantes from '../models/constantes';

const pacienteSchema = new mongoose.Schema({
    nrodocumento:{type: String,required: true},
    tipodni:constantes.IDENTIFICACION,
    nombre: {type: String,required: true},
    apellido: {type: String,required: true},
    piso:{type: Number,required: false},
    calle: {type: String,required: false},
    altura: {type:Number,required: false},
    fechanacimiento:{type: Date,required: true},
    estado:constantes.ESTADOCIVIL,
    telefono_pac:[{type: Number,required: false}],
    sexo:constantes.SEXO
});

const paciente = mongoose.model('paciente', pacienteSchema,'Paciente');

export = paciente;