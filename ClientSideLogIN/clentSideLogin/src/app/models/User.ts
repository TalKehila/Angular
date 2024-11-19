class User {
  id: number;
  FirstName: string;
  LastName: string;
  UserName: string;
  Password: string;
  Email: string;

  constructor(
    id: number = 0,
    FirstName: string = '',
    LastName: string = '',
    UserName: string = '',
    Password: string = '',
    Email: string = ''
  ) {
    this.id = id;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.UserName = UserName;
    this.Password = Password;
    this.Email = Email;
  }
}

export default User;