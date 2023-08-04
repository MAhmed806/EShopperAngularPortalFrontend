import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {
  constructor(private dataservice:DataService,private router:Router){}
  products:any;
  responce:any;
  ngOnInit(){
  this.dataservice.getProd().subscribe(products=>{this.products=products;});
  }
  Edit(id:any){
    this.router.navigate(['/editproduct',{id}]);
  }
  Delete(id:any){
  var result = confirm("Are You Sure You Want to Delete This Product? This Action Can't be undone");
  if (result) {
  this.dataservice.deleteproduct(id).subscribe(responce=>{this.responce=responce;
  console.log(this.responce.message)});
  location.reload();
  }}
}
