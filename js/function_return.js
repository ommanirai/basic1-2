/*
function return 
syntax:
function function_name(){
    return something
}

*/
function sum(){
    var list1 = ['mango', 'apple']
    var list2 = ['papaya','kiwi']
    var list3 = {
        a: 'banana',
        b: 'orange'
    }
    // console.log('what comes in:', det)
    // var result = a + b;
    // console.log('the sum of two number:', result)
    return {
        list1:list1,
        list2:list2,
        list3:list3
    };
    // return list2;
    // return list3;
}
var details = {
    name: 'hari',
    address: 'Vedu'
}
var res = sum()
// console.log('hi', res.name, 'welcome to ', res.address)
console.log("first fruits: ", res.list2[1])
console.log("second fruits: ", res.list3.b)