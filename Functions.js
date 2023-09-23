// Fuctions are used to store repeated code in a container to use when ever required

// declaration of funciton
function add(){
    console.log(10-10)
}

// We can treat functions as variables

let func=function(){
    console.log("Hello World")
}

let func1=function(){
    return "Hello World"
}

let funcVal=func1()
// console.log(funcVal)

const logginMessage=(username)=>{
    if(!username){
        return "user name is not define"
    }
    return `${username} is logged in`
}

// console.log(logginMessage("hi"))

const calculateCartItems=function(...Cartitem1){
    let result=0;
    Cartitem1.forEach(element => {
        result+=element
    });
    return result
}

// console.log(calculateCartItems(1,2,3,4))

// Passing object as an argument in function

const obj={
    name:'aman',
    price:100
}

const displayInfo=(getObject)=>{
    console.log(`${getObject.name} has baught items worth ${getObject.price} rupees`)
}

// displayInfo(obj)
// displayInfo({
//     name:'kamal',
//     prices:100000
// })

// Like objects we can pass array in the fuctions

arr1=[1,3,5,7,8,3]

const findTheGreatestNumber=(getArray)=>{
    let num=0
    getArray.forEach(element => {
        if(num<element){
            num=element
        }
    });
    console.log(num)
}
// findTheGreatestNumber(arr1)
// findTheGreatestNumber([9,5,6,7])

