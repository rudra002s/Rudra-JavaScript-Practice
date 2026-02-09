console.log("WELCOME TO PROMISES")
let prom1=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        console.log("I AM DONE")
        resolve("RUDRA")
    }, 3000);
})

prom1.then((a)=>{
    console.log("YAYAYAY")
})

//here in promise set timeout gives a 3 second delay then after delay i am done and rudra and yayaya prints and we can also use reject like done below

let a1=Math.random()
    if (a1<0.5){
        reject("NOT SUPPORTED 1")
    }else{
        setTimeout(() => {
        console.log("I AM DONE 1")
        resolve("RUDRA 1")
    }, 3000);
    }
let prom2=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        console.log("I AM DONE 2")
        resolve("RUDRA 2")
    }, 1000);
})

prom1.then((a)=>{
    console.log("YAYAYAY 2")
})

//here in promise set timeout gives a 3 second delay then after delay i am done and rudra and yayaya prints and we cal also use reject like done below

let a2=Math.random()
    if (a2<0.5){
        reject("NOT SUPPORTED 2")
    }
    else{
        setTimeout(() => {
        console.log("I AM DONE")
        resolve("RUDRA")
    }, 3000);
    }
// prom1.then((a)=>{
//     console.log("YAYAYAY")
// }).catch((err)=>{
//     console.log(err)
// })
let p3=Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})