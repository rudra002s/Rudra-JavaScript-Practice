console.log("i am learning loops")

// let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)
// console.log(a+3)

//loops can be used to print numbers you cannot type number till n manually so we need loops

// there are five types of loops
// for loop
// for in loop
// for of loop
// while loop
// do while loop

//FOR LOOP
// for (let i = 0; i < 500; i++) {
//     console.log(a + i)
// }

// in this we first initialise then put condition then it prints in console log

// FOR IN LOOP is used for key and elements

// let obj = {
//     name: "Rudra",
//     role: "student",
//     college: "usar"
// }

// //to print both the key and elements
// for (const key in obj) {
//     const element = obj[key];
//     console.log(key, element)
// }

// //to print key
// for (const key in obj) {
//     const element = obj[key];
//     console.log(key)
// }

// //to print elements
// for (const key in obj) {
//     const element = obj[key];
//     console.log(element)
// }

// //FOR OF LOOP is used in arrays

// for (const char of "Rudra") {
//     console.log(char)
// }

//WHILE LOOP
// let i=5;
// while (i<7) {
//     console.log(i)
//     i++
// }

// let i=0;
// while (i<9) {
//     console.log(i)
//     i++
// }

//DO WHILE LOOP this is same as while loop but yeh shuru m rrun hojaega because yeh condition ast m check krra h

let i=10;
do {
    console.log(i)
    i++
} while (i<10);