import {IPaciente} from './IPaciente';
import {IMedico} from './IMedico';
import {ICentroSalud} from './ICentroSalud';

export interface IConsulta {
    fechaHora:Date;
    motivo: String;
    paciente: IPaciente;
    medico: IMedico;
    centroSalud: ICentroSalud;
} 
