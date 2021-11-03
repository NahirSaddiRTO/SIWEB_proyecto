import { TestBed, inject } from '@angular/core/testing';

import { TratamientoService } from './tratamiento.service';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TratamientoService]
    });
  });

  it('should be created', inject([TratamientoService], (service: TratamientoService) => {
    expect(service).toBeTruthy();
  }));
});