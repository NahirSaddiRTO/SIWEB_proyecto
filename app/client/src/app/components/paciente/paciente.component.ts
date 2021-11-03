import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as enumerados from './../../interfaces/enumerados';
import {ConsultaService} from './../../services/alta-consulta.service'

@Component({
  selector: 'app-paciente',
  templateUrl: './Alta-pacienteHC.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  sexos:any[]=[];
  tiposDni:any[]=[];
  estados:any[]=[];

  paciente:any ={
  nrodocumento:'',
  tipodni:'',
  nombre: '',
  apellido: '',
  piso:null,
  calle: null,
  altura: null,
  fechanacimiento:Date,
  estado:'',
  telefono_pac:[null],
  sexo:'',
}
  constructor(private consultaService: ConsultaService,private router: Router) { }

  ngOnInit(): void {
    this.sexos = enumerados.getObjSexos();
    this.tiposDni=enumerados.getTipoIdentificacion();
    this.estados=enumerados.getEstadoCivil();

  }

  changeValueTipoDni(event:any) {
    const value = event.target.value;
    this.paciente.tipodni = value;    
     console.log("tipo dni",this.paciente.tipodni);
  }

  changeValueEstados(event:any) {
    const value = event.target.value;
    this.paciente.estado = value;    
    console.log("estado",this.paciente.estado);
  }

  changeValueSexo(event:any) {
    const value = event.target.value;
   this.paciente.sexo = value;    
   console.log("sexo",this.paciente.sexo);
  }

  crearPaciente(){
    console.log("paciente",this.paciente)
    if(this.paciente.nrodocumento=='' || this.paciente.tipodni==''
    ||this.paciente.nombre==''||this.paciente.apellido==''||
    this.paciente.fechanacimiento==''|| this.paciente.sexo==''){
      alert('FALTAN DATOS')
    } else{
      this.consultaService.postPaciente(this.paciente).subscribe(data => { 
        console.log("paciente creado",data);
        let bodyHC={
          "paciente":{
            "_id" : data.data.datosConsulta._id
          }
        }
        this.consultaService.postHC(bodyHC).subscribe(dataHC => { 
          console.log("hc creada",dataHC);
    });
    
  });
  alert('PACIENTE CON HC CREADO')
  
  this.router.navigate(['/alta-consulta']);
    }
    


  
  }

}
