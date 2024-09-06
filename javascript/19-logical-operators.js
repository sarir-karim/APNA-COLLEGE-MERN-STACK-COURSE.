/*
Logical operators are used to combine expressions
we have three types of logical opeartors
1: &&  AND  operator returns true if both of the conditions are true
2: || OR operator returns true if one condition is ture
3: ! NOT operator returns true for false statment and false for ture
*/

//AND opeator examples

let age = 18;

if (age >=18 && age <70){
    console.log("You can work")
}else{
    console.log("You are not eligable")
}

//example of OR opeartor

let grade = 50;

if(grade > 45 || grade <=50){
    console.log("You Grade is D")
}

// example of 
let user = true
if(!user){
console.log("Please Login")
}else{
    console.log("Welcome to our website")
}

// Practice Question
/*
Q: A "Good String" is a string that starts with 'a' and has a length >3 write program to find if the string is good or not.
*/

let string = 'apple'

if((string[0]) === 'a' && (string.length > 3)){
    console.log("Good String")
}else{
    console.log("bad string")
}

// Q2: predict the output of the following code.

let num = 12;
if((num%3===0) && ((num+1 == 15) || (num-1==11))){
    console.log("safe") //answer will the safe string because we have used || operator to check the condition
}else{
    console.log("Unsafe")
}

