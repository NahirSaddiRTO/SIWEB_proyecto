"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const auth_service_1 = require("../../services/auth.service");
let RegisterComponent = class RegisterComponent {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.registerForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    }
    ngOnInit() {
    }
    async registrarse() {
        const { email, password } = this.registerForm.value;
        try {
            const user = await this.authSvc.registrarse(email, password);
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
RegisterComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css'],
        providers: [auth_service_1.AuthService]
    })
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
