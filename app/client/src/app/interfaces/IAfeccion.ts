export interface IAfeccion {
  _id: String;
  nombre: String;
  tratamiento: {
    id: String;
  };
  sintomas: [
    {
      id: String;
    }
  ];

  consulta: [
    {
      id: String;
    }
  ];
  diagnostico: {
    id: String;
  };
}
