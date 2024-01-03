// welcome(){

// }
// result
// pi
// result()

// function declaration
function welcome() {
    console.log("welcome")
}

// variable declaration
var result = function () {
    console.log("unnamed function")
}
const pi = '234234'

// console.log(typeof(result))
// HOISTING => hoisting is a mechanism which moves all the declaration at top before execution of the program

// method
// typeof()
var i = 1
setInterval(function(){
    console.log(i)
    i++
}, 1000)