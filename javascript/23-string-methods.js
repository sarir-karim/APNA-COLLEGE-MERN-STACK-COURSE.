// methods - actions that can be performed on objects.

//formate: stringName:method();

//basic methods in javascript

// console.log("Hello world!");
// alert("Hello everyone!");

//any verb or name that can be end with the parenthesis is called method.

//TRIM() METHOD

/**
 * trim method is used to remove the extra spaces form the starting and ending of the string.
 * Alert! Strings in javascript are immutable becuase whenever we perform any method on strings the methods create new varible. they dosen't change the original value.
 */

let string = "     hello    world!    ";
console.log(string) //  "     hello world!    "

// string.trim();
// console.log(string) // "hello world!"


/// STRINGS ARE IMMUTABLE IN JS
/**
 * No changes can be made to strings.
 *  whenever we do try to make a change, a new string is created and old one remains the same.
example
 */

let msg = "Hello      ";

// console.log(msg) //"Hello      "

// let newMsg = msg.trim(); //"Hello"

//ANOTHER COOL STRING METHODS

//toUpperCase() and toLowerCase();

//topUppercase method converts the string to uppercase and toLowerCase method converts the string to the lowercase 

// let fname = "sarir";
// console.log(fname.toUpperCase());

// let lname =  "karim";
// console.log(lname.toLowerCase());


//STRING METHODS WITH ARGUMENTS
//1: indexOF()

let text = "ILoveCoding";

let result = indexOf("Love")
console.log(result)

