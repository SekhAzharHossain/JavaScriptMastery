// foreach loop
let arrElem=[];
array1=[1,2,3,4,5,6,,7,8,9,10]
array1.forEach((num) => {
    if(num>4){
        arrElem.push(num)
    } 
});

// console.log(arrElem)

// filter

array2=[1,2,3,4,5,6,7,8,9,10]
// console.log(array2.filter((num)=>(num>4)))

// map

array3=[1,2,3,4,5,6,7,8,9,10]
// console.log(array3.map( (num)=>num+10))

// method chaining

const finalArr=array3.map((num)=>num*10).map((num)=>num+5).filter((num)=>num>=75)
// console.log(finalArr)

// reduce 

const total=array3.reduce(function(acc,curVal){
    return acc+curVal
},0)
console.log(total)

const total1=array3.reduce((acc,curVal)=>(acc+curVal),0)
console.log(total1)