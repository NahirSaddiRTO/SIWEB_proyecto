import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfeccionComponent } from './afeccion.component';

describe('AfeccionComponent', () => {
  let component: AfeccionComponent;
  let fixture: ComponentFixture<AfeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
