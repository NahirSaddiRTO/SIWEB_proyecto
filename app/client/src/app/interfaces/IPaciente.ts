import { Sexo, Identificacion,EstadoCivil } from './enumerados';

export interface IPaciente{
    nrodocumento:String;
    tipodni:Identificacion;
    nombre: String;
    apellido: String;
    piso:Number;
    calle: String;
    altura: Number;
    fechanacimiento:Date;//string;//acá es date en realidad pero me cuesta para el alta-tratamiento.component.ts
    estado:EstadoCivil;
    telefono_pac:[Number];
    sexo:Sexo;
    _id:String
}