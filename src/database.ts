import {connect} from 'mongoose';
const uri = "mongodb+srv://NahirSaddi:Nahir123456@dbsaludprov.pvodm.mongodb.net/Salud_Provincial?retryWrites=true&w=majority";
//const uri = "mongodb+srv://Caro:123456Caro@dbsaludprov.pvodm.mongodb.net/Salud_Provincial?retryWrites=true&w=majority";

const DATABASE_NAME = "Salud_Provincial";

export async function startConnection() {
   await connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
  console.log("MongoDB Atlas Conectado, BD:" + DATABASE_NAME)
}).catch(err => console.log(err))
}