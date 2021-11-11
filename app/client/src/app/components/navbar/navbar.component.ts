import { Component } from '@angular/core';
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

  constructor(  
    private authSvc:AuthService, 
    private router:Router) { }

  async ngOnInit() {
    console.log(this.user$);
  }
  async cerrar() {
    try{
      await this.authSvc.cerrarSesion();
      this.router.navigate(['/login'])
     }
     catch(err){
       console.log(err);
     }
    }
  }


