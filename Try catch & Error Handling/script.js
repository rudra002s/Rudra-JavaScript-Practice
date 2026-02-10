let a = prompt("Enter first number")

let b = prompt("Enter second number")

/*let sum=a+b 
this is wrong this will append number instead of adding
this icode is for string addition
  */

//code for addition parseInt converts string into integer

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("NOT ALLOWED! PLEASE ENTER A NUMBER")
}
/* if instead of number user will type strings it will show NaN instead of showing error
so in order ot give error we have used this function where || stands for or and using throw error can be shown */

let sum = parseInt(a) + parseInt(b)

//console.log("The sum is",sum) 

//this function is fine

try {
    console.log("The sum is", sum * x) //sum,x is wrong we are using it to understand the trycatch function 
} catch (error) {
    console.log("ERROR HAI BHAI G")
}
/* here we are using this to handle the error in try function we have given the line where error was showing and instead of that out custom error will be shown so that user can fix his/her mistake */
finally {
    console.log("files are being close and db connection is being closed")
}

// console.log("The sum is",sum*x) //this will show error that x is not defined