import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  user:any //almacena los datos del usuario 
  constructor( private userService: UserService,){  }

  ngOnInit(): void {
  
      const userId =  "a72a8df4-5408-11ee-8c99-0242ac120002" /// id que quiero obtener 

      this.userService.getUserById(userId).subscribe((userData)=>{ 

        this.user = userData;                                    
    })
                                                               
    }
  }


