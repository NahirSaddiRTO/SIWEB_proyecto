"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const core_1 = require("@angular/core");
//import { User } from 'firebase';
const operators_1 = require("rxjs/operators");
let AuthService = class AuthService {
    //public user:User;
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    async loguearse(email, password) {
        try {
            const result = await this.afAuth.signInWithEmailAndPassword(email, password);
            return result;
        }
        catch (err) {
            return err;
        }
    }
    ;
    async registrarse(email, password) {
        try {
            const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
            return result;
        }
        catch (err) {
            return err;
        }
    }
    ;
    async cerrarSesion() {
        try {
            await this.afAuth.signOut();
        }
        catch (err) {
            return err;
        }
    }
    ;
    getUsuarioActual() {
        try {
            return this.afAuth.authState.pipe((0, operators_1.first)()).toPromise();
        }
        catch (err) {
            return err;
        }
    }
};
AuthService = __decorate([
    (0, core_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
