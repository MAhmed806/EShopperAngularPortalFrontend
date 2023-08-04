import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerresponce: any;
  successmessage="";
  errormessage="";
  constructor(private authservice:AuthService,private router:Router){}
  registerform:any;
  fieldTextType:boolean=false;
  fieldTextType1:boolean=false;
  ngOnInit(){
    this.registerform=new FormGroup({
      FirstName:new FormControl('',[Validators.required]),
      LastName:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required,Validators.email]),
      PhoneNumber:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      PasswordHash:new FormControl('',[Validators.required,Validators.minLength(8)]),
      ConfirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)])
    });  }
  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  } toggleFieldTextType1(){
    this.fieldTextType1 = !this.fieldTextType1;
  }
  Submit(){
    this.authservice.register(this.registerform.value.FirstName,this.registerform.value.LastName,this.registerform.value.Email,this.registerform.value.PhoneNumber,this.registerform.value.PasswordHash).subscribe(responcse=>{this.registerresponce=responcse;
      if(this.registerresponce.succeeded){
        this.successmessage="Registeration Successfull";
        setTimeout(() => {this.router.navigate([''])},5000);
        this.router.navigate(['']);
      }else{
        this.errormessage= this.registerresponce.errors[0].description;
      setTimeout(() => {this.errormessage=""},5000)
      }
  });
  }
}