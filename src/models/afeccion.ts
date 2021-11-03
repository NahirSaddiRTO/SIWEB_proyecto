
import * as mongoose from 'mongoose';


const afeccionSchema = new mongoose.Schema({
    nombre: {type: String,required: true},
    tratamiento:[{'_id':mongoose.Schema.Types.ObjectId}]                                                                                       ,
    sintomas:[{'_id':mongoose.Schema.Types.ObjectId}],
    consulta: [{'_id':mongoose.Schema.Types.ObjectId}],
    diagnostico:{'_id':mongoose.Schema.Types.ObjectId},

});

const afeccion = mongoose.model('afeccion', afeccionSchema,'Afeccion');


export = afeccion;