import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent {
  constructor(private dataservice:DataService,private router:Router){}
  //dtoptions:any;
  dtoptions:DataTables.Settings={};
  dttrigger: Subject<any> = new Subject();
  orders:any;
  ngOnInit(){
    this.dtoptions={pagingType:'full_numbers',ordering:true,stateSave:true,autoWidth:true};
    this.dataservice.getorderslist().subscribe(list=>{this.orders=list;
    this.dttrigger.next(null);
  });
  }
  gotoorderdetails(id:any){
    this.router.navigate(['/orderdetails',{id}]);
    
  }

}
