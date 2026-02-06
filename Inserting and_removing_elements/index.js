//inner html

console.log(document.querySelector(".box").innerHTML) //to see what is inside box
console.log(document.querySelector(".container").innerHTML) //to see what is inside container
console.log(document.querySelector(".container").innerText) //to see the inside text of container
console.log(document.querySelector(".box").innerHTML="Hey i am Box1") //updates the inner element of the first div having the class box

//outer html

console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".container").tagName) //gives name for particular tag
console.log(document.querySelector(".container").nodeName) //gives name for particular node
console.log(document.querySelector(".container").textContent)

//attributes

console.log(document.querySelector(".box").hasAttribute("style")) //tells wether the code has style or any other element
console.log(document.querySelector(".box").getAttribute("style")) //shows what type of styling has been done
console.log(document.querySelector(".box").setAttribute("style","display:inline")) //changes the style