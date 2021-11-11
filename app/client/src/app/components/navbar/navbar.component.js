"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarComponent = void 0;
const core_1 = require("@angular/core");
const auth_service_1 = require("src/app/services/auth.service");
let NavbarComponent = class NavbarComponent {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.user$ = this.authSvc.afAuth.user;
    }
    async ngOnInit() {
    }
    async cerrar() {
        try {
            await this.authSvc.cerrarSesion();
            this.router.navigate(['/login']);
        }
        catch (err) {
            console.log(err);
        }
    }
};
NavbarComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
        providers: [auth_service_1.AuthService]
    })
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
