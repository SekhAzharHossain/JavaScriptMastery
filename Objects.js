

// literals

const mysymb=Symbol("Key1")
const user1={
    name:"aman",
    age:20,
    location:"Banglore",
    "House Number":10,
    [mysymb]: "myKey1",
    year:2030
}

// console.log(user1["House Number"])
// console.log(user1[mysymb])

// symbol is not clear

// Singletone
// Object.create

const obj2=new Object()
// The above line of code will create a singletone object
// console.log(obj2)
const obj3={}
// console.log(obj3)


//Multi level object
const obj4={
    uid:5,
    email:"someone@gamil.com",
    "full name":{
        firstname:"Azhar",
        lastName:"Hossain"
    }
}

// console.log(obj4["full name"].firstname)

objA={
    a:1,
    b:2,
    c:3
}
objB={
    d:4,
    e:5,
    f:6
}

// objC={objA,objB}

// objC=Object.assign({},objA,objB)
objC={...objA,...objB}
// console.log(objC)


// Destructuring of Objects
const course={
    name:"javaScript martry",
    couseInstructure:"Azhar",
    price:999,
    duration:20
}

// console.log(course.couseInstructure)
// const {couseInstructure:instructure}=course
// console.log(instructure)

