import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Authguard } from "./AuthGuard";
import { AccessdeniedComponent } from "./Components/accessdenied/accessdenied.component";
import { AddproductComponent } from "./Components/addproduct/addproduct.component";
import { AddproducttypeComponent } from "./Components/addproducttype/addproducttype.component";
import { AddroleComponent } from "./Components/addrole/addrole.component";
import { EditproductComponent } from "./Components/editproduct/editproduct.component";
import { EditproducttypeComponent } from "./Components/editproducttype/editproducttype.component";
import { EditroleComponent } from "./Components/editrole/editrole.component";
import { EditusersinroleComponent } from "./Components/editusersinrole/editusersinrole.component";
import { LoginComponent } from "./Components/login/login.component";
import { OrderdetailsComponent } from "./Components/orderdetails/orderdetails.component";
import { OrderslistComponent } from "./Components/orderslist/orderslist.component";
import { ProductslistComponent } from "./Components/productslist/productslist.component";
import { ProducttypeslistComponent } from "./Components/producttypeslist/producttypeslist.component";
import { RegisterComponent } from "./Components/register/register.component";
import { RoleslistComponent } from "./Components/roleslist/roleslist.component";
import { SalesviewComponent } from "./Components/salesview/salesview.component";
import { MainModuleModule } from "./Modules/main-module/main-module.module";
const routes:Routes=[
{path:'',component:LoginComponent},
{path:'productslist',canActivate:[Authguard],component:ProductslistComponent,data:{role:"Manager"}},
{path:'producttypeslist',canActivate:[Authguard],component:ProducttypeslistComponent,data:{role:"Manager"}},
{path:'addproduct',canActivate:[Authguard],component:AddproductComponent,data:{role:"Manager"}},
{path:'addproducttype',canActivate:[Authguard],component:AddproducttypeComponent,data:{role:"Manager"}},
{path:'editproduct',canActivate:[Authguard],component:EditproductComponent,data:{role:"Manager"}},
{path:'editproducttype',canActivate:[Authguard],component:EditproducttypeComponent,data:{role:"Manager"}},
{path:'orderslist',canActivate:[Authguard],component:OrderslistComponent,data:{role:"Manager"}},
{path:'orderdetails',canActivate:[Authguard],component:OrderdetailsComponent,data:{role:"Manager"}},
{path:'salesview',canActivate:[Authguard],component:SalesviewComponent,data:{role:"Manager"}},
{path:'productlist',canActivate:[Authguard],component:ProductslistComponent,data:{role:"Manager"}},
{path:'producttypeslist',canActivate:[Authguard],component:ProducttypeslistComponent,data:{role:"Manager"}},
{path:'register',component:RegisterComponent},
{path:'roleslist',canActivate:[Authguard],component:RoleslistComponent,data:{role:"Admin"}},
{path:'addrole',canActivate:[Authguard],component:AddroleComponent,data:{role:"Admin"}},
{path:'editrole',canActivate:[Authguard],component:EditroleComponent,data:{role:"Admin"}},
{path:'editusersinrole',canActivate:[Authguard],component:EditusersinroleComponent,data:{role:"Admin"}},
{path:'accessdenied',component:AccessdeniedComponent},
{path:'helloworld',component:MainModuleModule}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {}