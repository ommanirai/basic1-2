/*
3. if else in js

syntax:
if(condition){
    body of if
}
else{
    body of else
}

*/
var n = 13;
if (n % 3 == 0 && n % 7 == 0) {
    console.log(n, 'is divisible by both 3 and 7')
}
else {
    if (n % 3 == 0 || n % 7 == 0) {
        if (n % 3 == 0) {
            console.log(n, 'is divisible by 3')
        }
        else {
            console.log(n, 'is divisible by 7')
        }
    }
    else {
        console.log(n, 'is not divisible by both 3 and 7')
    }
}