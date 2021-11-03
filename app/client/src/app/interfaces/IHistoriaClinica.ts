export interface IHistoriaClinica {
    _id: string;
    legajo: String;
    afeccion: {
        id: String,
    };
    medicacion: {
        id: String,
    };
    paciente: {
      id: String,
     // nombre: String,
     // apellido: String,
     // documento: String
  };
    
  }