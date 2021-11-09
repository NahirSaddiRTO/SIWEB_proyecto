
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';


//COMPONENTES
import { AfeccionComponent } from './components/afeccion/afeccion.component';
import { AltaTratamientoComponent } from './components/tratamiento/alta-tratamiento.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicacionComponent } from './components/medicacion/medicacion.component';
import { FormacionProfesionalComponent } from './components/formacion-profesional/formacion-profesional.component';

//RUTAS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AfeccionComponent,
    ConsultaComponent,
    AltaTratamientoComponent,
    PacienteComponent,
    MedicacionComponent,
    FormacionProfesionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

