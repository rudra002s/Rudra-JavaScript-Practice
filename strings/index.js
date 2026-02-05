console.log("Welcome to Strings")

let a = "Rudra"
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5]) //this will show undefined as there are only 5 letters is rudra from 0 to 4

console.log(a.length) //tells us the length of an array

real_name = "Rudra"
friend = "Ritu"

console.log("His real_name is " + real_name + " and his friend's name is " + friend) //old way

//TEMPLATE LITERALS

console.log(`His name is ${real_name} and his friend's name is ${friend}`) //this is known as string interpolation

let b = "aman"
console.log(b.toUpperCase())
let c = "AMAN"
console.log(c.toLowerCase())
console.log(b.length)

//in slicing last ki digit will not be included

console.log(b.slice(0, 2))
console.log(b.slice(1, 3))
console.log(b.slice(0))
console.log(b.slice(1))

console.log(b.replace("am", "66"))

console.log(b.concat(a))
console.log(b.concat(a, "Ritu"))
console.log(b.concat(a, "Ritu", "Vasvi"))