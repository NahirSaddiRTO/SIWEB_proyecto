import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import { User } from 'firebase';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
//public user:User;
constructor(public afAuth:AngularFireAuth) { }

  async loguearse(email:string, password: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      return result;
   
    }
    catch (err) {
      return err;
  }
 };

  async registrarse(email:string, password: string){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password)              
      return result;
    }
    catch (err) {
      return err;
  }
    };

  async cerrarSesion(){
    try{

      await this.afAuth.signOut();
    }
    catch (err) {
      return err;
  }
  };
  
  getUsuarioActual(){
    try{
      return this.afAuth.authState.pipe(first()).toPromise();
   
    }
    catch (err) {
      return err;
  }
  }
   
}
