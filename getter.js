class User {
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){ //getter
        return this._password.toUpperCase()
    }
    set password(value){ //setter
        this._password=value;
    }
}

const realuser= new User("azhar@gmail.com","abc");
console.log(realuser.password)