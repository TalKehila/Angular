
import { Component, Input } from '@angular/core';
import User from 'src/app/Model/User.Model';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
  users: User[] = [];

constructor(private httpService: HttpService){
 this.httpService.get()
 .subscribe(data => {
  console.log(data)
    this.users = data as User[];
 })
}
}
 