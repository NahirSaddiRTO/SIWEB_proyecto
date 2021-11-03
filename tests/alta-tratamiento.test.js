"use strict";

//const app = require('../src/index')
const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const server = "http://localhost:4000/";
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
//before(async function (){app()})
describe("Alta de Tratamiento", () => {
  
  
  //  ##########
  // # CAMINO 1 #
  //  ##########
 /*   it("Debería: fallar al obtener la formación profesional", (done) => {
      
  // Busco formación profesiona
   chai.request(server)
      .get("alta-tratamiento/formacion-profesional/Medic/TU260259")
      .end(function (err, res) {

        expect(res.body).to.be.a("object");
        console.log(res.body);

        expect(res).to.have.status(400);
        done();
      });
  }).timeout(100000);
*/

  //    ##########
  // ##  CAMINO 2  ##
  //    ##########
 /*   it("Debería: fallar al obtener MEDICO con esa formación profesional", (done) => {
  // Busco formación profesional

      chai.request(server)
      .get("alta-tratamiento/formacion-profesional/Medica/TU260255")
      .end(function (err, res) {
        //Busco medico
        
        chai.request(server)
        
          .get("alta-tratamiento/medico/5dd72c512f455bb04699b39a") //ObjectId("5dd72c512f455bb04699b39f")// SERÌA ESTE: 5f666671837db53dd025f12b
          .end(function (err, res) {
            expect(res.body).to.be.a("object");
            console.log(res.body);
            expect(res).to.have.status(400); //AGREGAR STATUS 400 PARA QUE ENTRE POR ACÁ
            done();
          });

      });
  }).timeout(100000);

  //    ##########
  // ##  CAMINO 3  ##
  //    ##########
    it("Debería: fallar al obtener paciente (luego de ingresado, es decir, para verificar)", (done) => {
  
  
      // Busco formación profesional
    chai.request(server)
      .get("alta-tratamiento/formacion-profesional/Medica/TU260255")
      .end(function (err, unaFormProfesional) {
        
        var idFormProfesional=unaFormProfesional.body[0]._id;
        console.log("el id de la form profesional es",idFormProfesional);
        
        //Busco medico
        chai.request(server)
          .get("alta-tratamiento/medico/"+idFormProfesional) //tiene que ser uno correcto
          .end(function (err, res) {

            chai.request(server)
              // Busco paciente.. el paciente entra por teclado
              .get("alta-tratamiento/paciente/85002452/LE") // Acá sería DNI en lugar de LE
              .end(function (err, res) {
                expect(res.body).to.be.a("object");
                console.log(res.body);

                expect(res).to.have.status(400); //AGREGAR STATUS 400 PARA QUE ENTRE POR ACÁ
                done();
              });
          });
      });
  }).timeout(100000);
*/
  //    ##########
  // ##  CAMINO 4  ##
  //    ##########
 /*    it("Debería: fallar al obtener HC del paciente (para verificar)", (done) => {
  // Busco formación profesional
  chai.request(server)
  .get("alta-tratamiento/formacion-profesional/Medica/TU260255")
  .end(function (err, unaFormProfesional) {
    
    var idFormProfesional=unaFormProfesional.body[0]._id;
    console.log("el id de la form profesional es",idFormProfesional);
    
    //Busco medico
    chai.request(server)
      .get("alta-tratamiento/medico/"+idFormProfesional) //
          .end(function (err, res) {

            chai.request(server)
              // Busco paciente
              .get("alta-tratamiento/paciente/85002452/DNI") //
              .end(function (err, res) {
                
                // Busco HC del paciente
                chai.request(server)
                  .get("alta-tratamiento/historia-clinica/paciente/5dd6e11b2f455bb04699ad78") // ObjectId("5dd6e11b2f455bb04699ad7c")
                  //BUSCOOOO
                  .end(function (err, res) {
                    expect(res.body).to.be.a("object");
                    console.log(res.body);//SPOILER to be fixed: esta persona tiene 2 hc..
                    expect(res).to.have.status(400); //AGREGAR STATUS 400 PARA QUE ENTRE POR ACÁ
                    done();
                  });
              });
          });
      });
  }).timeout(100000);

  //    ##########
  // ##  CAMINO 5  ##
  //    ##########
    it("Debería: fallar al obtener/verificar HC del paciente (para obtener sus datos, con AFECCION)", (done) => {
    // Busco formación profesional
    chai
      .request(server)
      .get("alta-tratamiento/formacion-profesional/Medica/TU260255")//2do object en la bd
      .end(function (err,  unaFormProfesional) {
    
    var idFormProfesional=unaFormProfesional.body[0]._id;
    console.log("el id de la form profesional es",idFormProfesional);
    
    //Busco medico
    chai.request(server)
      .get("alta-tratamiento/medico/"+idFormProfesional) //
          .end(function (err, res) {
            chai
              .request(server)
              // Busco paciente
              .get("alta-tratamiento/paciente/85002452/DNI")//1er object en la bd
              .end(function (err, idUnPaciente) {
    
                var idPaciente=idUnPaciente.body[0]._id;
                console.log("el id del paciente es",idPaciente);
                
                // Busco HC del paciente
                chai.request(server)
                  .get("alta-tratamiento/historia-clinica/paciente/"+idPaciente)//yo tenía este antes 5f66669c837db53dd025f12f")
                  //Busco afecciones de historia clínica del paciente
                  .end(function (err, res) {
                    chai.request(server)
                      //TENES QUE PONER EL QUE ESTA MAL, ES DECIR, CON EL QUE PASE EL TEST!!!!!!!!!!!!!!!!!!
                      .get("alta-tratamiento/historia-clinica/5f66669c837db53dd025f13e") // ObjectId("5f66669c837db53dd025f130")2do objectid en la bd, de ahí tengo el paciente de arriba
                      .end(function (err, res) {
                        expect(res.body).to.be.a("object");
                        console.log(res.body);
                        expect(res).to.have.status(400); //AGREGAR STATUS 400 PARA QUE ENTRE POR ACÁ
                        done();
                      });
                  });
              });
          });
      });
  }).timeout(100000);
*/
  //    ##########
  // ##  CAMINO 6  ##
  //    ##########
/*  it("Debería: fallar al obtener todos los o el diagnosticos definitivos de UNA afección", (done) => {
    // Busco Diagnósticos definitivos de la Afeccion que es seleccionada por el CLIENTE
    chai
    .request(server)
    .get("alta-tratamiento/formacion-profesional/Medica/TU260255")//2do object en la bd
    .end(function (err,  unaFormProfesional) {
  
  var idFormProfesional=unaFormProfesional.body[0]._id;
  console.log("el id de la form profesional es",idFormProfesional);
  
  //Busco medico
  chai.request(server)
    .get("alta-tratamiento/medico/"+idFormProfesional) //
        .end(function (err, res) {
          chai
            .request(server)
            // Busco paciente
            .get("alta-tratamiento/paciente/85002452/DNI")//1er object en la bd
            .end(function (err, idUnPaciente) {
  
              var idPaciente=idUnPaciente.body[0]._id;
              console.log("el id del paciente es",idPaciente);
              
              // Busco HC del paciente
              chai.request(server)
                .get("alta-tratamiento/historia-clinica/paciente/"+idPaciente)//yo tenía este antes 5f66669c837db53dd025f12f")
                //Busco afecciones de historia clínica del paciente
                .end(function (err,idUnaHC) {
  
                  var idHC=idUnaHC.body[0]._id;
                  console.log("el id del paciente es",idHC);
                  
                  chai.request(server)
                      .get("alta-tratamiento/historia-clinica/"+idHC) // ObjectId("5f66669c837db53dd025f130")2do objectid en la bd, de ahí tengo el paciente de arriba
                      .end(function (err, res) {
                        chai.request(server)
                          .get(
                            "alta-tratamiento/afeccion/5dd6dfb72f455bb04699ad42"
                          ) // ObjectId("5dd6dfb72f455bb04699ad44")
                          .end(function (err, res) {
                            expect(res.body).to.be.a("object");
                            console.log(res.body);

                            expect(res).to.have.status(400); //AGREGAR STATUS 400 PARA QUE ENTRE POR ACÁ
                            done();
                          });
                      });
                  });
              });
          });
      });
  }).timeout(100000);
*/
  //    ##########
  // ##  CAMINO 7  ##
  //    ##########
 /* it("Debería: fallar al buscar las medicaciones por nombre", (done) => {
    chai
    .request(server)
    .get("alta-tratamiento/formacion-profesional/Medica/TU260255")//2do object en la bd
    .end(function (err,  unaFormProfesional) {
  
  var idFormProfesional=unaFormProfesional.body[0]._id;
  console.log("el id de la form profesional es",idFormProfesional);
  
  //Busco medico
  chai.request(server)
    .get("alta-tratamiento/medico/"+idFormProfesional) //
        .end(function (err, res) {
          chai
            .request(server)
            // Busco paciente
            .get("alta-tratamiento/paciente/85002452/DNI")//1er object en la bd
            .end(function (err, idUnPaciente) {
  
              var idPaciente=idUnPaciente.body[0]._id;
              console.log("el id del paciente es",idPaciente);
              
              // Busco HC del paciente
              chai.request(server)
                .get("alta-tratamiento/historia-clinica/paciente/"+idPaciente)//yo tenía este antes 5f66669c837db53dd025f12f")
                //Busco afecciones de historia clínica del paciente
                .end(function (err,idUnaHC) {
  
                  var idHC=idUnaHC.body[0]._id;
                  console.log("el id del paciente es",idHC);
                  
                  chai.request(server)
                      .get("alta-tratamiento/historia-clinica/"+idHC) // ObjectId("5f66669c837db53dd025f130")2do objectid en la bd, de ahí tengo el paciente de arriba
                      .end(function (err, idUnaAfeccion) {
  
                        //var idAfeccion=idUnaAfeccion;
                       // console.log("el id de la afeccion es",idAfeccion);


                        chai.request(server)
                          .get(
                            "alta-tratamiento/afeccion/5dd6dfb72f455bb04699ad44"
                          ) // ObjectId("5dd6dfb72f455bb04699ad44")
                          .end(function (err, res) {
                            // Busco medicaciones
                            chai
                              .request(server)
                              .get("alta-tratamiento/medicacion/rivotril")// usar amoxicilina para que de 200
                              .end(function (err, res) {
                                expect(res.body).to.be.a("object");
                                console.log(res.body);

                                expect(res).to.have.status(400); //AGREGAR STATUS 400 PARA QUE ENTRE POR ACÁ
                                done();
                              });
                          });
                      });
                  });
              });
          });
      });
  }).timeout(100000);

*/
  //    ##########
  // ##  CAMINO 8  ##
  //    ##########
/*  it("Debería: ser exitoso al guardar un tratamiento pero acá NO lo asocia a afeccion", (done) => {
    chai
    .request(server)
    .get("alta-tratamiento/formacion-profesional/Medica/TU260255")//2do object en la bd
    .end(function (err,  unaFormProfesional) {
  
  var idFormProfesional=unaFormProfesional.body[0]._id;
  console.log("el id de la form profesional es",idFormProfesional);
  
  //Busco medico
  chai.request(server)
    .get("alta-tratamiento/medico/"+idFormProfesional) //
        .end(function (err, res) {
          chai
            .request(server)
            // Busco paciente
            .get("alta-tratamiento/paciente/85002452/DNI")//1er object en la bd
            .end(function (err, idUnPaciente) {
  
              var idPaciente=idUnPaciente.body[0]._id;
              console.log("el id del paciente es",idPaciente);
              
              // Busco HC del paciente
              chai.request(server)
                .get("alta-tratamiento/historia-clinica/paciente/"+idPaciente)//yo tenía este antes 5f66669c837db53dd025f12f")
                //Busco afecciones de historia clínica del paciente
                .end(function (err,idUnaHC) {
  
                  var idHC=idUnaHC.body[0]._id;
                  console.log("el id del paciente es",idHC);
                  
                  chai.request(server)
                      .get("alta-tratamiento/historia-clinica/"+idHC) // ObjectId("5f66669c837db53dd025f130")2do objectid en la bd, de ahí tengo el paciente de arriba
                      .end(function (err, idUnaAfeccion) {
  
                        //var idAfeccion=idUnaAfeccion;
                       // console.log("el id de la afeccion es",idAfeccion);

                        chai.request(server)
                          .get(
                            "alta-tratamiento/afeccion/5dd6dfb72f455bb04699ad44"
                          ) // ObjectId("5dd6dfb72f455bb04699ad44")
                          .end(function (err, res) {
                          // Busco medicaciones
                          chai.request(server)
                            .get("alta-tratamiento/medicacion/amoxicilina") // usar amoxicilina para que de 200
                          //  console.log('despues de get de medicacion')
                            .end( (err, res) =>{
                                chai.request(server)
                                .post("alta-tratamiento/tratamiento")
                                .send({
                                  //////////////////
                                  //¿En dónde daría error? cómo hago??
                                  ////////////////////
                                  descripcion:"administrar por 7 días cada 8hs" ,
                                  duracion_en_dias: 12,
                                  fecha: "2018-04-09",
                                  tipo: "Farmacologico",
                                  Medico: { "_id": "5dd72c512f455bb04699b39f"},
                                  Medicacion:{ "_id": "5f665f03837db53dd025f117"}
                                  //AGREGAR TRATAMIENTO A LA AFECCION
                                }).end((error, tratamientoNuevo) => {
                                 // expect(res.body).to.be.a("object");
                                  expect(tratamientoNuevo).to.have.status(200);
                                  done();
                                });
                           //   });
                            });
                        });
                    });
                });
            });
        });
      });
    }).timeout(100000);

*/



     //    ##########
  // ##  CAMINO 9  ##
  //    ##########
 /* it("Debería: ser exitoso al guardar un tratamiento pero NO EXISTE LA AFECCION", (done) => {
    chai.request(server)
    .get("alta-tratamiento/formacion-profesional/Medica/TU260255")//2do object en la bd
    .end(function (err,  unaFormProfesional) {
      var idFormProfesional=unaFormProfesional.body[0]._id;
      //Busco medico
      chai.request(server)
      .get("alta-tratamiento/medico/"+idFormProfesional) //
        .end(function (err, res) {
          chai.request(server)
            // Busco paciente
            .get("alta-tratamiento/paciente/85002452/DNI")//1er object en la bd
            .end(function (err, idUnPaciente) {
              var idPaciente=idUnPaciente.body[0]._id;              
              // Busco HC del paciente
              chai.request(server)
                .get("alta-tratamiento/historia-clinica/paciente/"+idPaciente)//yo tenía este antes 5f66669c837db53dd025f12f")
                //Busco afecciones de historia clínica del paciente
                .end(function (err,idUnaHC) {
                  var idHC=idUnaHC.body[0]._id;
                  
                  chai.request(server)
                      .get("alta-tratamiento/historia-clinica/"+idHC) // ObjectId("5f66669c837db53dd025f130")2do objectid en la bd, de ahí tengo el paciente de arriba
                      .end(function (err, idUnaAfeccion) {
                        //var idAfeccion=idUnaAfeccion;
                       // console.log("el id de la afeccion es",idAfeccion);

                        chai.request(server)
                          .get(
                            "alta-tratamiento/afeccion/5dd6dfb72f455bb04699ad44"
                          ) // ObjectId("5dd6dfb72f455bb04699ad44")
                          .end(function (err, res) {
                          // Busco medicaciones
                          chai.request(server)
                            .get("alta-tratamiento/medicacion/amoxicilina") // usar amoxicilina para que de 200
                            .end( (err, res) =>{
                                chai.request(server)
                                .post("alta-tratamiento/tratamiento")
                                .send({
                                  descripcion:"administrar por 7 días cada 8hs" ,
                                  duracion_en_dias: 12,
                                  fecha: "2018-04-09",
                                  tipo: "Farmacologico",
                                  Medico: { "_id": "5dd72c512f455bb04699b39f"},
                                  Medicacion:{ "_id": "5f665f03837db53dd025f117"}
                                  
                                }).end((error, consultaAct) => {
                                 chai.request(server)
                                      .put('alta-consulta/afeccion/5dd6dfb72f455bb04699ad45')//NO EXISTE AFECCION
                                      .end((error, laAfeccion) => {
                                        expect(laAfeccion).to.have.status(400);
                                  done();
                                });
                              });
                            });
                        });
                    });
                });
            });
        });
      });
    }).timeout(100000);

 */
  //    ##########
  // ##  CAMINO 10  ##
  //    ##########
  it("Debería: SER exitoso al crear y guardar el tratamiento Y al asociar el tratamiento a la afección// fallar al obtener HC del paciente (para verificar)", (done) => {
    chai.request(server)
    .get("alta-tratamiento/formacion-profesional/Medica/TU260255")//2do object en la bd
    .end(function (err,  unaFormProfesional) {
      var idFormProfesional=unaFormProfesional.body[0]._id;
      //Busco medico
      chai.request(server)
      .get("alta-tratamiento/medico/"+idFormProfesional) //
        .end(function (err, res) {
          chai.request(server)
            // Busco paciente
            .get("alta-tratamiento/paciente/85002452/DNI")//1er object en la bd
            .end(function (err, idUnPaciente) {
              var idPaciente=idUnPaciente.body[0]._id;              
              // Busco HC del paciente
              chai.request(server)
                .get("alta-tratamiento/historia-clinica/paciente/"+idPaciente)//yo tenía este antes 5f66669c837db53dd025f12f")
                //Busco afecciones de historia clínica del paciente
                .end(function (err,idUnaHC) {
                  var idHC=idUnaHC.body[0]._id;
                  
                  chai.request(server)
                      .get("alta-tratamiento/historia-clinica/"+idHC) // ObjectId("5f66669c837db53dd025f130")2do objectid en la bd, de ahí tengo el paciente de arriba
                      .end(function (err, idUnaAfeccion) {
                        var idAfeccion=idUnaAfeccion.body.afeccion._id;
                        console.log("el id de la afeccion es",idAfeccion);

                        chai.request(server)
                          .get("alta-tratamiento/afeccion/"+idAfeccion) // ObjectId("5dd6dfb72f455bb04699ad44")
                          .end(function (err, resmedicacion) {
                          // Busco medicaciones
                          var idAfeccion=idUnaAfeccion.body.afeccion._id;
                          console.log("el id de la afeccion es",idAfeccion);

                          chai.request(server)
                            .get("alta-tratamiento/medicacion/amoxicilina") // usar amoxicilina para que de 200
                            
                            .end( (err, res) =>{
                                chai.request(server)
                                .post("alta-tratamiento/tratamiento")
                                .send({
                                  descripcion:"administrar por 7 días cada 8hs" ,
                                  duracion_en_dias: 12,
                                  fecha: "2018-04-09",
                                  tipo: "Farmacologico",
                                  Medico: { "_id": "5dd72c512f455bb04699b39f"},
                                  Medicacion:{ "_id": "5f665f03837db53dd025f117"}
                                  
                                }).end((error, tratamientoNew) => {
                                 // var idTratamiento=tratamientoNew[0]._id;
                                 var idTrata=tratamientoNew.body.data.datosTratamiento._id;
                                  console.log("el id del tratamiento es ",idTrata);

                                  //guardo tratamiento en afeccion
                                 chai.request(server)
                                 
                                      .put('alta-tratamiento/afeccion/5dd6dfb72f455bb04699ad44')
                                      .send({
                                        _idTratamiento:idTrata
                                        
                                 })
                                    //  .end((error, afec) => {
                                        console.log("PASOOOOOOOOOOO  22222")
                                      expect(afec).to.have.status(200);
                                   //   console.log("PASOOOOOOOOOOO   11111111")
                                      done();

                                });
                              });
                            });
                        });
                    });
                });
            });
        });
      });
    }).timeout(100000);


  //    ##########
  // ##  CAMINO 9 EXITOSO ##
  //    ##########
  //FALTA LA ASOCIACIÓN PARA PODER TERMINAR EL CAMINO
  //PARA ESTE CAMINO DEBE DAR ERROR POR EL TEMA DE LA ASOCIACION A AFECCION
/*  it("Debería: fallar al asociar el tratamiento a una afeccion", (done) => {
    chai.request(server)
      .get("alta-tratamiento/formacion-profesional/Medica/TU260255") //2do object en la bd
      .end(function (err, unaFormProfesional) {
        idFormProfesional=unaFormProfesional.body[0]._id;
        console.log("el id de la form profesional es",idFormProfesional)
        //Busco medico con esa formacion profesional
        chai.request(server) //2do object en la bd
          .get("alta-tratamiento/medico/5f666671837db53dd025f12b") //arreglar, tiene que ser uno correcto
          .end(function (err, res) {
            chai.request(server)
              // Busco paciente
              .get("alta-tratamiento/paciente/85002452/DNI") //1er object en la bd
              .end(function (err, res) {
                // Busco HC del paciente
                chai.request(server)
                  .get(
                    "alta-tratamiento/historia-clinica/paciente/5dd6e11b2f455bb04699ad7c"
                  ) //yo tenía este antes 5f66669c837db53dd025f12f")
                  //Busco afecciones de historia clínica del paciente
                  .end(function (err, res) {
                    chai.request(server)
                      .get(
                        "alta-tratamiento/historia-clinica/5f66669c837db53dd025f130"
                      ) // ObjectId("5f66669c837db53dd025f130")2do objectid en la bd, de ahí tengo el paciente de arriba
                      .end(function (err, resHc) {
                        //console.log("El res para hc es ",resHc.body._id)
                       // var idHc=resHc.body._id;
                      //  console.log("EL ID DE HC ES ",idHc);
                        chai.request(server)
                          .get(
                            "alta-tratamiento/afeccion/5dd6dfb72f455bb04699ad44"
                          ) // ObjectId("5dd6dfb72f455bb04699ad44")
                          .end(function (err, res) {
                            // Busco medicaciones
                           // console.log("El res para afeccion es ",res)
                           // var idAfeccion=res.body[0]._id;
                          //  console.log("EL ID DE LA AFECCION ES ",idAfeccion);
                            chai.request(server)
                              .get("alta-tratamiento/medicacion/amoxicilina") // usar amoxicilina para que de 200
                            //  console.log('despues de get de medicacion')
                              .end( (err, res) =>{
                                  chai.request(server)
                                  .post("alta-tratamiento/tratamiento")
                                  .send({
                                    descripcion:"administrar por 7 días cada 8hs" ,
                                    duracion_en_dias: 12,
                                    fecha: "2018-04-09",
                                    tipo: "Farmacologico",
                                    Medico: { "_id": "5dd72c512f455bb04699b39f"},
                                    Medicacion:{ "_id": "5f665f03837db53dd025f117"}
                                    //AGREGAR TRATAMIENTO A LA AFECCION
                                  }).end((error, tratamientoNuevo) => {
                                    console.log("El res para hc es ",tratamientoNuevo.body)
                        
                                    expect(tratamientoNuevo.body).to.be.a("object");
                                    
                                    expect(tratamientoNuevo).to.have.status(200);
                                    done();
                                    var idTratamiento=tratamientoNuevo.body._id;
                                    console.log("EL ID DEL TRATAMIENTO ES ",idTratamiento);
                                  });
                             //   });
                              });
                          });
                      });
                  });
              });
          });
        });
      }).timeout(100000);

*/
    //FALTA LA ASOCIACIÓN PARA PODER TERMINAR EL CAMINO
                                 //PARA ESTE CAMINO DEBE DAR ERROR POR EL TEMA DE LA ASOCIACION A AFECCION
  /*






  //    ##########
  // ##  CAMINO 9  ##
  //    ##########
  it("Debería: fallar al obtener HC del paciente (para verificar)", (done) => {
    // Busco cursos
    chai
      .request(server)
      .get("alta-tratamiento/afeccion/123") // AÑADIR RUTAS DE LAS QUE DEPENDE
      //ver test 2 de gabo, a partir de ahí se ve más o menos como se usan el resto de las rutas para estos casos
      .end(function (err, res) {
        expect(res.body).to.be.a("object");
        console.log(res.body);

        expect(res).to.have.status(400); //AGREGAR STATUS 400 PARA QUE ENTRE POR ACÁ
        done();
      });
  }).timeout(100000);*/

  /*
  //    ##########
  // ##  CAMINO 10  ##
  //    ##########
  it("Debería: fallar al obtener HC del paciente (para verificar)", (done) => {
    chai.request(server)
    .get("alta-tratamiento/formacion-profesional/Medica/TU260255")//2do object en la bd
    .end(function (err,  unaFormProfesional) {
      var idFormProfesional=unaFormProfesional.body[0]._id;
      //Busco medico
      chai.request(server)
      .get("alta-tratamiento/medico/"+idFormProfesional) //
        .end(function (err, res) {
          chai.request(server)
            // Busco paciente
            .get("alta-tratamiento/paciente/85002452/DNI")//1er object en la bd
            .end(function (err, idUnPaciente) {
              var idPaciente=idUnPaciente.body[0]._id;              
              // Busco HC del paciente
              chai.request(server)
                .get("alta-tratamiento/historia-clinica/paciente/"+idPaciente)//yo tenía este antes 5f66669c837db53dd025f12f")
                //Busco afecciones de historia clínica del paciente
                .end(function (err,idUnaHC) {
                  var idHC=idUnaHC.body[0]._id;
                  
                  chai.request(server)
                      .get("alta-tratamiento/historia-clinica/"+idHC) // ObjectId("5f66669c837db53dd025f130")2do objectid en la bd, de ahí tengo el paciente de arriba
                      .end(function (err, idUnaAfeccion) {
                        //var idAfeccion=idUnaAfeccion;
                       // console.log("el id de la afeccion es",idAfeccion);

                        chai.request(server)
                          .get(
                            "alta-tratamiento/afeccion/5dd6dfb72f455bb04699ad44"
                          ) // ObjectId("5dd6dfb72f455bb04699ad44")
                          .end(function (err, res) {
                          // Busco medicaciones
                          chai.request(server)
                            .get("alta-tratamiento/medicacion/amoxicilina") // usar amoxicilina para que de 200
                            .end( (err, res) =>{
                                chai.request(server)
                                .post("alta-tratamiento/tratamiento")
                                .send({
                                  descripcion:"administrar por 7 días cada 8hs" ,
                                  duracion_en_dias: 12,
                                  fecha: "2018-04-09",
                                  tipo: "Farmacologico",
                                  Medico: { "_id": "5dd72c512f455bb04699b39f"},
                                  Medicacion:{ "_id": "5f665f03837db53dd025f117"}
                                  
                                }).end((error, consultaAct) => {
                                 chai.request(server)
                                      .put('alta-consulta/afeccion/5dd6dfb72f455bb04699ad45')
                                      .end((error, afecc) => {
                                        expect(tratamientoNuevo).to.have.status(400);
                                  done();
                                });
                              });
                            });
                        });
                    });
                });
            });
        });
      });
    }).timeout(100000);*/
});