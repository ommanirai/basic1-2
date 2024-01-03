/*
switch in js

syntax:

switch(case){
    case case1:
        body of case 1
        break;
    case case2:
        body of case 2
        break;
    case case3:
        body of case 3
        break;
    .
    .
    .
    .
    default:
        body of default
        break;
}

*/
var day = 7
switch (day) {
    case '+':
        console.log("Sunday")
        break;
    case '-':
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;
    default:
        console.log("Enter the number between 1 to 7 to find the day")
        break;
}


// calculator
var n1 = prompt("enter first number")
var symbol = '+'
switch (symbol) {
    case '+':
        var n2 = Number(prompt("enter second number"))
        var sum = n1 + n2;
        console.log(sum)
        break;
    case '^':
        var power = 3
        var power = Math.pow(n1, power)
        console.log(power)
        break;
    case 'sqrt':
        var sqrt = Math.sqrt(n1)
        console.log(sqrt)
        break;
    default:
        console.log('invalid input')
        break;
}