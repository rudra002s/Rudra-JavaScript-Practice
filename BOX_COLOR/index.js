let box = document.querySelectorAll(".box")
for (let i = 0; i < 5; i++) {
    //text color
    let r1 = Math.random() * 255
    let g1 = Math.random() * 255
    let b1 = Math.random() * 255

    //background color
    let r2 = Math.random() * 255
    let g2 = Math.random() * 255
    let b2 = Math.random() * 255

    box[i].style.color = `rgb(${r1},${g1},${b1})`
    box[i].style.backgroundColor = `rgb(${r2},${g2},${b2})`
}
