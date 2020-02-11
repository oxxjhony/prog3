import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/modals/user-model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userInfo:UserModel;
  userLogged:boolean=false;
  userName:String;
  
  subscription:Subscription;

  constructor(private secServices:SecurityService) { }

  ngOnInit() {
    this.verifySession();
    this.change();
  }




  verifySession(){
    this.subscription=this.secServices.getUserInfo().subscribe(user=>{
      this.userInfo=user;
      this.userLogged=user.isLogged;
    });
      
  }

  uptadeInfo(){
     this.userLogged=this.userInfo.isLogged;
     this.userName= `${this.userInfo.firstName} ${this.userInfo.secondName}`
  }

  change(){
  var nuv = document.getElementById('nuv');
  window.onscroll = function() {
  if (window.pageYOffset >50) {
    nuv.classList.add("black");
  } else {
    nuv.classList.remove("black");
  }
}
  }

  

}
