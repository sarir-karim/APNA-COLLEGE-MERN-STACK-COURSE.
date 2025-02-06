/*
Array: Array is a data-structure which is used to store the data in linear formate
we can access the data of array using index.
*/ 

let students = ["karim", "sarir", "kamran"];
console.log(students);
//if we want to access a specific name we can use the index of access it.

console.log(students[1]);// sarir

// creating arrys of different or same types

let names = ["ali", "thomas", "amir"];
// checking the length of the array;
console.log(names.length) // 3

//creating different types of array;

let info = ["sarir", 24, "pakistan"];
//accessig the elemtns inside the array;

console.log(info[0]); // sarir;
console.log(info[0][0])//s


//arrays are mutable means we can change the arrays anytime we want.

let books  = ['book1', 'book2', 'book3'];
console.log(books)
console.log(books[1] = 'Think and Grow Rich');
console.log(books)

/**
 * Array Methods 
 * Push() adds element at the end of the array
 * Pop() removes the element from the array
 * unshift() adds element at the start of the array
 * shift() removes the element from the start of the array
 */


let followers = ['a', 'b', 'c'];

let newFollower = followers.push('d');

// console.log(followers);
// console.log(newFollower);
// console.log(followers.pop());

let title = followers.unshift("Followers: ");

console.log(title);

let blockPerson = followers.shift();

console.log(blockPerson)


