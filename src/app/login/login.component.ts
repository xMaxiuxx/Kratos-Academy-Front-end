import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nickname: string = '';
  password: string = '';
constructor (private loginService: LoginService,private router: Router){ }

sendData():void{
  const dataToSend = {
    nickname: this.nickname,
    password: this.password
  }

    this.loginService.postData(dataToSend).subscribe((user)=>{

      if (user && user.role === "profe"){
        this.router.navigate(['/teacher']);
      }else{
        this.router.navigate(['/student']);
      }
    });
  
}


}
