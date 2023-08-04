import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-editproducttype',
  templateUrl: './editproducttype.component.html',
  styleUrls: ['./editproducttype.component.css']
})
export class EditproducttypeComponent {
  constructor(private aroute:ActivatedRoute,private dataservice:DataService){}
  image='';
  producttype:any;
  imagename:any;
  imagestring:any;
  responce:any;
  myForm:FormGroup=new FormGroup({
    Id:new FormControl(),
    ProductType:new FormControl(),
    Image:new FormControl(),
    Imagestring:new FormControl(),
    });
  ngOnInit(){
    this.aroute.params.subscribe(params=>{
      this.dataservice.getprodtypedetails(+params['id']).subscribe(ptype=>{this.producttype=ptype;
        this.image=this.producttype.image;
        this.myForm.controls["Id"].setValue(this.producttype.id);  
        this.myForm.controls["ProductType"].setValue(this.producttype.productType);
        this.myForm.controls["Image"].setValue(this.producttype.image);
      })
    })
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    this.imagename=file.name;
    reader.readAsDataURL(file);
    reader.onload=()=>{
      const base64image=reader.result as string;
      this.imagestring=base64image;
      this.myForm.controls['Image'].setValue(this.imagename);
      this.myForm.controls['Imagestring'].setValue(this.imagestring);
    }}
  Submit(){
    this.dataservice.editproducttype(this.myForm.value).subscribe(responce=>{this.responce=responce;
    console.log(this.responce.message);
    location.reload();
    });
  }

}
