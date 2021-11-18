import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService],
})
export class NavbarComponent {
  public user$: Observable<any> = this.authSvc.afAuth.user;
  hayUsuario: boolean = false;
  public iniciarSesion_var = false;
  registro_var = false;
  public usuario: any;
  esMedico = false;

  medico = 'medico@gmail.com';

  administrativo = 'administrador@gmail.com';

  esAdministrativo = false;
  superAdmin='';//'superUsuario@gmail.com';
  esSuperAdmin = false;

  consultarTratamiento = false;
  consultarMedicacion = false;
  altaTratamiento = false;
  altaConsulta = false;

  constructor(private authSvc: AuthService, private router: Router) {}

  async ngOnInit() {
    console.log(this.user$);
    if (this.user$) {
      console.log('re vacio');
    } else {
      console.log('alfotiene');
    }
  }
  async cerrar() {
    try {
      console.log('USUARIO', this.user$);
      await this.authSvc.cerrarSesion();

      this.usuario = null;
      console.log('USUARIO', this.user$);
      this.consultarTratamiento = false;
      this.consultarMedicacion = false;
      this.altaTratamiento = false;
      this.altaConsulta = false;
      this.iniciarSesion_var = false;
      this.registro_var=false;
      this.hayUsuario=false;
      this.esAdministrativo=false;
      this.esMedico=false;
      this.esSuperAdmin=false;
    } catch (err) {
      console.log(err);
    }
  }

  altaDeTratamiento() {
    this.altaTratamiento = true;
    this.consultarTratamiento = false;
    this.consultarMedicacion = false;
    this.altaConsulta = false;
    console.log('alta trat', this.altaTratamiento);
  }

  consultaDeTratamiento() {
    this.altaTratamiento = false;
    this.consultarTratamiento = true;
    this.consultarMedicacion = false;
    this.altaConsulta = false;
    console.log('consulta de trat', this.consultarTratamiento);
  }

  consultaDeMedicacion() {
    this.altaTratamiento = false;
    this.consultarTratamiento = false;
    this.consultarMedicacion = true;
    this.altaConsulta = false;
    console.log('consulta med', this.consultarMedicacion);
  }

  altaDeConsulta() {
    this.altaTratamiento = false;
    this.consultarTratamiento = false;
    this.consultarMedicacion = false;
    this.altaConsulta = true;
    console.log('alta consulta', this.altaConsulta);
  }

  iniciarSesion() {
    this.registro_var = false;
    this.iniciarSesion_var = true;

    //this.usuario= await this.authSvc.getUsuarioActual();
  }

  registro() {
    this.iniciarSesion_var = false;
    this.registro_var = true;

    //console.log("var iniciarSESION - en registr",this.iniciarSesion_var);

    console.log('var registro_var - en registr', this.registro_var);
  }

  visualizar(usuario: any) {
    console.log('user', this.user$);
    console.log('SUUSARIO DE PARAM', usuario);
    this.usuario = usuario ? usuario : null;
    this.hayUsuario = this.usuario != null;
    console.log('HAY USUARIO', this.hayUsuario);
    if (this.hayUsuario && this.usuario!=null) {
      
      switch ( usuario.user && usuario.user.email) {
        case this.medico:
          this.esMedico = true;
          console.log('esMEDICO', this.esMedico);
          break;
        case this.administrativo:
          this.esAdministrativo = true;
          console.log('esAdministrativo', this.esAdministrativo);
          break;
        default:
          this.esSuperAdmin = true;

          console.log('esSuperAdmin', this.esSuperAdmin);
          break;
      }
    }
  }
}
