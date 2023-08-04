import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private dataservice:DataService,private Aroute:ActivatedRoute,private router:Router ){}
  product:any;
  producttypes:any;
  imagestring:any;
  imagename:any;
  updateproductresponce:any;
  myForm:FormGroup=new FormGroup({
    Name:new FormControl('',[Validators.required]),
    Price:new FormControl('',[Validators.required]),
    PColor:new FormControl('',Validators.required),
    Availablequantity:new FormControl('',[Validators.required]),
    Image:new FormControl("",[Validators.required]),
    ProductTypeID:new FormControl('',[Validators.required]),
    Imagestring:new FormControl()
    });
  ngOnInit(){
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
    this.imagestring=base64image;
    this.myForm.controls['Image'].setValue(this.imagename);
  }
  }
  Submit(){ 
    this.myForm.controls['ProductTypeID'].setValue(parseInt(this.myForm.controls['ProductTypeID'].value));
    if(this.imagestring!=null){ 
      this.myForm.controls['Imagestring'].setValue(this.imagestring);
    }
    this.dataservice.addproduct(this.myForm.value).subscribe(product=>{this.product=product;
    console.log(this.product);
    this.router.navigate(['/productslist']);
  });
  }
  showImagePreview() {
    var fileInput = document.getElementById('image-file') as HTMLInputElement;
  if (fileInput !== null && fileInput.files !== null) {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var imagePreview = document.getElementById('image-preview');
      var img = document.getElementById('img') as HTMLImageElement;
      if (e.target !== null && e.target.result !== null) {
        img.src = e.target.result as string;
      }
      if (imagePreview !== null) {
        imagePreview.innerHTML = '';
        imagePreview.appendChild(img);
      }
    }

    reader.readAsDataURL(file);
  }
  }
}
