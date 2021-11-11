import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';
/*tratamientoservice posee de todo con las interfaces de abajo*/
import { TratamientoService } from '../../services/tratamiento.service';

import { ITratamiento } from '../../interfaces/ITratamiento';
import { IAfeccion } from '../../interfaces/IAfeccion';

import { IFormacionProfesional } from '../../interfaces/IFormacionProfesional';
import { IMedico } from 'src/app/interfaces/IMedico';
import { IPaciente } from 'src/app/interfaces/IPaciente';
import { IHistoriaClinica } from 'src/app/interfaces/IHistoriaClinica';
import { IDiagnostico } from 'src/app/interfaces/IDiagnostico';
import { IMedicacion } from 'src/app/interfaces/IMedicacion';

import { IEspecialidad } from 'src/app/interfaces/IEspecialidad';
import { Router } from '@angular/router';
import {
  Sexo,
  Identificacion,
  EstadoCivil,
} from 'src/app/interfaces/enumerados';
import * as enumerados from '../../interfaces/enumerados';



@Component({
  selector: 'app-consulta-tratamiento',
  templateUrl: './consulta-tratamiento.component.html',
  styleUrls: ['./consulta-tratamiento.component.css'],
})
export class ConsultaTratamientoComponent implements OnInit {

  //esto es para el calendario
  model!: NgbDateStruct;
  date!: { year: number; month: number };
  altaTratamientoExitosa=false;


  // Formacion Profesional
  formacionProfesional: IFormacionProfesional[] = [];
  formProf: any = {
    nroMatricula: '',
    tipoMatricula: '',
    fechaTitulo: new Date(),
    especialidad: '',
  };


  medicacion: any={
    nombre: '',
    proposito: '',
    dosis: '',
  }



  medicos: IMedico[] = [];
  medico: IMedico = {
    _id: '',
    nombre: '',
    apellido: '',
    calle: '',
    altura: 0,
    piso: 0,
    tipoDni: Identificacion.LE,
    nroDocumento: '',
    telefono: [0],
    formacionProfesional: '', //IFormacionProfesional;
    sexo: Sexo.otro,
  };

  pacientes: IPaciente[] = [];
  paciente: any = {
    nrodocumento: '',
    tipodni: '',
    nombre: '',
    apellido: '',
    piso: 0,
    calle: '',
    altura: 0,
    fechanacimiento: Date, 
    estado: '',
    telefono_pac: [0],
    sexo: '',
  };
  pacienteConsulta: any = {
    nrodocumento: '',
    tipodni: '',
    nombre: '',
    apellido: '',
    piso: 0,
    calle: '',
    altura: 0,
    fechanacimiento: Date, 
    estado: '',
    telefono_pac: [0],
    sexo: '',
  };
  historiasClinicas: any[] = [];
  afeccionesHc: any[] = [];
  hc: any = {
    _id: '',
    legajo: '',
    afeccion: {
      id: '',
    },
    medicacion: {
      id: '',
    },
    paciente: {
      id: '',
    },
  };
  idPaciente = '';
  idPacienteConsulta='';
  diagnosticos: IDiagnostico[] = [];
  diagnostico:any;
  hayDiagnostico=false;
  buscarDiagnostico=false;

  medicaciones: IMedicacion[] = [];
 // medicacion!: IMedicacion;
  medicacionValida=false;
  // Afecciones
  afecciones: any[] = [];
  laafeccion: any;
  nomUnaAfeccion='';
  nomUnaAfeccionConsulta='';
  selectedAfeccion!: IAfeccion;

  division!: string;
  encontroPacienteConsulta=false;
  encontroPaciente = false;
  hayAfeccion = false;
  tratamiento: any = {
    //_id: '',
    descripcion: '',
    duracion_en_dias: 0,
    tipo: '',
    fecha: new Date(),
    Medico: { id: ''},
    Medicacion: [{ id: '' }], //[{ id: '' }],
  };
  tipoSeleccionado=false;
  descripcionLista=false;
  hayCantDias=false;
  hayFecha=false;
  hayAfeccionConsulta=false;
  consultaTratamientoOn=false;
  hayDiagnosticoConsulta=false;
diagnosticoConsulta:any;
datosTratamiento:any;


formacionProfesionalBusqueda: IFormacionProfesional []=[];
medicoBusqueda: any = {
  _id: '',
  nombre: '',
  apellido: '',
  calle: '',
  altura: 0,
  piso: 0,
  tipoDni: Identificacion.LE,
  nroDocumento: '',
  telefono: [0],
  formacionProfesional: '', //IFormacionProfesional;
  sexo: Sexo.otro,
};
mostrarErrorFP=false;

mostrarErrorMedico=false;
tipoMatricula :any;
matricula:any;
nombreMedico:any;
idMedicoBusqueda:any;

  seleccionaTipo(elTipo:string){
    this.tratamiento.tipo=elTipo;
    this.tipoSeleccionado=true;
  }
  descripcionTratamiento(laDescripcion:string){
    this.tratamiento.descripcion=laDescripcion;
    this.descripcionLista=true;
  }
  diasTratamiento(cant:any){
    this.tratamiento.duracion_en_dias=cant;
    this.hayCantDias=true;
  }
  dateTratamiento(laFecha:Date){
    this.tratamiento.fecha=laFecha;
  this.hayFecha=true;
  }


  constructor(
    private tratamientoService: TratamientoService,
    private calendar: NgbCalendar,private router: Router
  ) {

    this.division;
  }

  ngOnInit(): void {
    this.paciente.sexo = enumerados.getObjSexos();
    this.paciente.tipoDni = enumerados.getTipoIdentificacion();
    this.paciente.estado = enumerados.getEstadoCivil();
  }
/*FORMACION PROF*/
buscarProfesional(tipoMatricula:any, nroMatricula:any){
  console.log(tipoMatricula,nroMatricula);
  this.tratamientoService.getProfesional(tipoMatricula,nroMatricula).subscribe(data => { 
    console.log("data de formacion profesional es",data)
    this.formacionProfesionalBusqueda = data;
    if(this.formacionProfesionalBusqueda.length==0){
      this.mostrarErrorFP = true;
    }
    else{
      this.mostrarErrorFP = false;
      const idFormacion = this.formacionProfesionalBusqueda[0]._id;
      this.buscarMedicoConFP(idFormacion);
    }
    
});
}

buscarMedicoConFP(idFormacion:any){
this.tratamientoService.getMedicoConFP(idFormacion).subscribe(data => { 
  this.medicoBusqueda = data;
  console.log("el medico es ",this.medicoBusqueda);
  console.log("el medico es de type ",typeof this.medicoBusqueda);
  if(this.medicoBusqueda.length==0){
    this.mostrarErrorMedico = true;
  }
  else{
    
    this.nombreMedico=this.medicoBusqueda[0].nombre +','+this.medicoBusqueda[0].apellido;
    this.tratamiento.Medico= this.medicoBusqueda[0];
    console.log("el medico para tratamiento quedo en ",this.tratamiento.Medico)
    this.idMedicoBusqueda = this.tratamiento.Medico.id;
    //this.tratamiento.Medico=this.tratamiento.Medico.id;
    console.log("el id del medico para tratamiento quedo en ",typeof this.tratamiento.Medico)//this.idMedicoBusqueda)
    //this.tratamiento.medico=this.idMedicoBusqueda
 
    this.mostrarErrorMedico = false;
  }
});
}



  /* FORMACION PROF */
  //esto es para el calendario
  selectToday() {
    this.model = this.calendar.getToday();
  }

  buscarDiagnosticoOn(){
    this.buscarDiagnostico=true;
  }
 

  getPaciente(nrodocumento: any, tipodni: any) {
    console.log(nrodocumento, tipodni);
    this.tratamientoService
      .getPaciente(nrodocumento, tipodni)
      .subscribe((data) => {
        this.paciente = data;
        if (this.pacientes != null) {
          this.encontroPaciente = true;
          console.log('el paciente tiene esta info ', this.paciente[0]);
          // this.nombrePaciente=this.paciente[0].nombre +','+this.paciente[0].apellido;

          this.idPaciente = this.paciente[0]._id;
        }
      });
  }

  getPacienteConsulta(nrodocumento: any, tipodni: any) {
    console.log(nrodocumento, tipodni);
    this.tratamientoService
      .getPacienteConsulta(nrodocumento, tipodni)
      .subscribe((data) => {
        this.pacienteConsulta = data;
        if (this.pacienteConsulta != null) {
          this.encontroPacienteConsulta = true;
          console.log('el paciente CONSULTA tiene esta info ', this.pacienteConsulta[0]);
          // this.nombrePaciente=this.paciente[0].nombre +','+this.paciente[0].apellido;

          this.idPacienteConsulta = this.pacienteConsulta[0]._id;
        }
      });
  }

  getAfeccionesConsulta() {
    console.log('el id del paciente es ', this.idPacienteConsulta);
    console.log("a ver ",this.pacienteConsulta[0]._id)
    this.tratamientoService
      .getHCPacienteConsulta(this.pacienteConsulta[0]._id) //obtengo la HC del paciente, le mando el objeto paciente con el id
      .subscribe(
        (res) => {
          console.log('El ID de la HC del Paciente en res es: ', res._id);
          console.log("La HC del Paciente es: ",res);
          this.getAfeccionesDeHCConsulta(res._id);
        },
        (err) => console.error(err)
      );
    
   
  }

  getAfeccionesDeHCConsulta(idAfeccion: any) {
    //capaz deberia ser any y no que entre un string porque no puedo sacar los atributos de un string sino de un object xd
    console.log('entro a con un tipo', typeof idAfeccion);
    console.log('entro a con afeccion con id ', idAfeccion);
    this.tratamientoService.getInfoAfecciones(idAfeccion).subscribe(
      (data) => {
        this.afecciones = data;
        console.log('El resultado afecciones ES: ',this.afecciones);
      this.getLaAfeccionConsulta(this.afecciones)
        this.hayAfeccionConsulta = true;
        console.log(this.hayAfeccionConsulta);
      },
      (err) => console.error(err)
    );
  }

  getLaAfeccionConsulta(unaAfeccion:any){
    console.log("Entro a getLaAfeccionConsulta para traer DATO DE LA AFECCION con ",unaAfeccion)
    this.tratamientoService.getInfoLaAfeccionConsulta(unaAfeccion).subscribe(
      (data) => {
        console.log('El resultado final de DATOS de 1 AFECCION: ', data);
        const nombre:any=data;
        this.nomUnaAfeccionConsulta = nombre;
        console.log('El resultado final de DATOS entrando al arreglo de AFECCION ES: ',this.nomUnaAfeccionConsulta);
      
      },
      (err) => console.error(err)
    );
  }

  getAfecciones() {
    console.log('el id del paciente es ', this.idPaciente);
    this.tratamientoService
      .getHCPaciente(this.paciente[0]._id) //obtengo la HC del paciente, le mando el objeto paciente con el id
      .subscribe(
        (res) => {
          console.log('El ID de la HC del Paciente en res es: ', res._id);
          console.log("La HC del Paciente es: ",res);
          //las siguientes dos lineas CREO que no las necesito

    
          this.getAfeccionesDeHC(res._id);
        

        },
        (err) => console.error(err)
      );
    
   
  }

  getAfeccionesDeHC(idAfeccion: any) {
    //capaz deberia ser any y no que entre un string porque no puedo sacar los atributos de un string sino de un object xd
    console.log('entro a con un tipo', typeof idAfeccion);
    console.log('entro a con afeccion con id ', idAfeccion);
    this.tratamientoService.getInfoAfecciones(idAfeccion).subscribe(
      (data) => {
        this.afecciones = data;
        console.log('El resultado afecciones ES: ',this.afecciones);
      this.getLaAfeccion(this.afecciones)
        this.hayAfeccion = true;
        console.log(this.hayAfeccion);
      },
      (err) => console.error(err)
    );
  }


  getLaAfeccion(unaAfeccion:any){
    console.log("Entro a getLaAfeccion para traer DATO DE LA AFECCION con ",unaAfeccion)
    this.tratamientoService.getInfoLaAfeccion(unaAfeccion).subscribe(
      (data) => {
        console.log('El resultado final de DATOS de 1 AFECCION: ', data);
        const nombre:any=data;
        this.nomUnaAfeccion = nombre;
        console.log('El resultado final de DATOS entrando al arreglo de AFECCION ES: ',this.nomUnaAfeccion);
      
      },
      (err) => console.error(err)
    );
  }

  obtenerDiagnostico() {
    //.getDiagnostico(this.afecciones)
    this.tratamientoService.getDiagnostico()
      .subscribe(
        (res) => {
          console.log("la data del diagnostico es ",res);
          this.diagnostico=res
          if(this.diagnostico!='No existe diagnostico definitivo para esta afeccion'){
            this.hayDiagnostico=true
          }
        },
        (err) => console.error(err)
      );
  }

  obtenerDiagnosticoConsulta() {
    //.getDiagnostico(this.afecciones)
    this.tratamientoService.getDiagnosticoConsulta()
      .subscribe(
        (res) => {
          console.log("la data del diagnostico es ",res);
          this.diagnosticoConsulta=res
          if(this.diagnostico!='No existe diagnostico definitivo para esta afeccion'){
            this.hayDiagnosticoConsulta=true
          }
        },
        (err) => console.error(err)
      );
  }
  
  obtenerDatosTratamiento(){
    this.tratamientoService.getDatosTratamiento()
      .subscribe(
        (res) => {
          console.log("la data del diagnostico es ",res);
          this.datosTratamiento=res
          if(this.datosTratamiento!=null){
            this.tratamiento.tipo=this.datosTratamiento.tipo;
            this.tratamiento.duracion_en_dias=this.datosTratamiento.duracion_en_dias;
            this.tratamiento.descripcion=this.datosTratamiento.descripcion;
            this.tratamiento.fecha=this.datosTratamiento.fecha;
            this.consultaTratamientoOn=true;
          }
        },
        (err) => console.error(err)
      );


  }

  verificarMedicacion(medicacion: any) {
    console.log(medicacion);
    this.tratamientoService.getMedicacion(medicacion).subscribe((data) => {
      console.log("LA BENDITA MEDICACION ",data)
        this.paciente = data;
        if (this.pacientes != null) {
          
          console.log('la medicación tiene esta info ',data);
          this.tratamiento.Medicacion=data.medicacion
          console.log('la medicación del tratamiento tiene esta info ',this.tratamiento.Medicacion);
          this.medicacionValida=true;
        }
      });
  }
  
guardarTratamiento(){
  this.altaTratamientoExitosa=true;
  console.log("crear tratamiento")
  console.log("el tratamiento es ",this.tratamiento)
  
  this.tratamientoService.crearTratamiento(this.tratamiento).subscribe((data) => {
   
    let idTratamiento = data.data.datosTratamiento;
    console.log("despues de que le hice post a tratamiento ", data)
    console.log("a ver que me da por idTratamiento ", idTratamiento)
    this.agregarTratamientoAfeccion(idTratamiento,this.afecciones);
    
  
    this.router.navigate(['/']);
  });
  
};

agregarTratamientoAfeccion(idTratamiento:any, idAfeccion:any){
  let body ={
  "_idTratamiento" : idTratamiento
}

  this.tratamientoService.putAfeccion(idAfeccion,body).subscribe(data => { 
    console.log("afeccion modificada",data)
});



}
 
}
