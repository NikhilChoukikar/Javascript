class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

     get password(){
         return `${this._password}nikhil`
     }

     set password(value){
        this._password = value
     }

}
const nikhil = new User("n@nikhil.ai","abc")
console.log(nikhil.email);
console.log(nikhil.password);
