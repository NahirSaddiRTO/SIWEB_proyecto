"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const auth_service_1 = require("src/app/services/auth.service");
let LoginComponent = class LoginComponent {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    }
    ngOnInit() {
    }
    async loguearse() {
        const { email, password } = this.loginForm.value;
        try {
            const user = await this.authSvc.loguearse(email, password);
            if (user) {
                //regirect a home
                this.router.navigate(['/home']);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async loguearseGoogle() {
        try {
            const user = await this.authSvc.loginGoogle();
            if (user) {
                //regirect a home
                this.router.navigate(['/home']);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};
LoginComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        providers: [auth_service_1.AuthService]
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
