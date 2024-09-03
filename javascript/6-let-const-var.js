// Let keyword is used to declare variables.
/*
we can declare the varibles using let keyword in two ways
1: we can delare  variables and initalize value to it; let a  = 9;
2: we can first declare the variables then initialize value to it: let b; b = 5;

always use ; semicolon in the end of the variables.

const keyword is used to declare the constant values. values of the constant can't changed with re-assigment & they can't be re-declared. 
example: const pi = 3.14;
*/

// let 
let a = 10;
console.log(a) // 10;

a = a +2;
console.log(a) // 12;


let b;
b = 20;
console.log(b)  // 20;

// finding the  area of a square

let side = 4;
let area = side ** 2;
console.log(area); // 16


// const 

const age = 50;

// *age  = 39; // this is not allowed using const keyword
//* age = age +1 // error

// finding area of a 

const pi = 3.14;
let rad = 4;
let are = pi * rad **2;
console.log(are); // 50.24;


// Another keyword called var is also used to decalare varibles but it's now we used let instead.

var x = 5;
var y = 10;
var sum = x +y;
console.log( sum); // 15 










