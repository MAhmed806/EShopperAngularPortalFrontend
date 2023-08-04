import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl='https://localhost:44385/api/Manager/'
  adminUrl='https://localhost:44385/api/Admin/'
  constructor(private http:HttpClient) { }
  getProd(){
    return this.http.get(this.baseUrl+'Products');
  }
  getProdType(){
    return this.http.get(this.baseUrl+'ProductTypes');
  }
  getproddetails(id:any):Promise<any>{
    return this.http.get(this.baseUrl+'ProductDetails/'+id).toPromise();
  }
  getprodtypedetails(id:any){
    return this.http.get(this.baseUrl+'ProductTypeDetails/'+id);
  }
  search(search:string){
    return this.http.get(this.baseUrl+'Search/'+search);
  }
  filter(min:any,max:any){
    return this.http.get(this.baseUrl+'Filter/'+min+'/'+max);
  }
  getorderslist(){
    return this.http.get(this.baseUrl+'OrdersList');
  }
  getorderslistspecific(username:string){
    return this.http.get(this.baseUrl+'MyOrderList/'+username);
  }
  getorderdetails(id:any){
    return this.http.get(this.baseUrl+'OrderDetails/'+id);
  }
  placeorder(order:any){
    return this.http.post(this.baseUrl+'Checkout/',order);
  }
  cancelorder(id:any){
    return this.http.delete(this.baseUrl+'CancelOrder/'+id);
  }
  getusername():string{
    const token=localStorage.getItem('access_token');
    if(token !=null){
    const decoded:any =jwtDecode(token);
    return decoded.sub; 
    }
    return '';
  }
  updateproduct(product:any){
    return this.http.put(this.baseUrl+'UpdateProduct',product);
  }
  addproduct(product:any){
    return this.http.post(this.baseUrl+'AddProduct',product);
  }
  deleteproduct(id:any){
    return this.http.delete(this.baseUrl+'DeleteProduct/'+id);
  }
  deleteproductype(id:any){
    return this.http.delete(this.baseUrl+'DeleteProductType/'+id);
  }
  addproducttype(producttype:any){
   return this.http.post(this.baseUrl+'AddProductType',producttype);
  }
  editproducttype(producttype:any){
    return this.http.put(this.baseUrl+'UpdateProductType',producttype);
  }
  updateorder(order:any){
    return this.http.put(this.baseUrl+'UpdateOrder',order);
  }
  getchartdata(){
    return this.http.get(this.baseUrl+'GetChartData');
  }
  addrole(role:any){
    return this.http.post(this.adminUrl+'AddRole',role);
  }
  editrole(role:any){
    return this.http.put(this.adminUrl+'EditRole',role);
  }
  getroles(){
    return this.http.get(this.adminUrl+'GetRoles');
  }
  getrole(id:any){
    return this.http.get(this.adminUrl+'GetRole/'+id);
  }
  deleterole(id:any){
    return this.http.delete(this.adminUrl+'DeleteRole/'+id);
  }
  getroleonly(id:any){
    return this.http.get(this.adminUrl+'GetRoleOnly/'+id);
  }
}