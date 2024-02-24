// let myName="Azhar  "
// let myChannel="youTube  "

// console.log(myName.trueLength);

let myHeros=["thor","ironman"];

let heroPower={
    thor:"Thurder",
    ironman:"suit",

    getThorPower:function(){
        console.log(   `Thor power is ${this.thor}`)
    }
}

Object.prototype.azhar=function(){
    console.log("azhar is present in all objects");
}

// heroPower.azhar()
myHeros.azhar()