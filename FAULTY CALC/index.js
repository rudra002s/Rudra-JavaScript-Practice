/*create a faulty calc using js

1) take input from use
2) performs wrong operations as follows;
+___-
*___+
-___/
/___**

it performs wrong operation 10% of the times

 */

let random = Math.random()

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    //for correct calculations
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    //for wrong calculations
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
} 