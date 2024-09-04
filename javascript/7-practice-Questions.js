// Practice questions
/**
 * 1: What is value of age after this code runs?
 *  let age = 23;
 *  age+2 // after two years
 * 
 * 2: what is the value of avg after this code runs?
 *   let hindi = 80;
 *   let eng = 90;
 *   let math  = 100;
 *   let avg = (hindi + eng + math) / 3
 * 
 *  *note  " = " operator is used to assign value to a varible ; it's called assigment operator
 * */ 

// answer to first question

let age = 23;
age +2; 
console.log(age) // 23; the result will remain the same becuse we are just adding 2 to the value 23 not assigning the calculated value to the age that's why the value of age remains the same;

// answer to 2nd  question.

let hindi = 80;
let english = 90;
let math  = 100;
let avg = (hindi + english + math) / 3  //(80+90+100)/3   = 270/3 = 90;
console.log(avg)

// so the average will be 90;



/***********************************************
 *  PRACTICE QUESION ABUT UNARY OPERATOR
 * 
 *  here are parctice question for unary operator.
/**
 * What is the value of each variable in each line of code?
 * let num = 5;  value is 5;
 * let newNum = num++ value = 6
 * newNum = ++num; value = 7
 */

let num = 5;
console.log(num); // 5
let newNum =  num++;
console.log(newNum) // 5
newNum = ++num;
console.log(newNum) // 7
 


// Practice Questions of Identifiers

/**
 * 1: Find errors in the following code?
 * a)
 * 1:let 1age = 5;
 * 2:let 2age = 10;
 * 
 * b)
 *  1:let marks = 75;
 *  2:let isPass = True;
 * c) 
 *   1: let is Pass = "true"
 * 
 */


// Solutions

let age1 = 5;
let age2 = 10;

let marks  = 75 // is correct 
let isPass = true; //T must b in small letters
let isPass2 = true; // true must not be inside "quotes"