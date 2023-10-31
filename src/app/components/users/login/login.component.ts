
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   nickname: string = '';
   password: string = '';
   constructor(private router: Router, private loginService: LoginService, private usersService: UsersService) {}

sendData():void{
  const dataTosend = {
    nickname: this.nickname,
    password: this.password
  }
  this.loginService.postData(dataTosend).subscribe((user)=>{
    this.usersService.setUserId(user.id)
    this.usersService.setToken(user.token)
     if (user && user.role === "profe"){
      this.router.navigate(['/teacher']);
     }else{
      this.router.navigate(['/student'])
     }
  });
}

}
