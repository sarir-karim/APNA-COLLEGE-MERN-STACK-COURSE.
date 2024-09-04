// string indices mean position of strings
// we can use index a value to represent each character in a string;
// index for each word starts from 0
// javascript is known as 0index based language

// exmaple

let fullName = "SARIR KARIM";
console.log(fullName) // SARIR KARIM

/*
we can print SARIR KARIM word's each character individually 
index 0 S
index 1 A
index 2 R
*/ 

console.log(fullName[0]) // S
console.log(fullName[1]) // A
console.log(fullName[2]) // R
console.log(fullName[3]) // I
console.log(fullName[4]) // R

// if we try to access the 100th index of the fullName varible what shoudl we get then?
console.log(fullName[100]) // undefined

// we can also find the length of the string using the length property
console.log(fullName.length) // 11

// there's another way to acess the string values
console.log([fullName.length-1]) 


// There is another important term called Concatenation by which we can add two or more string to form one string

let a = "sarir"
let b = "karim"
let c = "gojal"

let d = a + b+ c
console.log(d)// sarirkarimgojal

// if we want space then we can do like

d = a + " " + b +" "+c;
console.log(d) //sarir karim gojal


// if we try to add string with number then what will be the result?

let num = 10;
let str = "world"

let result = num + str;
console.log(result) //10world









