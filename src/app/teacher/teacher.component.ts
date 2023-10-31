import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{

    user:any; //almacena los datos del usuario 
    userId:string; //almacena el id del usuario
    
    constructor( private usersService: UsersService,){
      this.userId ='';
     }
  
    ngOnInit(): void {
      //obtiene Id de usuario desde el servicio
      this.userId = this.usersService.getUserId();
      // Llamamos al método para obtener los datos del usuario
      console.log(this.userId);
      this.usersService.getUserById(this.userId).subscribe(
        (userData)=>{
          this.user = userData;
        },
        (error)=>{
          console.error('Error al obtener los datos del usuario',error);
        }
      )
    }
  }
  
  
