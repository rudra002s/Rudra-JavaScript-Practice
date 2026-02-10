const addItem = async (item) => {
    await randomDelay()
    let div=document.createElement("div")
    div.innerHTML=(item)
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random() //for numbers between 1 and 7
        setTimeout(() => {
            resolve()
        }, timeout*1000);
    })
}
let text = [
    "Initializing hacking",
    "Reading your files",
    "Password files detected",
    "Sending all data and personal files to main server",
    "Cleaning up"
]

for (const item of text) {
    addItem(item)
}
