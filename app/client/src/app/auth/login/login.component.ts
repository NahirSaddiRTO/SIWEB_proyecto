import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')})

  constructor(  
    private authSvc:AuthService, 
    private router:Router) { }

  ngOnInit(): void {
  }

  async loguearse(){
    const{email,password}=this.loginForm.value;
    try{
      const user = await this.authSvc.loguearse(email,password);
      if(user){
        //regirect a home
        this.router.navigate(['/home']);
      }  
    }
    catch(err){
      console.log(err)
    }
   
  }

  async loguearseGoogle(){
    try{
      const user = await this.authSvc.loginGoogle();
      if(user){
        //regirect a home
        this.router.navigate(['/home']);
      }  
    }
    catch(err){
      console.log(err)
    }
   

  }
}
