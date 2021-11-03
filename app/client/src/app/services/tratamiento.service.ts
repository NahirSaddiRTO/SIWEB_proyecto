import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';


import { ITratamiento } from "src/app/interfaces/ITratamiento";
import { IAfeccion } from "src/app//interfaces/IAfeccion";
import { IFormacionProfesional} from "src/app/interfaces/IFormacionProfesional";
import { Observable, of } from "rxjs";
import { IMedico } from "src/app/interfaces/IMedico";
import { IPaciente } from "src/app/interfaces/IPaciente";
import { IHistoriaClinica } from "src/app/interfaces/IHistoriaClinica";
import { IDiagnostico} from "src/app/interfaces/IDiagnostico";
import { IMedicacion} from "src/app/interfaces/IMedicacion";

import { Sexo, Identificacion,EstadoCivil } from 'src/app/interfaces/enumerados';
import { isNull } from "@angular/compiler/src/output/output_ast";


@Injectable({
  providedIn: "root",
})
export class TratamientoService {
  //selectedTratamiento: Tratamiento;
  afeccion:any[]=[];
  historiaClinica:any;
  infoAfeccion:  any;
  infoAfeccionConsulta:  any;
  sintomasAfeccion:any;
  tratamientoAfeccion:any;
  tratamientos: ITratamiento[] = [];
  readonly URL_API = "http://localhost:4000/alta-tratamiento"
 // readonly URL_API = "http://localhost:4000/alta-tratamiento/formacion-profesional/Medica/TU260255"
 private URI ='http://localhost:4000/consultaMedicaciones';
 private URL ='http://localhost:4000/consulta-tratamientos';
 private URIB ='http://localhost:4000/alta-consulta'

 
  constructor(private http: HttpClient) {
   // this.infoAfeccion;
  }

  //para agregar tratamientos
  postTratamiento(elTratamiento: ITratamiento) {
    return this.http.post(this.URL_API, elTratamiento);
  }
  


  getMedico(idFormacion:string) : Observable<IMedico[]>{
    //return this.http.get<Tratamiento[]>(this.URL_API); //.subscribe()?
    return this.http.get<IMedico[]>(this.URL_API+'/medico/:idFormacion').pipe(
      map((data) => {
         return data;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }

 


  getPaciente(nroDoc: string,tipoDoc:string): Observable<IPaciente[]>{
    return this.http.get<IPaciente[]>(this.URL_API+'/paciente/'+nroDoc+'/'+tipoDoc).pipe(
      map((data) => {
        console.log("el paciente es",data)
         return data;
      }),
      )
  }

  getPacienteConsulta(nroDoc: string,tipoDoc:string): Observable<IPaciente[]>{
    return this.http.get<IPaciente[]>(this.URL+'/paciente/'+nroDoc+'/'+tipoDoc).pipe(
      map((data) => {
        console.log("el paciente es",data)
         return data;
      }),

     /* catchError(this.handleError<IPaciente[]>('getPaciente', [])
      
      )*/
      )
  }

  getHCPaciente(idPaciente:String): Observable<any> {
    //return this.http.put(this.URL_API + `/${elTratamiento._id}`, elTratamiento);
    return this.http.get<IHistoriaClinica[]>(this.URL_API+'/historia-clinica/paciente/'+idPaciente).pipe(
      map((data) => {
        console.log("La DATA en getHCPAciente tiene: ",data)
        console.log("A VERRRR la HistoriaClinica del PACIENTE tiene:",data[0]); //hc es un arreglo(no deberia) entonces me traigo el 1er elem del aregglo de hc, que es una hc
        console.log("A VER el id de la HC del paciente",data[0]._id);

        this.historiaClinica=data[0]

        return this.historiaClinica; //aca devuelvo la historia clinica


      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }

  getHCPacienteConsulta(idPaciente:String): Observable<any> {
    //return this.http.put(this.URL_API + `/${elTratamiento._id}`, elTratamiento);
    return this.http.get<IHistoriaClinica[]>(this.URL+'/historia-clinica/paciente/'+idPaciente).pipe(
      map((data) => {
        console.log("La DATA en getHCPAciente tiene: ",data)
        console.log("A VERRRR la HistoriaClinica del PACIENTE tiene:",data[0]); //hc es un arreglo(no deberia) entonces me traigo el 1er elem del aregglo de hc, que es una hc
        console.log("A VER el id de la HC del paciente",data[0]._id);

        this.historiaClinica=data[0]

        return this.historiaClinica; //aca devuelvo la historia clinica


      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }


  getAfeccionDeHCPaciente(idPaciente:String): Observable<any> {
    return this.http.get<IHistoriaClinica[]>(this.URL_API+'/historia-clinica/paciente/'+idPaciente).pipe(
      map((data) => {
     //   console.log("LA DATA de getAfecciondeHCPaciente : ",data);
        this.afeccion[0]=data[0].afeccion; //me traigo el id de la afeccion de la hc del paciente
        this.historiaClinica=data[0]

        return this.historiaClinica; //aca devuelvo la historia clinica
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
  getInfoAfecciones(idAfeccion:any) : Observable<any[]>{
    console.log("entro a getinfoafecciones con ",idAfeccion)
      return this.http.get<IAfeccion[]>(this.URL_API+'/historia-clinica/'+idAfeccion).pipe(
      map((data) => {
        console.log("eldato desde service de afecciones es de tipo:", typeof data)
         return data;
      }),
      catchError((err, caught) => {
        console.log("ERROOOOR")
        console.error(err);
        throw err;
      }
      )
    )
  }

  getInfoAfeccionesConsulta(idAfeccion:any) : Observable<any[]>{
    console.log("entro a getinfoafecciones con ",idAfeccion)
      return this.http.get<IAfeccion[]>(this.URL+'/historia-clinica/'+idAfeccion).pipe(
      map((data) => {
       // console.log("eldato desde service de afecciones es de tipo:", typeof data)
         return data;
      }),
      catchError((err, caught) => {
        console.log("ERROOOOR")
        console.error(err);
        throw err;
      }
      )
    )
  }



  getInfoLaAfeccion(idUnaAfeccion:any): Observable<any[]> {

    console.log("entro a get info de LA afeccion ")
    return this.http.get<IAfeccion[]>(this.URL_API+'/afeccion/'+idUnaAfeccion).pipe(
      map((data) => {
      //  console.log("eldato desde service de afecciones de hc:", data)
       // const nombreAfeccion: any=data.nom
       this.infoAfeccion=data;
        const nombreAfeccion: any=this.infoAfeccion.nom
      // console.log(" el nombre de la afeccion en el documento de infoAfeccion es ",nombreAfeccion)
         return nombreAfeccion;
      }),
      catchError((err, caught) => {
        console.log("ERROOOOR")
        console.error(err);
        throw err;
      }
      )
    )
  }

  getInfoLaAfeccionConsulta(idUnaAfeccion:any): Observable<any[]> {

    console.log("entro a get info de LA afeccion ")
    return this.http.get<IAfeccion[]>(this.URL+'/afeccion/'+idUnaAfeccion).pipe(
      map((data) => {
      //  console.log("eldato desde service de afecciones de hc:", data)
       // const nombreAfeccion: any=data.nom
       this.infoAfeccionConsulta=data;
       console.log("La info de afeccion de la consulta es ",this.infoAfeccionConsulta)
       /*guardamos datos que se quieren mostrar en la consulta */
       this.sintomasAfeccion=this.infoAfeccionConsulta.sintomas;
       this.tratamientoAfeccion=this.infoAfeccionConsulta.tratamiento;
        const nombreAfeccion: any=this.infoAfeccionConsulta.nom
      // console.log(" el nombre de la afeccion en el documento de infoAfeccion es ",nombreAfeccion)
         return nombreAfeccion;
      }),
      catchError((err, caught) => {
        console.log("ERROOOOR")
        console.error(err);
        throw err;
      }
      )
    )
    
  }

  getDiagnostico() : Observable<any[]> {
    //return this.http.put(this.URL_API + `/${elTratamiento._id}`, elTratamiento);
    console.log("EN EL SERVICE el id del diagnostico es ",this.infoAfeccion.diag)
    console.log("El tipo del id es ", typeof this.infoAfeccion.diag._id)
    return this.http.get<IDiagnostico[]>(this.URL_API+'/diagnostico/'+this.infoAfeccion.diag._id).pipe(
      map((data) => {
        console.log("El dato que trae de diagnostico es ",data)
         return data;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
       /* const diagnosticoAfeccion: any=this.infoAfeccion.diag
        console.log("el diagnostico es ",diagnosticoAfeccion)
        return diagnosticoAfeccion;*/
  }

  getDiagnosticoConsulta() : Observable<any[]> {
    //return this.http.put(this.URL_API + `/${elTratamiento._id}`, elTratamiento);
    console.log("EN EL SERVICE el id del diagnostico es ",this.infoAfeccionConsulta.diag)
    console.log("El tipo del id es ", typeof this.infoAfeccionConsulta.diag._id)
    return this.http.get<IDiagnostico[]>(this.URL+'/diagnostico/'+this.infoAfeccionConsulta.diag._id).pipe(
      map((data) => {
        console.log("El dato que trae de diagnostico es ",data)
         return data;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
  getDatosTratamiento(){
    console.log("por parametro el tratamiento que busco tiene el id: ",this.infoAfeccionConsulta.tratamiento[0]._id)
    return this.http.get<ITratamiento[]>(this.URL+'/tratamiento/'+this.infoAfeccionConsulta.tratamiento[0]._id).pipe(
      map((data) => {
        console.log("El dato que trae de tratamiento es ",data)
         return data;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
  getMedicacion(nombre:string): Observable<any> {////????????????????????????
    console.log("EN EL SERVICE el nombre de la medicacion es ",nombre)
    
    return this.http.get<any>(this.URL_API+'/medicacion/'+nombre).pipe(
      map((data) => {
        console.log("El dato que trae de MEDICACION es ",data)
         return data;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }



crearTratamiento(elTratamiento:any): Observable<any>{
    console.log("el tratamiento que entra es ",elTratamiento)
  return this.http.post(this.URL_API+'/tratamiento', elTratamiento); 
}

putAfeccion(idAfeccion:any, tratamiento:any){
  return this.http.put(this.URL_API+'/afeccion/'+idAfeccion, tratamiento); 
}

  
  getTratamientosxMedico(idMedico: String,fechaDesde:Date,fechaHasta:Date): Observable<ITratamiento[]>{
    console.log(this.URI+'/tratamiento/'+idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta);
    return this.http.get<ITratamiento[]>(this.URI+'/tratamiento/'+idMedico+'?fechaDesde='+fechaDesde+'&fechaHasta='+fechaHasta).pipe(
      map((data) => {
        console.log("tratamiento",data)
         return data;
      }),
      catchError(this.handleError<ITratamiento[]>('getTratamientosxMedico', []))
      )
    
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

/* form profesional */
  getProfesional(tipoMatricula: String,nroMatricula:String): Observable<IFormacionProfesional[]>{
    console.log(this.URIB+'/formacion-profesional/'+tipoMatricula+'/'+nroMatricula);
    return this.http.get<IFormacionProfesional[]>(this.URI+'/formacion-profesional/'+tipoMatricula+'/'+nroMatricula).pipe(
      map((data) => {
        console.log("ddd",data)
         return data;
      }),
      catchError(this.handleError<IFormacionProfesional[]>('getProfesional', []))
      )
    
  }
  
  getMedicoConFP(idFormacion: String): Observable<IMedico[]>{
    console.log(this.URIB+'/medico/'+idFormacion);
    return this.http.get<IMedico[]>(this.URI+'/medico/'+idFormacion).pipe(
      map((data) => {
        console.log("medico",data)
         return data;
      }),
      catchError(this.handleError<IMedico[]>('getMedicoConFP', []))
      )
    
  }
}