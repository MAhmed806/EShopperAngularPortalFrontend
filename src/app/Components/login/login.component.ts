import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AuthService:AuthService,private router:Router){}
    errormessage="";
    successmessage="";
    loginresponce:any;
    loginform:any;
    fieldTextType:boolean=false;
    Email:any;
    Password:any;
    Rememberme:any;
    ngOnInit(){
      if(this.AuthService.isLoggedIn()){
        this.AuthService.Redirectaccordingtorole();
      }
      this.loginform=new FormGroup({
        Email:new FormControl('',[Validators.required,Validators.email]),
        Password:new FormControl('',[Validators.required,Validators.minLength(8)]),
        RememberMe:new FormControl(true)
      })
    }
    toggleFieldTextType(){
      this.fieldTextType = !this.fieldTextType;
    }
    Submit(){
      this.Email=this.loginform.value.Email;
      this.Password=this.loginform.value.Password;
      this.Rememberme=this.loginform.value.RememberMe;
      this.AuthService.login(this.Email,this.Password,this.Rememberme).subscribe(respo=>{this.loginresponce=respo;
        if(this.loginresponce.result.succeeded){
          this.successmessage="Login Successfull";
          localStorage.setItem('access_token',respo.token);
          setTimeout(() => {
            if(this.AuthService.getuserrole()=='Admin'){
              location.href='roleslist';
            }   
            if(this.AuthService.getuserrole()=='Manager'){
              location.href='productslist';
            }if(this.AuthService.getuserrole()==''){
              this.successmessage="";
              this.errormessage="Customer Log in Found Redirecting to Main Website...";
              setTimeout(() => {
                this.AuthService.logout();
                location.href="http://localhost:4200/"
              }, 2000);
            }
          },1000);
        }else{
          this.errormessage= "Invalid Credentials";
        setTimeout(() => {this.errormessage=""},5000)
        }
      });
    }
}
