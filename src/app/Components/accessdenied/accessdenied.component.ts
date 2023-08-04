import { Component } from '@angular/core';
import { timeout, timer } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-accessdenied',
  templateUrl: './accessdenied.component.html',
  styleUrls: ['./accessdenied.component.css']
})
export class AccessdeniedComponent {
  message:string="";
  seconds=3;
  constructor(private authservice:AuthService){  }
  ngOnInit(){
    this.message="Redirecting to your Main Page "
    setTimeout(() => {
      this.authservice.Redirectaccordingtorole();
    }, 3000);
  }

}
