import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent {
  responce:any;
  message="";
  constructor(private dataservice:DataService,private router:Router){}
  myform:FormGroup= new FormGroup({
    RoleName:new FormControl('',Validators.required)
  })
  Submit(){
  this.dataservice.addrole(this.myform.value).subscribe(responce=>{this.responce=responce;
  this.message=this.responce.message;delay(10000000000);
    this.router.navigate(['/roleslist']);
})
  }

}
