console.log("WELCOME TO PROMISES")
let prom1=new Promise((resolve,reject)=>{
    
//     setTimeout(() => {
//         console.log("I AM DONE")
//         resolve("RUDRA")
//     }, 3000);
// })

// prom1.then((a)=>{
//     console.log("YAYAYAY")
// })

//here in promise set timeout gives a 3 second delay then after delay i am done and rudra and yayaya prints and we cal also use reject like done below

let a=Math.random()
    if (a<0.5){
        reject("NOT SUPPORTED")
    }
    else{
        setTimeout(() => {
        console.log("I AM DONE")
        resolve("RUDRA")
    }, 3000);
    }
})
prom1.then((a)=>{
    console.log("YAYAYAY")
})
