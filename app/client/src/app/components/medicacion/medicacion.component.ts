import { Component, OnInit  } from '@angular/core';
import {TratamientoService} from './../../services/tratamiento.service';
import {ConsultaService} from './../../services/alta-consulta.service';
import { ITratamiento } from '../../interfaces/ITratamiento';

@Component({
  selector: 'app-medicacion',
  templateUrl: './medicacion.component.html',
  styleUrls: ['./medicacion.component.css']
})
export class MedicacionComponent implements OnInit {
  tratamientosMedico: ITratamiento []=[];
  medicaciones:any[]=[];
  fechaDesde:any;
  fechaHasta:any;
  verMedicaciones=false;
  mostrarErrorTratamientosMedico=false;
  headElements = ['ID','Fecha', 'Tipo', 'Descripción','Medicaciones'];
  headMedicaciones = ['ID','Dosis','Nombre','Proposito'];
  mostrarMensaje=false;
  msg:any;
  constructor(private tratamientoService: TratamientoService,private consultaService: ConsultaService) { }

  ngOnInit(): void {
  }



  buscarConsultas(idMedico:any, fechaDesde:any,fechaHasta:any){
    console.log(idMedico, fechaDesde,fechaHasta)
 
     this.tratamientoService.getTratamientosxMedico(idMedico,fechaDesde,fechaHasta).subscribe(data => { 
       this.tratamientosMedico = data;
      console.log("tratamientosMedico",this.tratamientosMedico);
      if(this.tratamientosMedico.length==0){
        console.log("no tiene elementos",this.tratamientosMedico);
        this.mostrarErrorTratamientosMedico = true;
      }
      else{
        console.log("tiene elementos")
        this.mostrarErrorTratamientosMedico = false;
      }
  });
   }

   mostrarMedicacion(datos:any){
    console.log("datos",datos)
     this.medicaciones=[];
     datos.Medicacion.forEach((element: { _id: any; }) => {
       console.log("element",element);
     this.buscarMedicaciones(element._id);
     }); 
  }
 
   
   buscarMedicaciones(idMedicacion:any){
    console.log(idMedicacion)
 
   this.consultaService.getMedicaciones(idMedicacion).subscribe(data => { 
       this.medicaciones.push(data);
      console.log("medicaciones",this.medicaciones);
      if(this.medicaciones.length!=0){
        console.log("no tiene medicaciones",this.medicaciones);
        this.verMedicaciones = true;
      }
      else{
        console.log("tiene medicaciones")
        this.verMedicaciones = false;
      }
  });
   }
   mandarMail() {
    console.log('entro a mandar mail');
    this.consultaService.getMail().subscribe((data) => {
      console.log('hola', data);
    });
    //var data= ServiceEmail.index();
    // console.log(data);
    // console.log('mandé mail',data);
  }
  mandarFarmaciaTurno() {
    console.log('entro a farmacia');
    this.consultaService.getFarmaciaTurno().subscribe((data) => {
      console.log('hola', data);
    });
  }

  mandarEncargado() {
    console.log('entro a buscar el encargado de la guardia');
    this.consultaService.getEncargado().subscribe((data) => {
      console.log('El encargado de la guardia es ', data);/* data[0]*/
      
      if(data==null){/* data[0].length==0*/
        this.msg="No hay encargado";
      }else{
        this.mostrarMensaje=true;
        this.msg=data;/* data[0]*/
      }
    });
  }
}
