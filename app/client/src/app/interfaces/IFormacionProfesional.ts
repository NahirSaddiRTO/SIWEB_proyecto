import {IEspecialidad} from './IEspecialidad';

export interface IFormacionProfesional{
    nroMatricula:String;
    tipoMatricula: String;
    fechaTitulo: Date;
    especialidad: IEspecialidad;
    _id:String;
}