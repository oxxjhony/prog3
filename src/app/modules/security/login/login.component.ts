import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation:FormGroup;

  constructor(private fb:FormBuilder, private secService:SecurityService,
    private router:Router) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgValidation=this.fb.group({
      username:['',[Validators.required,Validators.maxLength(30),Validators.email,Validators.minLength(8)]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]]
    });
  }

  get fg(){
    return this.fgValidation.controls;

  }

  loginEvent(){
    if(this.fgValidation.invalid){
       alert(" invalid data ");
    }
    else{
      let u =this.fg.username.value;
      let p=this.fg.password.value;
      let user=this.secService.loginUser(u,p);
      if (user != null){
          this.router.navigate(['/home']);
      }
    }
  }

}
