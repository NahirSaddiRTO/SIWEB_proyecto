"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const axios = require("axios");
//import axios from 'axios';

/*function index /*async*//*(ctx) {
  console.log("hola");
  const data = axios
    .get(
      "https://germany-pharmacy.p.rapidapi.com/dutyPharmacy?rapidapi-key=c618b05198msheb22ad30967b41bp17ab57jsn7059baff0c07"
    )
    .then(function (response) {
      console.log(response.data.result[0].name);
    })
    .catch(function (error) {
      console.error(error);
    });
}*/
/*function indext (ctx) {
  console.log("hola"); */ //"https://randommer.io/api/Name/Suggestions?startingWords=Med
/*const data = /*await*/ /*axios.get("https://randommer.io/api/Name?nameType=fullname&quantity=3",{headers: {'X-Api-Key':
  '1f77be0121a24557a2dd6f27b809fe81'}}).then(response=> {
      console.log(response.data[0]);
      const nombre=response.data[0];
      response.send(nombre)
    })
    .catch(function (error) {
      console.error(error);
    });
};*/

/*function indext (ctx) {
  console.log("hola"); //"https://randommer.io/api/Name/Suggestions?startingWords=Med
  const res = axios.get("https://randommer.io/api/Name?nameType=fullname&quantity=3",{headers: {'X-Api-Key':'1f77be0121a24557a2dd6f27b809fe81'}});
  console.log(res.data[0]);
  const nombre=res.data[0];
  res.send(nombre)
};*/

/*function indext (ctx) {
  console.log("hola"); 
  axios.get("https://randommer.io/api/Name?nameType=fullname&quantity=3",{headers: {'X-Api-Key':'1f77be0121a24557a2dd6f27b809fe81'}})
  .then(response => {
    console.log(response.data)
    console.log(ctx.send(response.toJson.data)) // <= send data to the client
    //return response.data;
  })
  .catch(err => {
    console.log(err)
    ctx.send({ err }) // <= send error
  });
  
};
*/

/*indext: async (ctx) {
  console.log("hola"); 
  const resultado= await axios.get("https://randommer.io/api/Name?nameType=fullname&quantity=3",{headers: {'X-Api-Key':'1f77be0121a24557a2dd6f27b809fe81'}})
  .then(response => {
    console.log(response.data)
    console.log(ctx.send(response.toJson.data)) // <= send data to the client
    //return response.data;
  })
  .catch(err => {
    console.log(err)
    ctx.send({ err }) // <= send error
  });
  return resultado;
}*/

module.exports = {
  index: async(ctx) =>{
    console.log("hola");
    const laData = axios.get(
        "https://germany-pharmacy.p.rapidapi.com/dutyPharmacy?rapidapi-key=c618b05198msheb22ad30967b41bp17ab57jsn7059baff0c07")
        .then(function (response) {
        //console.log(response.data.result[0].name);
        console.log(ctx.send(response.data[0]));
      })
      .catch(function (error) {
        console.error(error);
      });
      return laData;
  },
  indext: async (ctx) => {
    //console.log("holaaaa");
    let laData='';
    const resultado = await axios.get("https://randommer.io/api/Name?nameType=fullname&quantity=1", {
        headers: { "X-Api-Key": "1f77be0121a24557a2dd6f27b809fe81" },
      })
      .then((response) => {
        console.log(response.data);
        laData=response.data[0];
        ctx.send(response.data)
        //console.log(ctx.send(response.data)); // <= send data to the client

        //return response.data;
      })
      .catch((err) => {
        console.log(err);
        ctx.send({ err }); // <= send error
      });
     // console.log('el resultado',laData)
    return laData;
  },
};

/* import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://germany-pharmacy.p.rapidapi.com/dutyPharmacy',
  params: {city: 'hamburg'},
  headers: {
    'x-rapidapi-host': 'germany-pharmacy.p.rapidapi.com',
    'x-rapidapi-key': 'c618b05198msheb22ad30967b41bp17ab57jsn7059baff0c07'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});*/
