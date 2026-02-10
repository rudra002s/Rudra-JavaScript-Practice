// let obj={
//     a:1,
//     b:"rudra"
// }
// console.log(obj)

// //example

// let animal={
//     eats:true
// }

// let rabbit={
//     jumps:true
// }

// rabbit.__proto__=animal //sets a prototype for rabbit

class Animal {
    constructor(name) {
        this.name = name //this is used for to create properties in a object 
        console.log("Object is created...")
    }
    eats() {
        console.log("I AM EATING")
    }
    jumps() {
        console.log("I AM JUMPING")
    }
}

class Lion extends Animal {
    //this is an extension to animal class
}

let a = new Animal("BUNNY")
console.log(a)
console.log(a.eats)
console.log(a.jumps)
console.log(a.name)

let l = new Lion("SHER")
console.log(l)