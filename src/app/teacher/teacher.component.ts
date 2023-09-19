import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
user: any;

constructor( private userService: UserService, ){  }

    ngOnInit(): void {

        const userId = "a72a8caa-5408-11ee-8c99-0242ac120002" ; /// id que quiero obtener 
  
        this.userService.getUserById(userId).subscribe((userData)=>{ 
  
          this.user = userData;                                    
      })
                                                                  
      }
    }
  
