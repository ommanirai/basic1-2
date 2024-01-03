/*
logical operator
&& => logical and
|| => logical or
! => logical not

logical and(&&)
condition1  condition2  result(condition1 && condition2)
TRUE        TRUE        TRUE && TRUE => TRUE
T           F           F
F           T           F
F           F           F


logical or(||)
condition1  condition2  result(condition1 || condition2)
TRUE        TRUE        TRUE || TRUE => TRUE
T           F           T
F           T           T
F           F           F


logical not(!)
condition   result(!condition)
T           !T => F
F           !F => T

*/

var x = 12;
var y = 12;
var address = 'Vedu'
var result1 = x > 10; // t
var result2 = y > 10; // t
// var result = result1 && result2; // t && t
// var result = x > 10 && y > 10 && address == "Vedu"
var result = x <= 10 || y > 10 
var result = result2 || result

console.log(!result)
var abc = true;
console.log(!abc)