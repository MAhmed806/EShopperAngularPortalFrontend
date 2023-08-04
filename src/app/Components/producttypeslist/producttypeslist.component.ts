import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-producttypeslist',
  templateUrl: './producttypeslist.component.html',
  styleUrls: ['./producttypeslist.component.css']
})
export class ProducttypeslistComponent {
  constructor(private dataservice:DataService,private router:Router){}
  producttypes:any;
  ngOnInit(){
    this.dataservice.getProdType().subscribe(ptype=>this.producttypes=ptype);
  }
  Edit(id:any){
   this.router.navigate(['/editproducttype',{id}]);
  }
  Delete(id:any){
    var result= confirm("Are you sure you want to delete this Product Type? This will also delete the Products related to this Product Type.");
    if(result){
      this.dataservice.deleteproductype(id).subscribe(responce=>{location.reload();});
    }
  }


}
