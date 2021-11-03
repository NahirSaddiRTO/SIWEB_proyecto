"use strict";

const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const server = "http://localhost:4000";
const chaiHttp = require("chai-http");
//DESCOMENTAR LA ÚLTIMA LINEA Y ACA EL CHAIHTPP CON EL DESCRIBE
/*chai.use(chaiHttp);
describe("Consulta-tratamiento", () => {
  // ##########
  // # CAMINO 1 #
  // ##########
 /*   it("Debería: fallar al obtener el paciente", (done) => {
    // Espero datos del paciente
    chai
      .request(server)
      .get("/consulta-tratamientos/paciente/29622099/DNO")
      .end(function (err, res) {
        console.log("Paso por comienzo de test");
        //console.log(res.body);
        expect(res.body).to.be.a("object");
       // console.log(res.body);

        expect(res).to.have.status(400);
        done();
      });
  }).timeout(100000);

  //    ##########
  // ##  CAMINO 2  ##
  //    ##########
   it("Debería: fallar al obtener la HC del paciente", (done) => {
 // Espero datos del paciente
    chai
      .request(server)
      .get("/consulta-tratamientos/paciente/29622099/DNI")
      .end(function (err, res) {
        //Busco HC del paciente
        chai
          .request(server)
          .get("/consulta-tratamientos/historiaClinica/paciente/5dd6e11f2f455bb04699ad81")//ObjectId("5dd6e11f2f455bb04699ad82") es del paciente que EXISTE
          .end(function (err, res) {
            expect(res.body).to.be.a("object");
            console.log(res.body);
            expect(res).to.have.status(400); 
            done();
          });
      });
  }).timeout(100000);

  //    ##########
  // ##  CAMINO 3  ##
  //    ##########
    it("Debería: fallar al obtener la afeccion de la HC del paciente", (done) => {
    // Espero datos del paciente
    chai
      .request(server)
      .get("/consulta-tratamientos/paciente/29622099/DNI")
      .end(function (err, res) {
        //Busco HC del paciente
        chai
          .request(server)
          .get(
            "/consulta-tratamientos/historiaClinica/paciente/5dd6e11f2f455bb04699ad82"
          )
          .end(function (err, res) {
            //Busco datos afeccion de ése paciente, previamente seleccionada su objectid
            chai
              .request(server)
              .get("/consulta-tratamientos/afeccion/5dd6dfb32f455bb04699ad31")//afeccion/ObjectId("5dd6dfb32f455bb04699ad3e") es la afeccion de la HC del paciente que venimos verificando
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
 /* it("Debería: fallar al obtener la HC del paciente", (done) => {
    // Espero datos del paciente
    chai
      .request(server)
      .get("/consulta-tratamientos/paciente/29622099/DNI")
      .end(function (err, res) {
        //Busco HC del paciente
        chai
          .request(server)
          .get(
            "/consulta-tratamientos/historiaClinica/paciente/5dd6e11f2f455bb04699ad82"
          )
          .end(function (err, res) {
            //Busco afeccion de ése paciente
            chai
              .request(server)
              .get("/consulta-tratamientos/afeccion/5dd6dfb32f455bb04699ad3e") 
              .end(function (err, res) {
                expect(res.body).to.be.a("object");
                console.log(res.body);
                expect(res).to.have.status(400); //AGREGAR STATUS 400 PARA QUE ENTRE POR ACÁ
                done();
              });
          });
      });
  }).timeout(100000);*/
//});
