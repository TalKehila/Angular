import { Component } from '@angular/core';
import User from 'src/app/models/User';
import { HttpServiceService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent {
  user: User = {
    id: 0,
    FirstName: '',
    LastName: '',
    UserName: '',
    Password: '',
    Email: '',
  };

  constructor(private userService: HttpServiceService) {}




  
}
