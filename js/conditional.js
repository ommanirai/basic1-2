/*
conditional operator in js
syntax:

condition ? body of truth : body of false
name ? good morning name : good morning
*/
var a = 12;
// var result = (a % 2 == 0)
// result
//     ? console.log("even number")
//     : console.log("odd number")

// a % 3 == 0
//     // ? console.log(a, 'is divisible by 3')
//     ? a % 7 == 0
//         ? console.log(a, "is divisible by both 3 and 7")
//         : console.log(a, "is divisible by 3, not divisible by 7")
//     : console.log(a, 'is not divisible by 3')


a % 3 == 0 && a % 7 == 0
    ? console.log(a, 'is divisible by both 3 and 7')
    // : console.log(a, 'is not divisible by both 3 and 7')
    :  a % 3 == 0 || a % 7 == 0
        // ? console.log(a, 'is divisible by 3 or 7')
        ? a % 3 == 0
            ? console.log(a, 'is divisible by 3')
            : console.log(a, 'is divisible by 7')
        : console.log(a, 'is not divisible by both 3 and 7')
