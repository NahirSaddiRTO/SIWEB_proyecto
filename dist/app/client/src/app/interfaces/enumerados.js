"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstadoCivil = exports.getTipoIdentificacion = exports.getObjSexos = exports.EstadoCivil = exports.Identificacion = exports.Sexo = void 0;
var Sexo;
(function (Sexo) {
    Sexo[Sexo["femenino"] = 0] = "femenino";
    Sexo[Sexo["masculino"] = 1] = "masculino";
    Sexo[Sexo["otro"] = 2] = "otro";
})(Sexo = exports.Sexo || (exports.Sexo = {}));
var Identificacion;
(function (Identificacion) {
    Identificacion[Identificacion["documentoExtranjero"] = 0] = "documentoExtranjero";
    Identificacion[Identificacion["pasaporte"] = 1] = "pasaporte";
    Identificacion[Identificacion["DNI"] = 2] = "DNI";
    Identificacion[Identificacion["LC"] = 3] = "LC";
    Identificacion[Identificacion["LE"] = 4] = "LE";
})(Identificacion = exports.Identificacion || (exports.Identificacion = {}));
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["casado"] = 0] = "casado";
    EstadoCivil[EstadoCivil["separado"] = 1] = "separado";
    EstadoCivil[EstadoCivil["divorciado"] = 2] = "divorciado";
    EstadoCivil[EstadoCivil["viudo"] = 3] = "viudo";
    EstadoCivil[EstadoCivil["soltero"] = 4] = "soltero";
    EstadoCivil[EstadoCivil["otro"] = 5] = "otro";
})(EstadoCivil = exports.EstadoCivil || (exports.EstadoCivil = {}));
function getObjSexos() {
    let arrSexo = Object.keys(Sexo);
    arrSexo = arrSexo.slice(arrSexo.length / 2);
    console.log("arrSexo", arrSexo);
    return arrSexo;
}
exports.getObjSexos = getObjSexos;
function getTipoIdentificacion() {
    let arrTipoId = Object.keys(Identificacion);
    arrTipoId = arrTipoId.slice(arrTipoId.length / 2);
    console.log("arrTipoId", arrTipoId);
    return arrTipoId;
}
exports.getTipoIdentificacion = getTipoIdentificacion;
function getEstadoCivil() {
    let arrEstado = Object.keys(EstadoCivil);
    arrEstado = arrEstado.slice(arrEstado.length / 2);
    console.log("arrEstado", arrEstado);
    return arrEstado;
}
exports.getEstadoCivil = getEstadoCivil;
