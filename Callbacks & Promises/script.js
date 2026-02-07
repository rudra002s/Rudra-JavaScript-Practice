//JAVASCRIPT IS ASYNCHRONOUS FUNCTION

console.log("Rudra is the best")
console.log("Ritu is the best")

setTimeout(() => {
    console.log("i am inside")
}, 0); //it will be printed at the last because of the delay, even if the delay is of 0 second still it will be printed after the whole script

setTimeout(() => {
    console.log("i am inside 2")
}, 0);

console.log("The End")
