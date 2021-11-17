import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService]
})

export class NavbarComponent{
public user$: Observable <any> =  this.authSvc.afAuth.user;
hayUsuario:boolean=false;
public iniciarSesion_var=false;
registro_var=false;
public usuario: any;
esMedico = false;

medico="medico@gmail.com";

administrativo="administrador@gmail.com";

esAdministrativo = false;
superAdmin = "superUsuario@gmail.com";
esSuperAdmin=false;

  constructor(  
    private authSvc:AuthService, 
    private router:Router) { }

  async ngOnInit() {
    console.log(this.user$);
    if(this.user$){console.log("re vacio")}else{console.log("alfotiene")}
    
  }
  async cerrar() {
    try{
      
      console.log("USUARIO",this.user$);
      await this.authSvc.cerrarSesion();
      
    this.usuario= null;
      console.log("USUARIO",this.user$);
       
     }
     catch(err){
       console.log(err);
     }
    }

 iniciarSesion(){
this.registro_var=false;
this.iniciarSesion_var=true;

//this.usuario= await this.authSvc.getUsuarioActual();

    }
    registro(){
      
this.iniciarSesion_var=false;
this.registro_var=true;

//console.log("var iniciarSESION - en registr",this.iniciarSesion_var);

console.log("var registro_var - en registr",this.registro_var);

    }

    
    visualizar(usuario: any) {
      console.log("SUUSARIO DE PARAM",usuario);
      this.usuario = usuario ? usuario : null;
      this.hayUsuario = (this.usuario != null);
      console.log("HAY USUARIO", this.hayUsuario);
      if(this.hayUsuario){
        switch(usuario.user.email){
          case  this.medico: 
            this.esMedico=true;
            console.log("esMEDICO",this.esMedico);
            break;
          case this.administrativo:
            this.esAdministrativo=true;
            console.log("esAdministrativo",this.esAdministrativo);
            break;
          case this.superAdmin:
            
              this.esSuperAdmin=true;
              
            console.log("esSuperAdmin",this.esSuperAdmin);
              break;
        }
      }
  }
  }


