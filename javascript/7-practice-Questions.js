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


// practice Questions Of String

/***
 * 1: declar your name as string and print it's length in JS
 * 2: Declar your first name as a string and print it's first character;
 * 3: declar your name as a string and print it's last character;
 * 4: what is output of the  following code "apnacollege"+123
 * 5: what are lengths of an empty string & string with single space;
 * */

//solutions

//1
let myName = "sarir karim";
console.log(myName.length) // 11- we have used the length property to show the length of my name;

//2
let firstName = "sarir";
console.log(firstName[0]) // s- we have used the string index to show the first character of my first name

//3
let lastName = "karim";
console.log(lastName[4]); //m because we have  subtract one from the lenth so it showed the last string from right to left

//4
let apnacollge = "apnacollege"+123;
console.log(apnacollge); // apnacollge123 // because string uses contactination of add strings together

//5 
let str = ''
console.log(str.length) // index of empty string will be zero because it's initial index it set as 0

let spStr = ' ';
console.log(spStr.length); // index of a spaced string is 1 because it has one space 

