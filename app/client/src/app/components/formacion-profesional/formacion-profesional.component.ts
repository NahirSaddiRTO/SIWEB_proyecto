import { Component, OnInit } from '@angular/core';
import {ConsultaService} from './../../services/alta-consulta.service';
import { IFormacionProfesional } from '../../interfaces/IFormacionProfesional';
import { IMedico } from '../../interfaces/IMedico';
@Component({
  selector: 'app-formacion-profesional',
  templateUrl: './formacion-profesional.component.html',
  styleUrls: ['./formacion-profesional.component.css']
})
export class FormacionProfesionalComponent implements OnInit {
  formacionProfesional: IFormacionProfesional []=[];
  medico: IMedico []=[];
  mostrarErrorFP=false;
  
  mostrarErrorMedico=false;
  tipoMatricula :any;
  matricula:any;
  nombreMedico:any;
  idMedico:any;
  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
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
      this.idMedico = this.medico[0]._id;
   
      this.mostrarErrorMedico = false;
    }
});
}
}
