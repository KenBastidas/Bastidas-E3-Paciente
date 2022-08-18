import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerPacientesComponent } from './obtener-pacientes.component';

describe('ObtenerPacientesComponent', () => {
  let component: ObtenerPacientesComponent;
  let fixture: ComponentFixture<ObtenerPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtenerPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
