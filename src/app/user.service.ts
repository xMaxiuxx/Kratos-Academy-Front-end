import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUserById (userId: string): Observable<any>{
    return this.http.get(`http://localhost:3001/users/${userId}`);

  }
}
