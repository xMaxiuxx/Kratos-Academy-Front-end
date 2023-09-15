import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string = '';
  contrasena: string = '';
constructor (private loginService: LoginService){ }

sendData():void{
  const dataToSend = {
    user: this.usuario,
    password: this.contrasena
  }

    this.loginService.postData(dataToSend).subscribe((response)=>{
      console.log(response);
    })
  
}


}
