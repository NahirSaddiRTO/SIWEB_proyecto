
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaTratamientoComponent } from './components/tratamiento/alta-tratamiento.component';
import { AfeccionComponent } from './components/afeccion/afeccion.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicacionComponent } from './components/medicacion/medicacion.component';


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  { path: 'afeccion', component: AfeccionComponent },
  { path: 'alta-consulta', component: ConsultaComponent },
  {path: 'alta-tratamiento',component: AltaTratamientoComponent},
  { path: 'alta-pacienteHC', component: PacienteComponent },
  { path: 'consultaMedicaciones', component: MedicacionComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

