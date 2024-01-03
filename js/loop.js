/*
Loop in javascript
1. for loop

2. while loop
syntax:
initialization;
while(condition){
    body of while
    increment/decrement
}

3. do while loop
initialization;
do{
    console.log(i)
    increment/decrement
}while(condition)


js centric loop
filter
map
reduce
some
every
find

1. for loop
for(initialization; condition; increment/decrement){
    body of for
}
1. wap(write a program) to print number from 1 to 10
initialization: i=1
condition: i<=10
increment: i++
*/
// var sum = 0
// var n = prompt("enter the number to find sum")
// for (i = 2; i <= 50; i=i+2) {
    // if(i%2==0){
        // console.log(i)
    // }
    // sum = sum + i;
    // sum += i;
// }
// console.log(sum)
// 2. wap to print number from 10  to 1
// 3 wap to print the multiplication table of number n
// 4. wap to print the sum of number from 1 to 10
// wap to print the sum of natural number n

// 5. wap to print the factorial of the number 5
// 5! => 5 * 4 * 3 * 2 * 1

// 6. wap to print even number from 1 to 50
// 7. wap to print odd number from 1 to 50
// 8. wap to check the number is prime or not?
// 9. wap to print the fibonacci series
/*
0 1 1 2 3 5 8 13 21 34 55
next number => sum of last two digit

*/
// prime number 
var n = 6
var count = 0
for(i=1; i<=7; i++){
    if(n%i==0){
        count++
    }
}
if(count == 2){
    console.log(n, 'is a prime number')
}
else{
    console.log(n,"is not a prime number")
}
