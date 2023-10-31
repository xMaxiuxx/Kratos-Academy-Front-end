import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

private httpClient = inject(HttpClient)

private urlBase : string;
private urlBaseId : string;
private userId: string;
private token:string;

setUserId(userId: string){
  this.userId = userId
}
setToken(token: string){
  this.token = token
}
getUserId():string {
return this.userId
}
getToken():string{
  return this.token
}

constructor() { 
  this.userId =''
  this.token  =''
  this.urlBase = 'http://localhost:3001/login'
  this.urlBaseId = 'http://localhost:3001/users'
}
register(formValue:any){
  return firstValueFrom(
    this.httpClient.post<any>(`${this.urlBase}/register`,formValue)
  )
// }
// getUser():Observable<string>{
//   return this.httpClient.get<string>(`${this.urlBaseId}`)

}
getUserById (userId: string): Observable<string>{
  return this.httpClient.get<string>(`${this.urlBaseId}/${userId}`);

}

}
