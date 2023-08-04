import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { DataService } from 'src/app/Services/data.service';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedin:any;
  Username:any;
  Role:any;
  constructor(private dataservice:DataService,private route:Router,private session:SessionStorageService,private authservice:AuthService){
  }
  ngOnInit(){
    this.loggedin=this.authservice.isLoggedIn();
    this.Username=this.dataservice.getusername();
    if(this.loggedin){
      this.Role=this.authservice.getuserrole();
    }
  }


  // ngOnInit(){
  //   console.log(this.loggedin);
  //   console.log(this.Username);
  //   this.loggedin=this.authservice.isLoggedIn();
  //   this.Username=this.dataservice.getusername();
  // }
  Logout(){
    this.authservice.logout();
    location.reload();
  }


}
