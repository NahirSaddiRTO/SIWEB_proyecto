import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
  providers:[AuthService]
})
export class Login2Component implements OnInit {
    loginForm = new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')})
    public user:any;
    //@Input() iniciarSesion_var:boolean | undefined;
  @Output() selected = new EventEmitter<any>();
  constructor(   private authSvc:AuthService, 
    private router:Router) { }


  ngOnInit(): void {
  }
  
  async loguearse(){
    const{email,password}=this.loginForm.value;
    try{
      this.user= await this.authSvc.loguearse(email,password);
      console.log(  this.user);
  
      (this.user) ? this.selected.emit(this.user) : this.selected.emit(null);
      if(  this.user){
        //regirect a home
        console.log("tendria q irse");
        this.router.navigate(['/home']);
      }  
    }
    catch(err){
      console.log(err)
    }
   
  }

  async loguearseGoogle(){
    try{
      this.user = await this.authSvc.loginGoogle();
      (this.user) ? this.selected.emit(this.user) : this.selected.emit(null);
      if( this.user){
        //regirect a home
        this.router.navigate(['/home']);
      }  
    }
    catch(err){
      console.log(err)
    }
   

  }


}

