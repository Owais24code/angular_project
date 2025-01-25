import { HttpClient } from '@angular/common/http';
import { Component , inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../models/interfaces/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

   rolelist: IRole[]=[]
   http= inject(HttpClient);
   ngOnInit(){
    this.getAllRoles();
   }
   getAllRoles(){
    this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:any)=>{
        this.rolelist=res.data;
    })
   }
}

