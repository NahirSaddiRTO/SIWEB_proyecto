
const  centroSalud = require("../models/centroSalud");


export async function obtenerCentrosSalud() {

    let doc = await centroSalud.find();
    console.log("controller Centro salud");
    return doc;
}

