// There are two types of memeory in JavaScript, Heap and Stack.
// Stack is used to store the primitive datatypes and Heap is used to store non-primitive datatype

// Example of Stack Memory

let myName='aman'
let hisName=myName
hisName='akash'

// console.log(myName)
// console.log(hisName)

// Example of Heap Memory

let obj1={
    name:'aman',
    age:16
}

let obj2=obj1;
obj2.age=99
console.log(obj1);
console.log(obj2);