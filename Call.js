function SetUsername(username){
    // complex DB calls
    this.username=username;
}

function createUser(username,email,password){
    SetUsername.call(this,username);
    // it is technique to call
    this.email=email;
    this.password=password;
}

const aa=new createUser('azhar','azhar@gmail.com','123')
console.log(aa)