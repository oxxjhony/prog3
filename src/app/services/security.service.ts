import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../modals/user-model';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  
  userInfo= new BehaviorSubject<UserModel>(new UserModel());

  constructor() {
    this.verifyUserInSeccion();
   }
  
  //usaremos este metodo en el nabvar del master page para verificar si el usuario 
  //esta logeado o no
  getUserInfo(){
    return this.userInfo.asObservable();
  }

  verifyUserInSeccion(){
    let seccion=localStorage.getItem("active user");
    if (seccion != undefined){
       this.userInfo.next(JSON.parse(seccion));
    }
  }

  loginUser(username:String,pass:String){
    
    let tb_user=JSON.parse(localStorage.getItem("tb_user"));

    let user=tb_user.find(u=> u.email==username && u.password==pass);
    console.log(user);

    if (user != undefined){
       user.isLogged=true;
       this.userInfo.next(user);
       localStorage.setItem("active section" , "ok");
       localStorage.setItem("active user",JSON.stringify(user));
    }
     return user;

  }

  userLogout(){
    localStorage.removeItem("active user");
    this.userInfo.next(new UserModel());
  }
}
