function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}
console.log("Loading Module")
console.log("random text")
console.log("Load Data")

let data=getData() //yaha par poori script run hogi chahe kitna delay ho yaha par pending show hoga jab tk timer khatam nhi hoga so to stop script until timer is over await will be used

data.then((v)=>{

})
console.log(data)

console.log("Process Data")

console.log("task 2")