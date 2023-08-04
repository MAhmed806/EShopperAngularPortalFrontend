import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})
export class EditroleComponent {
  constructor(private dataservice:DataService,private router:Router,private aroute:ActivatedRoute){}
  role:any;
  responce:any;
  users=[{
    userName:""
  }]
  myform:FormGroup=new FormGroup({
    Id:new FormControl(),
    Name:new FormControl()
  })
  ngOnInit(){
    this.aroute.params.subscribe(params=>{
      this.dataservice.getrole(params['id']).subscribe(role=>{this.role=role;
        this.myform.controls['Id'].setValue(this.role.role.id);
        this.myform.controls['Name'].setValue(this.role.role.name);
        this.users=this.role.users;
      })
    })
}
Submit(){
  this.dataservice.editrole(this.myform.value).subscribe((responce: any)=>{this.responce=responce;
  console.log(this.responce.message)
  location.reload();
});
}
editusersinrole(){
 let id=this.role.role.id
  this.router.navigate(['/editusersinrole',{id}])
}
}