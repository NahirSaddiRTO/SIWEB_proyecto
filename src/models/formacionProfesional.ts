import * as mongoose from 'mongoose';


const formacionProfesionalSchema = new mongoose.Schema({
    nroMatricula: {type: String,required: true},
    tipoMatricula: { type: String,required: true},
    fechaTitulo: { type: Date,required: true},
    especialidad: {'_id':mongoose.Schema.Types.ObjectId},
});

const formacionProfesional = mongoose.model('formacionProfesional', formacionProfesionalSchema,'FormacionProfesional');

export = formacionProfesional;


