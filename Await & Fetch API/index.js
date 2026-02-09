// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

//async function always returns a promise 
// settle means resolve or reject| resolve means promise has settled successfully and reject means it has not been settled


async function getData() {
    let x =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
    let data = await x.json()
    // let data = await x.text() to get string .text is used 
    console.log(data)
}

// let data = getData() //yaha par poori script run hogi chahe kitna delay ho yaha par pending show hoga jab tk timer khatam nhi hoga so to stop script until timer is over await will be used

//old way

// console.log("Loading Module")
// console.log("random text")
// console.log("Load Data")

// data.then((v)=>{ //now the script will run after timeout
// console.log(data)

// console.log("Process Data")

// console.log("task 2")
// })

//latest way
async function main() {
    console.log("Loading Module")
    console.log("random text")
    console.log("Load Data")
    //these three lines will be run instantly
    let data = await getData()
    //it will wait for 3.5 seconds to run the async function after that next two lines will run
    console.log(data)
    console.log("Process Data")
    console.log("task 2")
}

main() //here it is running the function