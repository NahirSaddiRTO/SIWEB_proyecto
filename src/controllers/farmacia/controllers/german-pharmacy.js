const axios = require('axios');

module.exports = {
  index: async ctx =>{
    console.log('hola');
    const data = await axios.get('https://germany-pharmacy.p.rapidapi.com/dutyPharmacy');
    ctx.send(data)
    console.log(data);
  }
};

/*module.exports={
  index: async ctx =>{
      await strapi.plugins['email'].services.email.send({
          text:"Este correo es de prueba. Si le llegó es que el servicio se encuentra funcionando correctamente"
      });
      ctx.send("Email enviado!");
  }
}*/

/*var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://pharmacity.p.rapidapi.com/graphqli',
  params: {query: 'query GetProducts{product{id,name}}'},
  headers: {
    'x-rapidapi-host': 'pharmacity.p.rapidapi.com',
    'x-rapidapi-key': 'c618b05198msheb22ad30967b41bp17ab57jsn7059baff0c07'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/