export enum Sexo {
    'femenino',
    'masculino',
    'otro'
}

export enum Identificacion {
    'documentoExtranjero', 
    'pasaporte',
    'DNI',
    'LC',
    'LE'
}
export enum EstadoCivil {
    'casado',
    'separado',
    'divorciado',
    'viudo',
    'soltero',
    'otro'
}

export function getObjSexos() {
    let arrSexo = Object.keys(Sexo);
    arrSexo = arrSexo.slice(arrSexo.length / 2);
    console.log("arrSexo",arrSexo)
    return arrSexo;
}
export function getTipoIdentificacion() {
    let arrTipoId = Object.keys(Identificacion);
    arrTipoId = arrTipoId.slice(arrTipoId.length / 2);
    console.log("arrTipoId",arrTipoId)
    return arrTipoId;
}

export function getEstadoCivil() {
    let arrEstado = Object.keys(EstadoCivil);
    arrEstado = arrEstado.slice(arrEstado.length / 2);
    console.log("arrEstado",arrEstado)
    return arrEstado;
}