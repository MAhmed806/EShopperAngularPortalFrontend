import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-addproducttype',
  templateUrl: './addproducttype.component.html',
  styleUrls: ['./addproducttype.component.css']
})
export class AddproducttypeComponent {
  imagename:any;
  imagestring:any;
  constructor(private dataservice:DataService,private router:Router){}
  producttype:any;
  myForm=new FormGroup({
    ProductType:new FormControl('',[Validators.required]),
    Image:new FormControl('',[Validators.required]),
    Imagestring:new FormControl()
  });
  Submit(){
    this.dataservice.addproducttype(this.myForm.value).subscribe(ptype=>{this.producttype=ptype;
    this.router.navigate(['/producttypeslist'])});
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