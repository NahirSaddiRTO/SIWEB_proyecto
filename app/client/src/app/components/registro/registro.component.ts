import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService]
})
export class RegistroComponent implements OnInit {
  registerForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')})
    public user:any;
    @Output() selected = new EventEmitter<any>();
  constructor(private authSvc:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  
  async registrarse(){
    const{email,password}=this.registerForm.value;
   try{
    this.user= await this.authSvc.registrarse(email,password);    
    
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