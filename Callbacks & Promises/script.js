//JAVASCRIPT IS ASYNCHRONOUS 

console.log("Rudra is the best")
console.log("Ritu is the best")

setTimeout(() => {
    console.log("i am inside")
}, 0); //it will be printed at the last because of the delay, even if the delay is of 0 second still it will be printed after the whole script

setTimeout(() => {
    console.log("i am inside 2")
}, 0);

console.log("The End")

const fn = () => {
    console.log("Nothing")
}
const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadSCript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Rudra",fn)
    document.head.append(sc)
}

loadSCript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback) 
