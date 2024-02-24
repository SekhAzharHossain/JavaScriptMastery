// ES6

class User {
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}

const coder=new User('azhar','azhar@gmail.com','123');
// console.log(chai);
console.log(coder.encryptPassword())