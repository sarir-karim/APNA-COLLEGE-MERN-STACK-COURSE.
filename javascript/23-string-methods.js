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

// let text = "ILoveCoding";

// let result = indexOf("Love")
// console.log(result)


//Now we will learn about the methods chaining
// let's take a senario that we have a string with a lote of space and we have to remove the space and then converting that to uppercase

let word = "Hello";

// let wordresult = word.trim().toUpperCase();
// console.log(wordresult)

//now the new method we can do here is the slice method. Slice method is used to slice some part from the original string and shows it in a new string.

let originalString = "sarirkarim"
//now i want to show only the word sarir. so what can i do here is. i will pass the starting index and the ending index it will return me the string from index 1 to not inlcluding the last index.

console.log(originalString.slice(0, 5));//sarir

// and we can aslo cut the string from the center like.

console.log(originalString.slice(1, 7)); //arirka

//we can aslo use -ve sign it will work like if we have given the number -5 and we have the string length of 10 it will show us the string from right to left

console.log(originalString.slice(-5))

//another string method called replace() is used to replace any world or letter in a string with a new word or letter.


let str = "Hello world i am coder";

let newStr = str.replace("world", "all");

console.log(str)
console.log(newStr);

//repeat() is also a string method which is used to repeat a string.

let msg1 = "Hello MoM"

console.log(msg1.repeat(10))