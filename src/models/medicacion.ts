import * as mongoose from 'mongoose';

const medicacionSchema = new mongoose.Schema({
    nombre: {type: String,required: true},
    proposito: {type: String, required: true  },
    dosis: { type: String, required: true },
});

const medicacion = mongoose.model('medicacion', medicacionSchema,'Medicacion');

export = medicacion;