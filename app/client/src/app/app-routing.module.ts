
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaTratamientoComponent } from './components/tratamiento/alta-tratamiento.component';
import { AfeccionComponent } from './components/afeccion/afeccion.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicacionComponent } from './components/medicacion/medicacion.component';
import {  ConsultaTratamientoComponent } from './components/consulta-tratamientos/consulta-tratamiento.component';


const routes: Routes = [
  { path: 'afeccion', component: AfeccionComponent },
  { path: 'alta-consulta', component: ConsultaComponent },
  {path: 'alta-tratamiento',component: AltaTratamientoComponent},
  { path: 'alta-pacienteHC', component: PacienteComponent },
  { path: 'consultaMedicaciones', component: MedicacionComponent },
  { path: 'consultaTratamiento', component: ConsultaTratamientoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

