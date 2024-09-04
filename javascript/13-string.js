// String are text or squence of characters
// stings can be written either in single or double quotes
// spaces are allowed in string


let firstName = 'sarir';
let lastName = "karim";

console.log(firstName); // sarir
console.log(typeof firstName) // string

console.log(lastName); // karim
console.log(typeof lastName) // string

// we can represent a single character as a string

let  char = 'a';
console.log(char) // a
console.log(typeof char) // string


// represting numbers as a string

let num = "123";
console.log(num) //123
console.log(typeof num) // string


// empty strings are empty string 

let Estring = ''
const Estring2 = ""

console.log(Estring) // 
console.log(Estring2) // 

console.log(typeof Estring, Estring2) // string


// we will be using single quotes for characters like 'a' 'b' 'c' and double quotes for words like "sarir"

let a = 'a'
let name = "sarir"

// we can aslo write string like 'this this is an "apple "'

let quote = 'this is an "apple" '
console.log(quote); // this is an "apple"

// or we can write it like "this is an 'apple' "

let apple = "this is an 'apple' ";
console.log(apple); // this is an 'apple';

// we do not use single quotes inside single quotes like 'this is an 'apple'' this will give an error
// let orange = 'this is an 'orange'' 

