/*
array:
=> item inside array is elements
=> index of elements always start with 0
=> js array is heterogeneous(can store multiple type of data within a single array)

access array elements
syntax:
array_name[index_of_element]

*/
var fruits = ['apple', 'mango', 'kiwi', 'orange', 'grape', 1,2, true, false, [1,2,3,4,5,6,7] , {name: 'ram', address: ['ktm', 'pokhara'], email: 'ram@gmail.com'}]

// var result = fruits[9][3]
var result = fruits[9]
console.log(result[3])

console.log(fruits[3])
var email = fruits[10]
console.log(email.email)