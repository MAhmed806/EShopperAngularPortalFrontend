import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, ActivatedRoute } from '@angular/router';
import { AuthService } from './Services/Auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private arouter:ActivatedRoute
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    
  ): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
       const AllowedRoutes=next.data['role'];
        if(AllowedRoutes==this.authService.getuserrole()){
            return true;
        }
        else{
            this.router.navigate(['/accessdenied']);
            return false;
        }
    } else {
      return this.router.createUrlTree([''], { queryParams: { returnUrl: state.url,message:"Access Denied" } });
    }
  }
}