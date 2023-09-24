// IIFE Immediately Invoked Function Expression

// function dbConnect(){
//     console.log("DB connected")
// }

// dbConnect()

// to prevent it from global pollution we can use iife

(function dbConnect(){
    console.log("DB connected")
})();

( function hi(){
    console.log("hi")
})();

(()=>{
    console.log("hello")
})();

// how to pass the value inside iife

(sayGoodNight=(name)=>{
    console.log(`Good night mr. ${name}`)
})('Azhar');
