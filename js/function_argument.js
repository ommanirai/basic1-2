/*
function with argument
syntax:
function function_name(parameter1, parameter2, parameter3,....){
    // body of function
}

function_name(argument1, argument2,argument3,...)

*/
function welcome(details, det) {
    console.log("what comes in", details)
    // console.log('hi',details.name, 'welcome to:', details.address, 'your phone number: ', details.contact, details.email, details.status)
    console.log('hi', details.name, 'welcome to:', details.address, 'your phone number: ', det[0], det[1], det[2])
}
var details = {
    address: 'vedu',
    name: 'ram'
}
var det = ['232423', 'ram@gmail.com', 'online']

// welcome(details)
welcome(details, det)