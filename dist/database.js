"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
//const uri = "mongodb+srv://NahirSaddi:Nahir123456@dbsaludprov.pvodm.mongodb.net/Salud_Provincial?retryWrites=true&w=majority";
const uri = "mongodb+srv://Caro:123456Caro@dbsaludprov.pvodm.mongodb.net/Salud_Provincial?retryWrites=true&w=majority";
const DATABASE_NAME = "Salud_Provincial";
async function startConnection() {
    await (0, mongoose_1.connect)(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB Atlas Conectado, BD:" + DATABASE_NAME);
    }).catch(err => console.log(err));
}
exports.startConnection = startConnection;
