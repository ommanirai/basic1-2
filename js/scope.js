/*
application data
variable(var, let), contant(const), function

scope
=> scope is accessibility of application data
types of scope
1. global scope
2. local scope/functional scope
3. block scope
*/

// 1. global scope
/* 
=> declare in outermost layer
=> accessible within the whole file

*/
// var name = 'ram'

// function welcome(){
//     var n = 10
//     console.log("welcome")
//     console.log(name)
//     console.log(n)
// }
// welcome()
// console.log(name)
// console.log(n)

// 2. local/functional scope
/*
=> declare within the function
=> accessible within the function
=> var maintain the functional scope
*/
var n = 'ram'

function welcome(n1, n2){
    var n = 10
    // console.log("welcome")
    // console.log(name)
    // console.log(n)
}
// welcome(12,23)
// console.log(n)

// 3. block scope
/*
=> declare within a block
=> accessible within a block
=> let maintain the block scope

block
{

}
*/
// var a = 10;
if(true){
    let a = 12;
    console.log(a)
}
else{
    var a = 34;
    console.log(a)
}
console.log(a)