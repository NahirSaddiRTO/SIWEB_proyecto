import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionProfesionalComponent } from './formacion-profesional.component';

describe('FormacionProfesionalComponent', () => {
  let component: FormacionProfesionalComponent;
  let fixture: ComponentFixture<FormacionProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
