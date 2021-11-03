import {IMedico} from './IMedico';
export interface ITratamiento {
    _id: string;
    duracion_en_dias: number;
    tipo: string;
    fecha: Date;
    descripcion:string;
    Medico: 
    {
      id: String,
  };
    Medicacion: [{
      id: String,
  }];
  }