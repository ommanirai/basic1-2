/*
inbuilt method/property
setInterval()
setTimeout()
typeof()
Number()
*/

// string
var text = 'Nepal, is, Beautiful, Country'
// console.log(text.toLowerCase())
// console.log(text.toUpperCase())
// var length = text.length;
// console.log(length)
// console.log(text.substring(2,5 ))
// console.log(text.substr(2, 5))

// // split
// // convert string to array
// console.log(text.split(","))
// var email = 'ram@gmail.com'
// console.log(email.includes("@.comgmail"))

// number
var number = 100.1787;
// console.log(!isNaN(number))
// console.log(number.toFixed(0))

// object
var details = {
    name: 'sujan',
    address: 'Lalitpur',
    email: 'sujan@gmail.com'
}
// console.log(details.hasOwnProperty('name'))
// console.log(Object.keys(details))
// console.log(Object.values(details))

// console.log(details.name)
// console.log(details['name'])

// for in
for(var item in details){
    // console.log(key)
    // console.log(details)
    console.log(details[item])
    // details.name;
    // details.address;
    // details.email;
}

