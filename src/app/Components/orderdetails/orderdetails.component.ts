import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
  constructor(private dataservice:DataService,private router:Router,private aroute:ActivatedRoute){}
  order:any;
  responce:any;
  orderdetails:any[]=[{
    product:{
      id:0,
      name:'',
      price:'',
      image:'',
      pColor:'',
      productTypes:{
        productType:''
      }
    },  
    productQuantity:''
  }]
  myform:FormGroup= new FormGroup({
    Id:new FormControl(),
    UserId:new FormControl(),
    CustomerName:new FormControl(),
    CustomerEmail:new FormControl(),
    CustomerPhone:new FormControl(),
    CustomerAddress:new FormControl(),
    OrderDate:new FormControl(),
    OrderCost:new FormControl(),
    DeliveryDate:new FormControl(),
    OrderStatus:new FormControl(),
    OrderNum:new FormControl(),
    PaymentMethod:new FormControl(),
    PaymentStatus:new FormControl(),
    RefundStatus:new FormControl(),
  })
  ngOnInit(){
    this.aroute.params.subscribe(param=>{
      this.dataservice.getorderdetails(+param['id']).subscribe(order=>{this.order=order;console.log(this.order);
        this.myform.controls['Id'].setValue(this.order.id);
        this.myform.controls['UserId'].setValue(this.order.userId);
        this.myform.controls['CustomerName'].setValue(this.order.customerName);
        this.myform.controls['CustomerEmail'].setValue(this.order.customerEmail);
        this.myform.controls['CustomerPhone'].setValue(this.order.customerPhone);
        this.myform.controls['CustomerAddress'].setValue(this.order.customerAddress);
        this.myform.controls['OrderDate'].setValue(this.order.orderDate);
        this.myform.controls['DeliveryDate'].setValue(this.order.deliveryDate);
        this.myform.controls['OrderStatus'].setValue(this.order.orderStatus);
        this.myform.controls['OrderCost'].setValue(this.order.orderCost);
        this.myform.controls['OrderNum'].setValue(this.order.orderNum);
        this.myform.controls['PaymentMethod'].setValue(this.order.paymentMethod);
        this.myform.controls['PaymentStatus'].setValue(this.order.paymentDetails?this.order.paymentDetails.chargeStatus:"");
        this.myform.controls['RefundStatus'].setValue(this.order.paymentDetails?this.order.paymentDetails.refundStatus:"");
      this.orderdetails=this.order.orderDetails;
      });
    })

  }
  Submit(){

    this.dataservice.updateorder(this.myform.value).subscribe(responce=>{this.responce=responce;
      location.reload();

    })
  }

}
