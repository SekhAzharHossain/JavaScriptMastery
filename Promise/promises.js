// Promises

// Can be declared seperately as well as jointly

let promiseMe=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,cryptography,network
    setTimeout(() => {
        console.log("promised is kept")
        resolve()
    }, 1000);
})

promiseMe.then(function(){
    console.log("Promise is done")
})


// Or it can be written like this below code jointly

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("It's keeping the promise")
        resolve()
    }, 1000);
}).then(function(){
    console.log("the promise is kept and done")
})

// How to pass and receive data in promises

let promise3=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({name:"Azhar",email:"azharexample@gmail.com"})
    }, 1000);
})

promise3.then(function(user){
    console.log(user)
})


// How to get specific values from the objects passed to resolve

let promise4=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false; //make it true to see the error case
        if(!error){
            resolve({name:"Aman",email:"aman.example@gmail.com"})
        }else{
            reject('ERROR something went wrong')
        }
    }, 1000);
})

promise4.then((username)=>{
    console.log(username)
    return username.name
}).then((name)=>{
    console.log('name:',name)
}).catch((error)=>{
    console.log(error)
}).finally(()=>console.log("finally the promise either resolved or rejected"))
// finally get executed everytime either promise get resolved or get rejected

// The promises can also be handled with the help of async await

promise5=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false; //make it true to see the error case
        if(!error){
            resolve({name:"Ankit",email:"ankit.example@gmail.com"})
        }else{
            reject('ERROR something went wrong')
        }
    }, 1000);
})

async function consumeValues(){
    try {
        let data=await promise5
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
consumeValues()