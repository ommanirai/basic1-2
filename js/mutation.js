/*
mutation
1. mutable behaviours
=>> if change in original it is reflected in references
=>> if change in references it is reflected in original
=>> non primitive data types are mutable(array and object)

2. immutable behaviours
=>> if change in original it is not reflected in references
=>> if change in references it is not reflected in original
=>> primitive data types are immutable
*/
// var details1 = {
//     name: 'ram',
//     add:'vedu',
//     contact: '243243243'
// }

// var details2 = details1

// details1.status = "online"

// details2.email = "ram@gmail.com"

// console.log(details1)
// console.log(details2)

var name1 = 'ram'
var name2 = name1;

name1 = 'hari'
name2 = 'rahul'

// console.log(name1)
// console.log(name2)


var details = {
    name: 'ram',
    add:'vedu',
    contact: '243243243'
}
// details.status = 'online'
function welcome(abc){
    abc.gender = "male"
    console.log(abc)
}
welcome(details)
console.log(details)
