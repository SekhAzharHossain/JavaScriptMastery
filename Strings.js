// Strings can be declared by both single and double caughts.
//Declaration of Strings

let Name='Aman'
// To add or concatinate the stirgs of add new string we use + symbol
let lastname=' Singh'
console.log(Name+lastname)

// But this above method is very old school instead of the in mordern time we use backtics (``).
// Also Known as String interpolation

console.log(`Hello everyone my name is ${Name}${lastname}`)

// String get stored in javascript in the form of objects
// we can access the letters of the sentences with the help of indexes

let name='Name'
console.log(name[0])

// There are many prototype functions/methods given to the strings that we can directly access and use

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf('e'));