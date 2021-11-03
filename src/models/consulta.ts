import * as mongoose from 'mongoose';

const consultaSchema = new mongoose.Schema({
    fechaHora: {type: Date,required: true},
    motivo: { type: String, required: true },
    paciente: {'_id':mongoose.Schema.Types.ObjectId},
    medico: {'_id':mongoose.Schema.Types.ObjectId},
    centroSalud: {'_id':mongoose.Schema.Types.ObjectId}
    });

const consulta = mongoose.model('consulta', consultaSchema,'Consulta');

export = consulta;