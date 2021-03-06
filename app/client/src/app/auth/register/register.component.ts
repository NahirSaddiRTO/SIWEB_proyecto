import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')})
 
    constructor(
      private authSvc:AuthService,
      private router:Router
      ) { }

  ngOnInit(): void {
  }

  async registrarse(){
    const{email,password}=this.registerForm.value;
   try{
    const user = await this.authSvc.registrarse(email,password);    
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