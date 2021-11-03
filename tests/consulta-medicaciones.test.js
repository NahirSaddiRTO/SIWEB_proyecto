'use strict';

/*const assert = require ('assert');
const chai = require('chai');
const expect = chai.expect;
const server = 'http://localhost:4000/';
const chaiHttp = require('chai-http');
const { Console } = require('console');

chai.use(chaiHttp);
describe('Consulta-medicaciones', () => {

    // ##########
    // # CAMINO 1 #
    // ##########
      it('Debería: fallar al obtener la formación profesional', (done) => {
        // Busco cursos
        chai.request(server)
          .get('consultaMedicaciones/formacion-profesional/Medica/xxx')
          .end(function(err,res){
              expect(res.body).to.be.a('object');
              expect(res).to.have.status(400);
              done();
          });
      }).timeout(100000);
   
    // ##########
    // # CAMINO 2 #
    // ##########
    it('Debería: fallar al obtener el médico con esa formación profesional', (done) => {
      // Busco cursos
      chai.request(server)
        .get('consultaMedicaciones/formacion-profesional/Medica/TU260255')
        .end((err, formProfesional) => {
            var idFormaciónProf = "5f666671837db53dd025f42b"; //NO EXISTE
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('consultaMedicaciones/medico/' + idFormaciónProf)
            .end((error, res) => {
                expect(res.body).to.be.a('object');
                expect(res).to.have.status(400);
                done();
              })
       });
    }).timeout(100000);

      
    // ##########
    // # CAMINO 3 #
    // ##########
    it('Debería: fallar al obtener los tratamientos', (done) => {
      // Busco cursos
      chai.request(server)
        .get('consultaMedicaciones/formacion-profesional/Medica/TU260255')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('consultaMedicaciones/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2018-05-09T07:31:47.422Z'; //NO HAY
                var fechaHasta = '2018-09-09T07:31:47.422Z'; //NO HAY
                chai.request(server)
                .get('consultaMedicaciones/tratamiento/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, res) => {
                  expect(res.body).to.be.a('object');
                  expect(res).to.have.status(400);
                  done();
                })
              })
            })
    }).timeout(100000);
          
    // ##########
    // # CAMINO 4 #
    // ##########
    it('Debería: obtener los tratamientos en ese rango de fecha', (done) => {
      // Busco cursos
      chai.request(server)
        .get('consultaMedicaciones/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('consultaMedicaciones/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-04-09T07:31:47.422Z'; 
                var fechaHasta = '2017-09-09T07:31:47.422Z'; 
                chai.request(server)
                .get('consultaMedicaciones/tratamiento/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
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
    it('Debería: falla al obtener los medicamentos', (done) => {
      // Busco cursos
      chai.request(server)
        .get('consultaMedicaciones/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('consultaMedicaciones/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-04-09T07:31:47.422Z'; 
                var fechaHasta = '2017-09-09T07:31:47.422Z'; 
                chai.request(server)
                .get('consultaMedicaciones/tratamiento/' + idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, tratamiento) => {
                  var IdMedicacion ="5f665f03837db53dd025f118" // NO EXISTE
                  chai.request(server)
                    .get('consultaMedicaciones/medicaciones/' + IdMedicacion)
                    .end((error, res) => {
                    expect(res.body).to.be.a('object');
                    expect(res).to.have.status(400);
                    done();
                })
              })
            })
          })
    }).timeout(100000);

    // ##########
    // # CAMINO 6 #
    // ##########
    it('Debería: Obtiene los medicamentos', (done) => {
      // Busco cursos
      chai.request(server)
        .get('consultaMedicaciones/formacion-profesional/Farmaceutica/TU455662')
        .end((err, formProfesional) => {
            var idFormaciónProf = formProfesional.body[0]._id;
            // Esperando médico con esa formación profesional
            chai.request(server)
            .get('consultaMedicaciones/medico/' + idFormaciónProf)
            .end((error, medico) => {
                var idMedico = medico.body[0]._id;
                var fechaDesde = '2017-04-09T07:31:47.422Z'; 
                var fechaHasta = '2017-09-09T07:31:47.422Z'; 
                chai.request(server)
                .get('consultaMedicaciones/tratamiento/' + idMedico+
                              '?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta)
                .end((error, tratamiento) => {
                  var IdMedicacion =tratamiento.body[0].Medicacion[0]._id;
                  chai.request(server)
                    .get('consultaMedicaciones/medicaciones/' + IdMedicacion)
                    .end((error, res) => {
                    expect(res.body).to.be.a('object');
                    expect(res).to.have.status(200);
                    done();
                })
              })
            })
          })
    }).timeout(100000);

    });*/