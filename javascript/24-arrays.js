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

// let newFollower = followers.push('d');

// console.log(followers);
// console.log(newFollower);
// console.log(followers.pop());

// let title = followers.unshift("Followers: ");

// console.log(title);

// let blockPerson = followers.shift();

// console.log(blockPerson);

//array indexOf and includes method.

const colors  = ["Yellow", "green", "blue", "red"];
// console.log(indexOf("Yellow"));
// console.log(colors.includes("Yellow"))

//ARRAY CONCAT AND REVERSE METHODS
//CONCATE METHOD CONTACTS OR MERGS TWO ARRAY ELEMENTS TOGETHER.
//REVERSE METHOD REVERSE THE ARRAY ELEMENT(!- IT CHANGES THE ORIGINAL ARRAY);

const schools = ["school1", "school2", "school3"];
const colleges = ["colg1", "colg2", "colg3"];

// console.log(schools.concat(colleges));
// console.log(schools.reverse());

//SLICE METHOD IN ARRAY

const country = ["pak", "ind", "sa", "aus"];
// console.log(country.slice())// it will slice out all the countries;
// console.log(country.slice(2));
// console.log(country.slice(1,3))
// console.log(country.slice(-3))


//splace Method
//splice methods tooks three arguments one is the starting index second is the how many items you delete and the third you want to add items.
const cities = ["gilgit", "isb", "karachi", "lahore"];

// console.log(cities.splice(2, 0,"hunza", "gojal"));

// console.log(cities)


//Sort method
//SORT method is used to convert the strings in assending order or decending order.
//example

const cars = [ "maruti", "mehran","bmw"];
// console.log(cars.sort());

//sort method works fine for characters or words but it doesn't work same for numbers.

const ages = [10, 55, 29, 199];

// console.log(ages.sort());


/**
 * ARRAY REFERENCES
 * ARRAY REFERENCES MEANS THAT WE ARE TAKING ABOUT NOT THE ARRAY VALUES BUT THE ADDRESS THAT ARRAY IS ASSIGED.
 */

console.log('a' == 'a'); // true
console.log("" == ""); // true;
console.log([]== []); // false; because the values are not compared that address in the memory is compared.
console.log([1] == [1]); // false;
let arr1 = [10];
let arr1Copy = arr1;

console.log(arr1 === arr1Copy); //true; becasue the both array has same address; because both are using initilization method 

///Array contastat
// when we use const keywork with array it becomes constat while we can change the values add or remove values using methods but can't completely chnage the array;

const city = ["karachi", 'lahore', "isb"];

// console.log(city.pop());
// console.log(city.push("gilgit"));
// console.log(city = ["hunza", "nagar"]);

//neste arrays 
// when we have arrays inside ararys they are called nested arrays

let multiArrays = [[1,3], [2, 4], [5,6]];
// the above arrys will be represented in the form of rows and columns
// not we have three rows and two columns;

console.log(multiArrays[0])// this will print the frist array inside the multi array;
console.log(multiArrays);// this will print the whole array;

// now if we want to access the elements in each array;

console.log(multiArrays[0][0]) // this will give us the first item stored in the first array
console.log(multiArrays[0][1])
console.log(multiArrays[1][0])
console.log(multiArrays[1][1])
console.log(multiArrays[2][0])
console.log(multiArrays[2][1])
// now we have accessed all the array elements using the rows and columns using indices