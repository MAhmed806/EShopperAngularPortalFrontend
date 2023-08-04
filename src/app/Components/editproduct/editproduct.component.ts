import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, FormGroupName, Validators ,} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  constructor(private dataservice:DataService,private Aroute:ActivatedRoute ){}
  myimage='';
  id:any;
  product:any;
  producttypes:any;
  image:any;
  imagename:any;
  updateproductresponce:any;
  myForm:FormGroup=new FormGroup({
    Id:new FormControl(),
    Name:new FormControl(),
    Price:new FormControl(),
    PColor:new FormControl(),
    Availablequantity:new FormControl(),
    Image:new FormControl(),
    ProductTypeID:new FormControl(),
    Imagestring:new FormControl()
    });
  async ngOnInit(){
    //this.buildform();
    this.Aroute.params.subscribe(params=>{
    this.id = +params['id'];
     this.getProducts();
  });
  }
   async getProducts(){
    await this.dataservice.getproddetails(this.id).then(product=>{
      this.product=product;
      this.myimage=this.product.image;
      //this.myForm.patchValue(this.product);
      this.myForm.controls["Id"].setValue(product.id);  
      this.myForm.controls["Name"].setValue(product.name);
      this.myForm.controls["Price"].setValue(product.price);
      this.myForm.controls["PColor"].setValue(product.pColor);
      this.myForm.controls["Availablequantity"].setValue(product.availablequantity);
      this.myForm.controls["ProductTypeID"].setValue(product.productTypeID as Number);
      this.myForm.controls["Image"].setValue(product.image);
    });
    this.dataservice.getProdType().subscribe(ptype=>{this.producttypes=ptype;
    });

  }
  onFileSelected(event: any) {
  const file: File = event.target.files[0];
  const reader: FileReader = new FileReader();
  this.imagename=file.name;
  reader.readAsDataURL(file);
  reader.onload=()=>{
    const base64image=reader.result as string;
    this.image=base64image;
  }
  }
  Submit(){ 
    this.myForm.controls['ProductTypeID'].setValue(parseInt(this.myForm.controls['ProductTypeID'].value));
    this.myForm.patchValue(this.image);
    if(this.image!=null){
      this.myForm.controls['Image'].setValue(this.imagename);
      this.myForm.controls['Imagestring'].setValue(this.image);
    }
    this.dataservice.updateproduct(this.myForm.value).subscribe(Response=>{
    this.updateproductresponce=Response;
    console.log(this.updateproductresponce);
    location.reload();
  })
  }
  }


