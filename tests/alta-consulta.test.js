//'use strict';

/*const assert = require ('assert');
const chai = require('chai');
const expect = chai.expect;
const server = 'http://localhost:4000/';
const chaiHttp = require('chai-http');
const { Console } = require('console');
var mongoose= require('mongoose');
mongoose.Promise=global.Promise;


chai.use(chaiHttp);
describe('Alta-consulta', () => {
      // ##########
    // # CAMINO 2 #
    // ##########
      it('Debería: fallar al obtener la formación profesional', (done) => {
        // 
        chai.request(server)
        .get('alta-consulta/centro-salud').
         end((err,centroSalud) => {
            chai.request(server)
             .get('alta-consulta/formacion-profesional/Medica/xxx')
                .end(function(err,res){
              expect(res.body).to.be.a('object');
              expect(res).to.have.status(400);
              done();
          });
        });
      }).timeout(100000);

    // ##########
    // # CAMINO 3 #
    // ##########
    it('Debería: fallar al obtener el médico con esa formación profesional', (done) => {
      // 
      chai.request(server)
        .get('alta-consulta/formacion-profesional/Medica/TU260255')
        .end((err, formProfesional) => {
            var idFormaciónProf = "5f666671837db53dd025f42b"; //NO EXISTE
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('alta-consulta/medico/' + idFormaciónProf)
            .end((error, res) => {
                expect(res.body).to.be.a('object');
                expect(res).to.have.status(400);
                done();
              })
       });
    }).timeout(100000);


    // ##########
    // # CAMINO 4 #
    // ##########
    it('Debería: obtener consultas del médico y eso sería error', (done) => {
      // 
      chai.request(server)
        .get('alta-consulta/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('alta-consulta/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2014-02-10 10:50:57.240Z'; // HAY
                var fechaHasta = '2017-02-10 10:50:57.240Z'; //HAY
                chai.request(server)
                .get('alta-consulta/consulta/medico/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, res) => {
                  expect(res.body).to.be.a('array');
                  expect(res).to.have.status(200);
                  done();
                })
              })
            })
    }).timeout(100000);

      // ##########
    // # CAMINO 5 #
    // ##########
    it('Debería: Error al crear paciente', (done) => {
        chai.request(server)
          .get('alta-consulta/formacion-profesional/Farmaceutica/TU455662')
          .end((err, formProfesional) => {
              var idFormaciónProf = formProfesional.body[0]._id;
              // Esperando médico con esa formación profesional
              chai.request(server)
              .get('alta-consulta/medico/' + idFormaciónProf)
              .end((error, medico) => {
                  var idMedico = medico.body[0]._id;
                  var fechaDesde = '2017-02-10 10:50:57.240Z'; // NO HAY
                  var fechaHasta = '2017-04-10 10:50:57.240Z'; //NO HAY
                  chai.request(server)
                  .get('alta-consulta/consulta/medico/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                  .end((error, res) => {
                        chai.request(server)
                        .get('alta-consulta/paciente/DNI/37781566')
                        .end((error, noPaciente) => {
                            chai.request(server)
                            .post('alta-paciente-hc/paciente')
                            .send({
                                nombre : "AMBAR",
                                apellido : "SADDI",
                                piso : 13,
                                calle : "CORDOBA",
                                altura : 365,
                                estado : "otro",
                                fechanacimiento : "2020-04-04",
                                telefono_pac : [ 
                                    "2994100110"
                                ]
                            })
                            .end( function(err,res){
                              expect(res).to.have.status(400);
                              done();
                  })
                });
            });
        });
    });
      }).timeout(100000);
      
        // ##########
    // # CAMINO 6 #
    // ##########
    it('Debería: Fallar al crear una HC', (done) => {
      // 
      chai.request(server)
        .get('alta-consulta/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('alta-consulta/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-02-10 10:50:57.240Z'; // NO HAY
                var fechaHasta = '2017-04-10 10:50:57.240Z'; //NO HAY
                chai.request(server)
                .get('alta-consulta/consulta/medico/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, res) => {
                      chai.request(server)
                      .get('alta-consulta/paciente/DNI/37781566')
                      .end((error, noPaciente) => {
                          chai.request(server)
                          .post('alta-paciente-hc/paciente')
                          .send({
                              tipodni : "DNI",
                              nrodocumento : "37781566",
                              nombre : "AMBAR",
                              apellido : "SADDI",
                              piso : 13,
                              calle : "CORDOBA",
                              altura : 365,
                              estado : "otro",
                              fechanacimiento : "2020-04-04",
                              telefono_pac : [ 
                                  "2994100110"
                              ]
                          })
                          .end( function(err,res){
                            chai.request(server)
                            .post('alta-paciente-hc/historiaClinica')
                            .send({  
                              afeccion : {
                                  "_id" : "5dd6dfb72f455bb04699ad44"
                              },
                              medicacion : {
                                  "_id" : "5f665f03837db53dd025f117"
                              }
                             
                            })
                            .end((error, noHC) => {
                              expect(noHC).to.have.status(400);
                               done();
                })
              });
            });
          });
      });
  });
    }).timeout(100000);
    

    // ##########
    // # CAMINO 7 #
    // ##########
    it('Debería: obtener consultas del paciente en esa fecha - lo cual es un error', (done) => {
      // 
      chai.request(server)
        .get('alta-consulta/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('alta-consulta/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-02-10 10:50:57.240Z'; // NO HAY
                var fechaHasta = '2017-04-10 10:50:57.240Z'; //NO HAY
                chai.request(server)
                .get('alta-consulta/consulta/medico/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, res) => {
                      chai.request(server)
                      .get('alta-consulta/paciente/DNI/37781566')
                      .end((error, noPaciente) => {
                          chai.request(server)
                          .post('alta-paciente-hc/paciente')
                          .send({
                              tipodni : "DNI",
                              nrodocumento : "37781566",
                              nombre : "AMBAR",
                              apellido : "SADDI",
                              piso : 13,
                              calle : "CORDOBA",
                              altura : 365,
                              estado : "otro",
                              fechanacimiento : "2020-04-04",
                              telefono_pac : [ 
                                  "2994100110"
                              ]
                          })
                          .end( function(err,res){
                            var idPaciente ="5dd6e1192f455bb04699ad79"
                             chai.request(server)
                            .post('alta-paciente-hc/historiaClinica')
                            .send({  
                              afeccion : {
                                  "_id" : "5dd6dfb72f455bb04699ad44"
                              },
                              medicacion : {
                                  "_id" : "5f665f03837db53dd025f117"
                              },
                                paciente:{
                                  "_id" : idPaciente
                                }
                            })
                            .end((error, HC) => {
                              chai.request(server)
                               .get('alta-consulta/consulta/paciente/' + '5dd6e11d2f455bb04699ad7f?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                                .end((error, consulPa) => {
                                  expect(consulPa).to.have.status(200);
                               done();
                })
              });
            });
          });
        });
      });
  });
    }).timeout(100000);

    
    // ##########
    // # CAMINO 8 #
    // ##########
    it('Debería: crear la consulta, sin asociar a la afección', (done) => {
      // 
      chai.request(server)
        .get('alta-consulta/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('alta-consulta/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-02-10 10:50:57.240Z'; // NO HAY
                var fechaHasta = '2017-04-10 10:50:57.240Z'; //NO HAY
                chai.request(server)
                .get('alta-consulta/consulta/medico/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, res) => {
                      chai.request(server)
                      .get('alta-consulta/paciente/DNI/37781560')
                      .end((error, paciente) => {
                        var idPaciente = paciente.body[0]._id;
                          chai.request(server)
                          .get('alta-consulta/consulta/paciente/' + idPaciente+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                           .end((error, noconsulPa) => {
                      
                              chai.request(server)
                               .get('alta-consulta/consulta/paciente/' + '5dd6e11d2f455bb04699ad7f?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                                .end((error, consulPa) => {
                                  expect(consulPa).to.have.status(200);
                               done();
                })
              });
            });
          });
        });
      });
    }).timeout(100000);
*/

    // ##########
    // # CAMINO 9 #
    // ##########
/*    it('Debería: error al modificar la afección', (done) => {
      // 
      chai.request(server)
        .get('alta-consulta/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('alta-consulta/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-02-10 10:50:57.240Z'; // NO HAY
                var fechaHasta = '2017-04-10 10:50:57.240Z'; //NO HAY
                chai.request(server)
                .get('alta-consulta/consulta/medico/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, res) => {
                      chai.request(server)
                      .get('alta-consulta/paciente/DNI/37781566') //EXISTE PACIENTE
                      .end((error, paciente) => {
                        var idPaciente = paciente.body[0]._id;
                          chai.request(server)
                          .get('alta-consulta/consulta/paciente/' + idPaciente+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                           .end((error, noconsulPa) => {
                                    chai.request(server)
                                   .get('alta-consulta/afecciones')
                                  .end((error, afecciones) => {
                                    chai.request(server)
                                   .post('alta-consulta/consulta')
                                   .send(
                                    {
                                      fechaHora : fechaDesde,
                                      motivo : "fiebre",
                                      paciente : {
                                          "_id" : idPaciente
                                      },
                                      medico : {
                                          "_id" : idMedico
                                      }
                                  }
                                   )
                                   .end((error, newCons) => {
                                      chai.request(server)
                                      .put('alta-consulta/afeccion/5dd6dfb72f455bb04699ad45')
                                      .end((error, afecc) => {
                                      expect(afecc).to.have.status(400);
                               done();
                })
              });
            });
          });
        });
      });
          });
        });

    }).timeout(100000);
*/
        // ##########
    // # CAMINO 10 #
    // ##########
/*    it('Debería: error al modificar la afección porque no busca afeccion', (done) => {
      // 
      chai.request(server)
        .get('alta-consulta/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('alta-consulta/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-02-10 10:50:57.240Z'; // NO HAY
                var fechaHasta = '2017-04-10 10:50:57.240Z'; //NO HAY
                chai.request(server)
                .get('alta-consulta/consulta/medico/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, res) => {
                      chai.request(server)
                      .get('alta-consulta/paciente/DNI/37781566') //EXISTE PACIENTE
                      .end((error, paciente) => {
                        var idPaciente = paciente.body[0]._id;
                          chai.request(server)
                          .get('alta-consulta/consulta/paciente/' + idPaciente+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                           .end((error, noconsulPa) => {
                                    chai.request(server)
                                   .post('alta-consulta/consulta')
                                   .send(
                                    {
                                      fechaHora : fechaDesde,
                                      motivo : "fiebre",
                                      paciente : {
                                          "_id" : idPaciente
                                      },
                                      medico : {
                                          "_id" : idMedico
                                      }
                                  }
                                   )
                                   .end((error, newCons) => {
                                      chai.request(server)
                                      .put('alta-consulta/afeccion/5dd6dfb72f455bb04699ad45') //NO EXISTE AFECCION
                                      .end((error, afecc) => {
                                      expect(afecc).to.have.status(400);
                               done();
                })
              });
            });
          });
        });
      });
          });

    }).timeout(100000);

*/
            // ##########
    // # CAMINO 11 #
    // ##########
/*    it('Debería: crear la consulta, no asocia afeccion', (done) => {
      // 
      chai.request(server)
        .get('alta-consulta/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('alta-consulta/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-02-10 10:50:57.240Z'; // NO HAY
                var fechaHasta = '2017-04-10 10:50:57.240Z'; //NO HAY
                chai.request(server)
                .get('alta-consulta/consulta/medico/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, res) => {
                      chai.request(server)
                      .get('alta-consulta/paciente/DNI/37781566') //EXISTE PACIENTE
                      .end((error, paciente) => {
                        var idPaciente = paciente.body[0]._id;


                         chai.request(server)
                          .get('alta-consulta/consulta/paciente/' + idPaciente+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                           .end((error, noconsulPa) => {
                                    chai.request(server)
                                   .post('alta-consulta/consulta')
                                   .send(
                                    {
                                      fechaHora : fechaDesde,
                                      motivo : "fiebre",
                                      paciente : {
                                          "_id" : idPaciente
                                      },
                                      medico : {
                                          "_id" : idMedico
                                      }
                                  }
                                   )
                                   .end((error, newCons) => {
                                     
                                    expect(newCons).to.have.status(200);
                               done();
                })
              });
            });
          });
        });
      });
     

    }).timeout(100000);

    // ##########
    // # CAMINO 12 #
    // ##########
    it('Debería: Crear consulta y modificar afección', (done) => {
       
      chai.request(server)
        .get('alta-consulta/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('alta-consulta/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-02-10 10:50:57.240Z'; // NO HAY
                var fechaHasta = '2017-04-10 10:50:57.240Z'; //NO HAY
                chai.request(server)
                .get('alta-consulta/consulta/medico/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, res) => {
                      chai.request(server)
                      .get('alta-consulta/paciente/DNI/37781566')
                      .end((error, noPaciente) => {
                          chai.request(server)
                          .post('alta-paciente-hc/paciente')
                          .send({
                              tipodni : "DNI",
                              nrodocumento : "37781566",
                              nombre : "AMBAR",
                              apellido : "SADDI",
                              piso : 13,
                              calle : "CORDOBA",
                              altura : 365,
                              estado : "otro",
                              fechanacimiento : "2020-04-04",
                              telefono_pac : [ 
                                  "2994100110"
                              ]
                          })
                          .end( function(err,res){
                            var idPaciente ="5fc6c05c2cd27904ab2aa9dc";
                            chai.request(server)
                            .post('alta-paciente-hc/historiaClinica')
                            .send({  
                              afeccion : {
                                  "_id" : "5dd6dfb72f455bb04699ad44"
                              },
                              medicacion : {
                                  "_id" : "5f665f03837db53dd025f117"
                              },
                                paciente:{
                                  "_id" : idPaciente
                                }
                            })
                            .end((error, HC) => {
                              chai.request(server)
                               .get('alta-consulta/consulta/paciente/' + '5dd6e11d2f455bb04699ad7c?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                                .end((error, noconsulPa) => {
                                    chai.request(server)
                                   .get('alta-consulta/afecciones')
                                  .end((error, afecciones) => {
                                    chai.request(server)
                                   .post('alta-consulta/consulta')
                                   .send(
                                    {
                                      fechaHora : fechaDesde,
                                      motivo : "fiebre",
                                      paciente : {
                                          "_id" : idPaciente
                                      },
                                      medico : {
                                          "_id" : idMedico
                                      }
                                  }
                                   )
                                   .end((error, newCons) => {
                                      chai.request(server)
                                      .put('alta-consulta/afeccion/5dd6dfb72f455bb04699ad44')
                                      .send( {
                                        _idConsulta : "5f987032ea96230141679bbd"
                                 })
                                      .end((error, afecc) => {
                                      expect(afecc).to.have.status(200);
                               done();
                })
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
    //});
    
    