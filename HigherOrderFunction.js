// for of loop
// for of loop is very array specific loop

const arr=[1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

// It's also applicabe to strings

const str='hello world'
for (const iterator of str) {
    // console.log(iterator)
}

// Maps

const map=new Map()
map.set('IN',"India")
map.set('cn',"Canada")
map.set('IN',"India")
// console.log(map)

for (const [key,value] of map){
    // console.log(key,':-',value)
}

// for(const key in map){
//     console.log(map[key])
// }

// HIGHER ORDER FUNCTION
// const coding=['c++','python','c#']
// coding.forEach( function (item){
//     console.log(item);
// })

//Higher order function is a function that operates on other
//functions either by taking them as an argument or by
//returning function.

// Example 1
// Without higher order function

const arr1=[1,2,3,4,5]
for(i in arr1){
    // console.log(arr[i]);
}
// It will print 1,2,3,4,5

// With higher order function

const arr2=[1,2,3,4,5]
const arr3=arr2.map(function(i){
    return(i)
})
// console.log(arr3)
// It will print [1,2,3,4,5]

// Example 2
// Without Higher order function
const year=[1990,1998,1995,1993]
for(i in year){
    // console.log(2000-year[i])
}

// with Higher order function
const func4=year.map(function(i){
    return(2000-i)
})
console.log(func4)