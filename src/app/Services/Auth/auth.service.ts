import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AuthUrl='https://localhost:44385/api/Auth/';
  registerresponce:any;
  loginresponce:any;
  constructor(private http: HttpClient, private jwtHelper:JwtHelperService,private route:ActivatedRoute,private router:Router) {}
  Redirectaccordingtorole(){
    if(this.getuserrole()=='Admin'){
      location.href='roleslist';
    }   
    if(this.getuserrole()=='Manager'){
      location.href='productslist';
    }
  }
  login(Email: string, PasswordHash: string,RememberMe:boolean) {
    return this.http.post<any>(this.AuthUrl+'login/',{Email,PasswordHash,RememberMe});
  }
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['']);
  }
  isLoggedIn() {
    const token = localStorage.getItem('access_token');
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }
  register(FirstName:string,LastName:string,Email:string,PhoneNumber:string,PasswordHash:string){
    return this.http.post(this.AuthUrl+'register/',{FirstName,LastName,Email,PhoneNumber,PasswordHash});
  }
  getuserrole():string{
    const token=localStorage.getItem('access_token');
    if(token !=null){
    const decoded:any =jwtDecode(token);
    return decoded.acr; 
    }
    return '';
  }
}