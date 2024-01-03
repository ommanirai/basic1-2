/*
iife(immediately invoked functional expression)
syntax:
(function)()
*/
function welcome(){
    console.log("welcome")
}
// welcome()
// (welcome)()

(function(){
    console.log("i am anynamous function")
    console.log("i am taking help of IIFE to get execute")
})()