function welcome(name, address, cc){
    // cc is callback
    // console.log(typeof(cc))
    // cc()
    // console.log(name)
    // console.log(address)
    setTimeout(function(){
        return name;
    }, 2000)
}

var result = welcome('Sujan', 'Vedu', function(){
    console.log("i am callback")
} )
console.log(result)
// var a = function(){

// }
// a()
// method
// setInterval(function(){}, 1000)
// setTimeout(funtion(){}, 1000)