/*
4. nested if else in javascript

syntax:

if(condition1){
    body of condition1
}
else if(condition2){
    body of condition2
}
else if(condition3){
    body of condition3
}
.
.
.
else if(condition n){
    body of condition n
}
else{
    body of else
}

*/
var n = 1
if (n > 50) {
    console.log(n, 'is greater than 50')
}
else if (n > 40) {
    console.log(n, 'is greater than 40')
}
else if (n > 30) {
    console.log(n, 'is greater than 30')
}
else if (n > 20) {
    console.log(n, 'is greater than 20')
}
else if (n > 10) {
    console.log(n, 'is greater than 10')
}
else {
    console.log(n, 'is less than 10')
}

/*
n1 = Number(prompt("enter the first number"))
symbol = prompt("press + for sum, press - for substraction, press / for division, press * for multiplication, press % for remainder, press ^ for power of number, press sqrt for square root of the number")
n2

if(symbol=='+'){
    n1 + n2
    12
}
else if(symbol == '^'){
    var power = Math.pow(n1, n2)
}
else if(symbol == 'sqrt'){
    var sqrt = Math.sqrt(n1)
}



*/