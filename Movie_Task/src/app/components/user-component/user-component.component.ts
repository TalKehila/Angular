import { Component, EventEmitter, Input, Output } from '@angular/core';
import User from 'src/app/Model/User.Model';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
})
export class UserComponentComponent {
  @Input() users: User[] = [];
  // @Input() user:User =new User();
  @Output() userUpdated = new EventEmitter<any>();

  constructor(private httpService: HttpService) {}

  DeleteUser(userid: number) {
    this.httpService.delete(userid).subscribe(() => {
      this.users = this.users.filter((u) => u.id !== userid);
    });
  }
  UpdateUser(id: number) {
    let upuser = this.users.find((u) => u.id === id);

    if (upuser) {
      this.httpService.put(upuser.id).subscribe(
        (data) => {
          // Assuming your server returns the updated user
          upuser = data as User;
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

  // UpdateUser(id: number) {
  //   let updatedUser = this.users.find((u) => u.id === id);

  //   if (updatedUser) {
  //     this.httpService.put(updatedUser).subscribe(
  //       (data) => {
  //         updatedUser = data as User;
  //       }
  //     );
  //   }
  // }

  AddNewUser(newuser: User) {
    this.httpService.post(newuser).subscribe((data) => {
      this.users.push(data as User);
    });
  }
}

// UpdateUser(email: string, firstName: string, password: string, username: string) {

//   this.user.email = email;
//   this.user.firstName = firstName;
//   this.user.password = password;
//  this. user.username = username;
//   this.httpService.put(this.user)
//     .subscribe(
//       data =>
//       {

//       }
//     );
// }

//   @Input() myuser: User = new User();
//   @Output() delete = new EventEmitter<any>();
//   @Output() duplicate = new EventEmitter<any>();

// deleteme()
//   {
//     this.delete.emit(this.myuser)
//   }

//   duplicateme()
//   {
//     this.duplicate.emit(this.myuser)
//   }

//   update(firstName: string, username: string, password: string, email: string) {
//     this.myuser.firstName=firstName;
//     this.myuser.username = username;
//     this.myuser.password = password;
//     this.myuser.email = email;
//     }
