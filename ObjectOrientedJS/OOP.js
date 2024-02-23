const user={
    username:'azhar',
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`username:${this.username}`);
        // console.log(this);// It prints the current context
    }
}

// console.log(user.username);
// user.getUserDetails();
// console.log(this) Print global context

// Constructure function

const date= new Date()// the new key word is the constructure function

function User(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting= function(){
        // console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne=new User('azhar',6,true);
const userTwo=new User('vijay',7,false);
console.log(userOne.constructor)
// console.log(userTwo)

// new keyword genetrate and new object everytime
// the constructer function is called because of it