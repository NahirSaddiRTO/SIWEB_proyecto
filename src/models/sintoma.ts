import * as mongoose from 'mongoose';

const sintomaSchema = new mongoose.Schema({
    nombre: {type: String,required: true},
    descripcion: { type: String,required: true },

});

const sintoma = mongoose.model('sintoma', sintomaSchema);

export = sintoma;