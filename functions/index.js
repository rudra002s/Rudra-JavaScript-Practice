function rudra(name) {
    console.log("hello " + name + " you are best")
    console.log("hello " + name + " you are very good")
}

rudra("ritu")
rudra("aman")


function sum(a,b,c=1) {
    //here by giving the value of c, c will always be added to the operations called below
    // console.log(a+b)
    return a+b+c
}

result1=sum(3,5)
result2=sum(34,5)
result3=sum(3,95,2) //but yaha pr c apni value 1 ki jagah 2 lega because hamne yaha value assign kari hai

console.log("The sum of these numbers is:",result1)
console.log("The sum of these numbers is:",result2)
console.log("The sum of these numbers is:",result3)