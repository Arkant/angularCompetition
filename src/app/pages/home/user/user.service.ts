// import { IUser } from './../../../core/interfaces/user.interface';
import { API_URL } from './../../../shared/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
@Injectable()

export class UserService {

  
  constructor(private http: HttpClient) { 

  }
  getUsers(username) {
    if (username === undefined) return ;
    return this.http.get(`${API_URL}/users/${username}`);
  }
  getReposList(reposUrl) {
    return this.http.get(`${reposUrl}`);
  }
}