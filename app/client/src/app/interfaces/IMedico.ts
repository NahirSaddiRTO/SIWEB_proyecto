import {IFormacionProfesional} from './IFormacionProfesional';

import { Sexo, Identificacion } from './enumerados';

export interface IMedico{
    nombre: String;
    apellido: String;
    calle: String;
    altura: Number;
    piso: Number;
    tipoDni:Identificacion;
    nroDocumento:String;
    telefono:[Number];
    formacionProfesional:string;//IFormacionProfesional;
    sexo:Sexo;
    _id:String;
}