// we generally have to declare the type of the variable JavaScript does that for us
let num=100
// But if we want to specifically declare the type we can do that as well with the help of new
// keyword and the prototype function Number()
let numbe=new Number(100)
// console.log(num)
// console.log(numbe);

// Prototype function\methods 

// conversion of numbers to strings

// console.log(numbe.toString())
// console.log(numbe.toString().length)

//To give pricision value to a number i.e to include decimal values we use toFixed method

// console.log(numbe.toFixed(2))

//To round of the decimal values we use toPrecision method

let num1=55.965
// console.log(num1.toPrecision(2))

// If we have a large number which is difficult to read the we use tolocalString method

let num2=10000000
// console.log(num2.toLocaleString('en-In'))

// Math fuctions
// Abs: Absolute value ,it changes the negative number to positive but not true for vice versa

// console.log(Math.abs(-10))

//To round of any value we use round method
// console.log(Math.round(55.5))
// // if we want to round it of in higher number only we use roof
// console.log(Math.ceil(99.1))
// //if we want to round it of in lower number only we use floor 
// console.log(Math.floor(100.9))

// // To generate a random number we use Math.random() function
// console.log(Math.random())

// // to give it a upper limit like if we want a random number smaller than 10
// console.log(Math.random()*10)
// // if we want to avoid zero we just add 1
// console.log(Math.random()*10 +1)
// // Now if we want to set both upper limit and lower limit

// let upper=10
// let lower=20
// console.log(Math.floor(Math.random()*(upper-lower+1))+lower)