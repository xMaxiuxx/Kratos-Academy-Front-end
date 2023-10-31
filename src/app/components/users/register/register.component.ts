import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 
export class RegisterComponent {
 formulario : FormGroup

  constructor(private usersService: UsersService){


    this.formulario = new FormGroup({
      nickname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      surname: new FormControl(),
      age: new FormControl(),
      weight: new FormControl(),
      faixa: new FormControl(),
      role: new FormControl(),
      date: new FormControl()

    })
  }
  async onSubmit (){
    const response = await this.usersService.register(this.formulario.value)
    console.log(response)
  }


}
