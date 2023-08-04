import { Component } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-roleslist',
  templateUrl: './roleslist.component.html',
  styleUrls: ['./roleslist.component.css']
})
export class RoleslistComponent {
  constructor(private dataservice:DataService,private router:Router){}
  roles:any;
  responce:any;
  message="";
  ngOnInit(){
    this.dataservice.getroles().subscribe(roles=>{this.roles=roles;})
  }
  editrole(id:any){
    this.router.navigate(['/editrole',{id}]);
  }
  deleterole(id:any){
    var result=confirm("You Sure You Want to Delete this Role?");
    if(result){
      this.dataservice.deleterole(id).subscribe(responce=>{this.responce=responce;
        this.message=this.responce.message;
      location.reload();
    })
    }
  }
}
