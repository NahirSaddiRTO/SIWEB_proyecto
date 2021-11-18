import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//INTERFACES
import { ICentroSalud } from './../interfaces/ICentroSalud';
import { IMedico } from '../interfaces/IMedico';
import { IConsulta } from '../interfaces/IConsulta';
import { IFormacionProfesional } from './../interfaces/IFormacionProfesional';
import { IPaciente } from './../interfaces/IPaciente';
import { IAfeccion } from './../interfaces/IAfeccion';
import { IMedicacion } from './../interfaces/IMedicacion';
@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private URI ='http://localhost:4000/alta-consulta'
  private URI_HC ='http://localhost:4000/alta-paciente-hc'
  private URI_CM ='http://localhost:4000/consultaMedicaciones';

  private URIF ='http://localhost:4000';
  constructor(private http: HttpClient) { }

getCentroSalud(): Observable<ICentroSalud[]>{
    return this.http.get<ICentroSalud[]>(this.URI+'/centro-salud').pipe(
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

getProfesional(tipoMatricula: String,nroMatricula:String): Observable<IFormacionProfesional[]>{
  console.log(this.URI+'/formacion-profesional/'+tipoMatricula+'/'+nroMatricula);
  return this.http.get<IFormacionProfesional[]>(this.URI+'/formacion-profesional/'+tipoMatricula+'/'+nroMatricula).pipe(
    map((data) => {
      console.log("ddd",data)
       return data;
    }),
    catchError(this.handleError<IFormacionProfesional[]>('getProfesional', []))
    )
  
}

getMedicoConFP(idFormacion: String): Observable<IMedico[]>{
  console.log(this.URI+'/medico/'+idFormacion);
  return this.http.get<IMedico[]>(this.URI+'/medico/'+idFormacion).pipe(
    map((data) => {
      console.log("medico",data)
       return data;
    }),
    catchError(this.handleError<IMedico[]>('getMedicoConFP', []))
    )
  
}

getConsultasMedico(idMedico: String,fechaDesde:Date): Observable<IConsulta[]>{
  console.log(this.URI+'/medico/'+idMedico+'?fechaDesde='+fechaDesde);
  //return this.http.get<IConsulta[]>(this.URI+'/consulta/medico/'+idMedico+'?fechaDesde='+fechaDesde).pipe(
  return this.http.get<IConsulta[]>(this.URI+'/consulta/medico/'+idMedico+'?fechaDesde=2014-02-10 10:50:57.240Z').pipe(
    map((data) => {
      console.log("consulta",data)
       return data;
    }),
    catchError(this.handleError<IConsulta[]>('getConsultasMedico', []))
    )
  
}

getPaciente(nroDni: String,tipoDni:String): Observable<IPaciente[]>{
  console.log(this.URI+'/paciente/'+tipoDni+'/'+nroDni);
  return this.http.get<IPaciente[]>(this.URI+'/paciente/'+tipoDni+'/'+nroDni).pipe(
    map((data) => {
      console.log("paciente",data)
       return data;
    }),
    catchError(this.handleError<IPaciente[]>('getPaciente', []))
    )
}

getConsultasPaciente(idPaciente: String,fechaDesde:Date): Observable<IConsulta[]>{
  console.log(this.URI+'/consulta/paciente/'+idPaciente+'?fechaDesde='+fechaDesde);
  return this.http.get<IConsulta[]>(this.URI+'/consulta/paciente/'+idPaciente+'?fechaDesde='+fechaDesde).pipe(
    map((data) => {
      console.log("consulta",data)
       return data;
    }),
    catchError(this.handleError<IConsulta[]>('getConsultasPaciente', []))
    )
  
}

getAfecciones(): Observable<IAfeccion[]>{
  return this.http.get<IAfeccion[]>(this.URI+'/afecciones').pipe(
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

postConsulta(consulta: IConsulta): Observable<any> {
  return this.http.post(this.URI+'/consulta', consulta); 
}

putAfeccion(idAfeccion:any,body:any): Observable<any> {
  return this.http.put(this.URI+'/afeccion/'+idAfeccion, body); 
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    return of(result as T);
  };
}


postPaciente(paciente: IPaciente): Observable<any> {
  return this.http.post(this.URI_HC+'/paciente', paciente); 
}
postHC(body:any): Observable<any> {
  return this.http.post(this.URI_HC+'/historiaClinica', body); 
}

getMedicaciones(idMedicacion: String): Observable<IMedicacion[]>{
  console.log(this.URI_CM+'/medicaciones/'+idMedicacion);
  return this.http.get<IMedicacion[]>(this.URI_CM+'/medicaciones/'+idMedicacion).pipe(
    map((data) => {
      console.log("IMedicaciones",data)
       return data;
    }),
    catchError(this.handleError<IMedicacion[]>('getMedicaciones', []))
    )
  
}
getMail(){
  // return this.http.post(this.URI+'/email','');
   return this.http.get<String>(this.URIF+'/email').pipe(
     map((data) => {
       console.log(" VERRR",data)
        return data;
     }),
     catchError(this.handleError<String>('..........................'))
     )
   
 }
 
 getFarmaciaTurno(){
   // return this.http.post(this.URI+'/email','');
    return this.http.get(this.URIF+'/farmacias')/*.pipe(
      map((data) => {
        console.log(" VERRR",data)
         return data;
      }),
      catchError(this.handleError<String>('..........................'))
      )*/
    
  }
  getEncargado(){
   // return this.http.post(this.URI+'/email','');
    return this.http.get(this.URIF+'/farmaciasxt')/*.pipe(
      map((data) => {
        console.log(" VERRR",data)
         return data;
      }),
      catchError(this.handleError<String>('..........................'))
      )*/
    
  }
}

