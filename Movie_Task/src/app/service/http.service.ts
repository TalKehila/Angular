import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../Model/User.Model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get() {
    // bring from url
    return this.httpClient.get('http://localhost:4000/users');
  }
  post(
    newUser: User // new user
  ) {
    return this.httpClient.post('http://localhost:4000/users', newUser);
  }
  delete(userid: number) {
    return this.httpClient.delete('http://localhost:4000/users/' + userid);
  }
  // put(updatedUser: User) {
  //   return this.httpClient.put<User>(`http://localhost:4000/users/${updatedUser.id}`,updatedUser);
  // }
  put(id: number) {
    return this.httpClient.put<User>('http://localhost:4000/users', id);
  }
}
