import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddproductComponent } from './Components/addproduct/addproduct.component';
import { AddproducttypeComponent } from './Components/addproducttype/addproducttype.component';
import { EditproductComponent } from './Components/editproduct/editproduct.component';
import { EditproducttypeComponent } from './Components/editproducttype/editproducttype.component';
import { ProducttypeslistComponent } from './Components/producttypeslist/producttypeslist.component';
import { ProductslistComponent } from './Components/productslist/productslist.component';
import { OrderslistComponent } from './Components/orderslist/orderslist.component';
import { OrderdetailsComponent } from './Components/orderdetails/orderdetails.component';
import { SalesviewComponent } from './Components/salesview/salesview.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { RoleslistComponent } from './Components/roleslist/roleslist.component';
import { AddroleComponent } from './Components/addrole/addrole.component';
import { EditroleComponent } from './Components/editrole/editrole.component';
import { EditusersinroleComponent } from './Components/editusersinrole/editusersinrole.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { DataTablesModule } from 'angular-datatables';
import { AccessdeniedComponent } from './Components/accessdenied/accessdenied.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MainModuleModule } from './Modules/main-module/main-module.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddproductComponent,
    AddproducttypeComponent,
    EditproductComponent,
    EditproducttypeComponent,
    ProducttypeslistComponent,
    ProductslistComponent,
    OrderslistComponent,
    OrderdetailsComponent,
    SalesviewComponent,
    LoginComponent,
    RegisterComponent,
    RoleslistComponent,
    AddroleComponent,
    EditroleComponent,
    EditusersinroleComponent,
    AccessdeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: [''],
        disallowedRoutes: [''],
      },
    }),
    NgxDatatableModule,
    MainModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
