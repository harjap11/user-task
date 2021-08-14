import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get('https://reqres.in/api/users');
  }

  getUserById(id) {
    return this.http.get('https://reqres.in/api/users?id=' + id);
  }
}
