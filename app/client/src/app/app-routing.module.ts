
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaTratamientoComponent } from './components/tratamiento/alta-tratamiento.component';
import { AfeccionComponent } from './components/afeccion/afeccion.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicacionComponent } from './components/medicacion/medicacion.component';
import {  ConsultaTratamientoComponent } from './components/consulta-tratamientos/consulta-tratamiento.component';
import { Login2Component } from './components/login2/login2.component';


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  { path: 'afeccion', component: AfeccionComponent },
  { path: 'alta-consulta', component: ConsultaComponent },
  {path: 'alta-tratamiento',component: AltaTratamientoComponent},
  { path: 'alta-pacienteHC', component: PacienteComponent },
  { path: 'consultaMedicaciones', component: MedicacionComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'consultaTratamiento', component: ConsultaTratamientoComponent },
  { path: 'login2', component: Login2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

