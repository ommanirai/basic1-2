/*
condition
types:
1. if
2. nested if
3. if else
4. nested if else
5. switch


1. if
syntax:
if(condition){
    body of if
}

condition
truthy value => true, some defined value
falsy value  => false, '', "", 0, null, undefined

*/
var n = 12;
if (undefined) {
    console.log("true")
}
console.log('hi')

/*
2. nested if
syntax:
if(condition1){
    if(condition2){
        // body of nested if
    }
}
*/
if (n % 3 == 0) {
    if (n % 7 == 0) {
        console.log(n, 'is divisible by both 3 and 7')
    }
    console.log(n, 'is divisible by 3')
}