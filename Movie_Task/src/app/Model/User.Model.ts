class User 
{
    id:number;
    username:string;
    password:string;
    firstName:string;
    email:string;
    
    constructor( id:number=0,username:string="",password:string="",firstName:string="",email:string="")
    {    
       
         this.id=id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.email = email;
    }
}
export default User