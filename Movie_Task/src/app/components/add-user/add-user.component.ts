import { Component, EventEmitter, Output } from '@angular/core';
import User from 'src/app/Model/User.Model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {

  newUser: User = new User();
  @Output() add = new EventEmitter<any>();

  saveItem() 
  {
    this.add.emit(this.newUser);
  }
}
