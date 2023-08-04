import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { DataService } from 'src/app/Services/data.service';
import { DataTablesResponse } from './model';



@Component({
  selector: 'app-editusersinrole',
  templateUrl: './editusersinrole.component.html',
  styleUrls: ['./editusersinrole.component.css']
})
export class EditusersinroleComponent {
  constructor(private dataservice:DataService,private aroute:ActivatedRoute,private router:Router,private http: HttpClient){}
  role:any;
  name:any='';
  myuser=[
    {username:"",
      isSelected:""}
  ];
 dtOptions: DataTables.Settings = {};
 DataTablesResponce={
  recordsTotal:0,
  recordsFiltered:0,
  data:[]
 }
ngOnInit(): void {
  this.aroute.params.subscribe(param=>{ 
   this.dataservice.getroleonly(param['id']).subscribe(responce=>{this.role=responce;
   this.dtOptions = {
     serverSide: true,// Set the flag 
     ajax: (dataTablesParameters:any, callback) => {this.http.post<DataTablesResponse>('https://localhost:44385/api/Admin/GetFilteredData?id='+this.role.id+'&'+$.param(dataTablesParameters)+this.role.id,this.role.id).subscribe((resp:DataTablesResponse)=>{
     callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        });
    },searchDelay:1000,
    stateSave:false,
     columns: [{
       title: 'User Name',
       name:'Username',
       data: 'username'
     },{
       title: 'Is In Role',
       name:'IsSelected',
       data: 'isSelected',
       'render': function (data) {
        return '<input type="checkbox" ' + (data ? 'checked' :'') + '>';
    },
     }]
   };
   this.name=this.role.name;
  })
})
 }
 Update(){
  let UserData = [];
  var dataRows = document.querySelectorAll("#helloworld tbody tr");
  var inputRows =document.querySelectorAll("#helloworld tbody tr td input");
  for (var i = 0; i < dataRows.length; i++) {
      var datarow = dataRows[i];
      var inputrow =inputRows[i] as HTMLInputElement;
      var Username = datarow.textContent;
        var IsSelected = inputrow.checked;      
      UserData.push({Username, IsSelected });
  }
 let roleid=this.role.id;
 var Query ={UserData,roleid};
 var Data =JSON.stringify(Query);
  $.ajax({
      type: "PUT",
      url: "https://localhost:44385/api/Admin/EditUsersInRole",
      data: Data,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
          console.log("Success");
          location.reload();
      }
  });
 }
  goback(){
   let id=this.role.id;
  this.router.navigate(['/editrole',{id}])
  }

}

