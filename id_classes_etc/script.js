console.log("Rudra can do it")

// let boxes = document.getElementsByClassName("box")
// // console.log(boxes)

// boxes[2].style.backgroundColor = "yellow"

// document.getElementById("red").style.backgroundColor="yellow"

document.querySelector(".box").style.backgroundColor="orange" //colors first element having box

console.log(document.querySelectorAll(".box")) //it will give us a console and cannot be colored as its a html and it cannot be colored to color this we need for 

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor="pink"
});

document.getElementsByTagName("div") //gives element by there tag names