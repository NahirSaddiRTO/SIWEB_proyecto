
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

//COMPONENTES
import { RootComponent } from './root/root.component';
import { AfeccionComponent } from './components/afeccion/afeccion.component';
import { AltaTratamientoComponent } from './components/tratamiento/alta-tratamiento.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicacionComponent } from './components/medicacion/medicacion.component';
import { FormacionProfesionalComponent } from './components/formacion-profesional/formacion-profesional.component';
import { ConsultaTratamientoComponent } from './components/consulta-tratamientos/consulta-tratamiento.component';
//RUTAS
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    RootComponent,
    AfeccionComponent,
    ConsultaComponent,
    AltaTratamientoComponent,
    PacienteComponent,
    MedicacionComponent,
    FormacionProfesionalComponent,
    ConsultaTratamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }

