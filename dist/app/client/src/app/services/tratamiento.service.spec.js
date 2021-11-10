"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const tratamiento_service_1 = require("./tratamiento.service");
describe('EmployeeService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [tratamiento_service_1.TratamientoService]
        });
    });
    it('should be created', testing_1.inject([tratamiento_service_1.TratamientoService], (service) => {
        expect(service).toBeTruthy();
    }));
});
