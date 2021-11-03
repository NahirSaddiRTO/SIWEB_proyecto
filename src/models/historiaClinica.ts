import * as mongoose from 'mongoose';

const historiaClinicaSchema = new mongoose.Schema({
    legajo: {type: String,required: true},
    afeccion: {'_id':mongoose.Schema.Types.ObjectId},
    medicacion: {'_id':mongoose.Schema.Types.ObjectId},
 paciente: {'_id':mongoose.Schema.Types.ObjectId}
  
});

const historiaClinica = mongoose.model('historiaClinica', historiaClinicaSchema,'HistoriaClinica');
//const afec= mongoose.Model.schema.paths;
//export historiaClinicaSchema.afecc ="afeccion";
export = historiaClinica;// && afec;
//export = afec;