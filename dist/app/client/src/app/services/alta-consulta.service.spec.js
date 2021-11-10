"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const alta_consulta_service_1 = require("./alta-consulta.service");
describe('ConsultaService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(alta_consulta_service_1.ConsultaService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
