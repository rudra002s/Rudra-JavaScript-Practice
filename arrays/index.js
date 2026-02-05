//array is also declared as a variable only with [] and array are mutable which means when we perform a perform original array is changed but in strings when we perform a function it returns a new string and original string is intact

let arr=[1,2,3,4,5]
// index=0,1,2,3,4

console.log(arr)
console.log(arr.length) //to print length of array


console.log(arr[0]) //to print a particular element of an array using its index
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

arr[0]=555; //here it changed the element of array

console.log(arr.toString()) //converts array to string

console.log(arr.join(" and ")) //replaces comma with the word inside ""

console.log(arr.pop()) //pops element from last

console.log(arr.push("Rudra")) //adds elements to end of array

console.log(arr.push("1902")) //adds at the end
console.log(arr)

console.log(arr.shift()) //removes first element

console.log(arr.unshift("Ram")) //adds at the start

//to combine arrays
let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
let a4=a1.concat(a2,a3)
console.log(a4)