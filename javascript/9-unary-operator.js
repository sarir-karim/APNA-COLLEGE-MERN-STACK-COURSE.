/*
So in the previous lessions we have learned about assigment operator also known as binary operators
Now in this lession we will learn about unary operator.

Binary operators acullay take two operands to operate; like  a -b;
Unary opeartors  takes one operand to opearate; a--

we can write the unary operator in two forms

1: a++ (post increment)
2: ++a (pre increment)
3: a-- (post decrement)
4: --a; (pre decrement)
*/

// binary opearators

let a = 10;
let b = 20;

let sum = a + b; // here + operator is a binary operator which takes two operands a and b to operate;
console.log(sum); // 30

// unary opeartor

let year = 2000;
year++ 

console.log(year) // 2001

// examples of pre increment and post increment 

let age = 20;
++age; // first this will update the age original value and then shows the value.

console.log(age)

age++  // first prints the value then updates the value on the new variable.

console.log(age)