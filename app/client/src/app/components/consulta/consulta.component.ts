import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ConsultaService} from './../../services/alta-consulta.service'
//INTERFACES
import { ICentroSalud } from '../../interfaces/ICentroSalud';
import { IFormacionProfesional } from '../../interfaces/IFormacionProfesional';
import { IMedico } from '../../interfaces/IMedico';
import { IConsulta } from '../../interfaces/IConsulta';
import { IPaciente } from '../../interfaces/IPaciente';
import { IAfeccion } from '../../interfaces/IAfeccion';

@Component({
  selector: 'app-consulta',
  templateUrl: './Alta-consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  centrosSalud: ICentroSalud []=[];
  formacionProfesional: IFormacionProfesional []=[];
  medico: IMedico []=[];
  paciente: IPaciente []=[];
  afecciones: IAfeccion []=[];
  consultasMedico: IConsulta []=[];
  consultasPaciente: IConsulta []=[];
  afeccion:IAfeccion[]=[];
  consultaFin:IConsulta[]=[];

  mostrarErrorFP=false;
  mostrarErrorMedico=false;
  mostrarErrorConsultasMedico=false;
  mostrarErrorPaciente=false;
  mostrarErrorConsultasPaciente=false;
  asociaAfeccion=false;
  consultaCreada=false;
  
  afeccionSelec:any;
  centroSaludSelec:any;
  tipoMatricula :any;
  matricula:any;
  nroDni :any;
  tipoDni:any;
  nombreMedico:any;
  nombrePaciente:any;
  fechaDesdeMedico:any;
 
  consulta: any = {
    fechaHora:new Date(),
    motivo: '',
    paciente: { _id: ''},
    medico: { _id: ''},
    centroSalud: { _id: ''}
};

  constructor(private consultaService: ConsultaService,private router: Router) {
    
    
   }

  ngOnInit(): void {
   this.buscarCentroSalud(); 
   console.log(this.centroSaludSelec);
   
  }
  
  
  buscarCentroSalud(){
    this.consultaService.getCentroSalud().subscribe(data => { 
      this.centrosSalud = data;
      console.log("centros",this.centrosSalud);
  });
  }

  buscarProfesional(tipoMatricula:any, nroMatricula:any){
    console.log(tipoMatricula,nroMatricula);
    this.consultaService.getProfesional(tipoMatricula,nroMatricula).subscribe(data => { 
      console.log("data",data)
      this.formacionProfesional = data;
      if(this.formacionProfesional.length==0){
        this.mostrarErrorFP = true;
      }
      else{
        this.mostrarErrorFP = false;
        const idFormacion = this.formacionProfesional[0]._id;
        this.buscarMedicoConFP(idFormacion);
        const idPaciente = this.paciente[0]._id;
         this.buscarConsultasPaciente(idPaciente,this.fechaDesdeMedico);
        this.mostrarErrorPaciente = false;
     //   const idFormacion = this.formacionProfesional[0]._id;
        this.buscarMedicoConFP(idFormacion);
      }
      
  });
 }

 buscarMedicoConFP(idFormacion:any){
  this.consultaService.getMedicoConFP(idFormacion).subscribe(data => { 
    this.medico = data;
    console.log("medico",this.medico);
    if(this.medico.length==0){
      this.mostrarErrorMedico = true;
    }
    else{
      
      this.nombreMedico=this.medico[0].nombre +','+this.medico[0].apellido;
     
      this.mostrarErrorMedico = false;
    }
});
}

  buscarConsultasMedico(idMedico:any,fechaDesde:any){
    //const idMedico = this.medico[0]._id;
    console.log("IDMEDDICO",idMedico)
    const idPaciente = this.paciente[0]._id;
    this.buscarConsultasPaciente(idPaciente,this.fechaDesdeMedico);
    this.mostrarErrorPaciente = false;
//   const idFormacion = this.formacionProfesional[0]._id;
  //  this.buscarMedicoConFP(idFormacion);

    this.consulta.medico._id=idMedico;
    this.consultaService.getConsultasMedico(idMedico,fechaDesde).subscribe(data => { 
      this.consultasMedico = data;
      console.log("consultasMedico",this.consultasMedico);
      if(!Array.isArray(this.consultasMedico)){
        this.mostrarErrorConsultasMedico = true;
      }
      else{
        this.mostrarErrorConsultasMedico = false;
      }
  });
  }

  buscarPaciente(nroDni:any, tipoDni:any){
    console.log(nroDni,tipoDni);
    this.consultaService.getPaciente(nroDni,tipoDni).subscribe(data => { 
      this.paciente = data;
      if(this.paciente.length==0){
        //CREO PACIENTE
        this.mostrarErrorPaciente = true;
      }
      else{
        //muestro info del paciente
        
      this.nombrePaciente=this.paciente[0].nombre +','+this.paciente[0].apellido;
      
      const idPaciente = this.paciente[0]._id;
     
      }
      
  });
 }

 buscarConsultasPaciente(idPaciente:any,fechaDesde:any){
  console.log(idPaciente,fechaDesde)
  this.consultaService.getConsultasPaciente(idPaciente,fechaDesde).subscribe(data => { 
    this.consultasPaciente = data;
    console.log("consultasPaciente",this.consultasPaciente);
    if(!Array.isArray(this.consultasPaciente)){
 
      this.mostrarErrorConsultasPaciente = true;
    }
    else{
      this.mostrarErrorConsultasPaciente = false;
    }
});
}

asociarAfeccion(){
//  this.asociaAfeccion.
  console.log("event",this.asociaAfeccion);
  if(!this.asociaAfeccion){
    console.log("busca afecciones");
    this.buscarAfecciones();
  }
  else{
    console.log("no va a buscar ni mierda")
  }

}


buscarAfecciones(){
  this.consultaService.getAfecciones().subscribe(data => { 
    this.afecciones = data;
    console.log("afecciones",this.afecciones);
});
}

  changeValueCentroSalud(event:any) {
    const value = event.target.value;
    this.centroSaludSelec = value;
  }

  changeValueAfeccion(event:any) {
    const value = event.target.value;
    this.afeccionSelec = value;    
    console.log(this.afeccionSelec);
  }

  crearConsulta(consulta:IConsulta){
 

    this.consultaService.postConsulta(consulta).subscribe(data => { 
     
      let idConsulta = data.data.datosConsulta._id;

      if(this.asociaAfeccion){
        console.log("quiero asociar")
       this.agregarConsultaAafeccion(idConsulta,this.afeccionSelec);
      }  
    this.consultaCreada = true; 
    alert('CONSULTA CREADA')
  
    this.router.navigate(['/']);

  });

  
    

  }

  agregarConsultaAafeccion(idConsulta:any, idAfeccion:any){
    let body ={
    "_idConsulta" : idConsulta
  }

    this.consultaService.putAfeccion(idAfeccion,body).subscribe(data => { 
      console.log("afeccion modificada",data)
  });

  }
  save() {
    console.log("crear consulta")
    if(this.consulta.motivo==''){
      alert('FALTA EL MOTIVO DE LA CONSULTA')
    }else{
    this.consulta.paciente._id=this.paciente[0]._id;
  //  this.consulta.medico._id=this.medico[0]._id;
    this.consulta.fechaHora = this.fechaDesdeMedico;
      console.log("consulta",this.consulta)
    this.crearConsulta(this.consulta)
    }
  };

  crearPaciente(){
    this.router.navigate(['/alta-pacienteHC']);
  }
  
}
