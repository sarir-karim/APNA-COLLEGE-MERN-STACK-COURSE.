// In javascript we have conditional statemets which take certain condition and return us a result
/**
 * 1: if statment
 * 2: nested-if-else
 * 3: switch;
 */

// if statment is used when we have to aswer based on some condition

let age = 18;

if(age >= 18){
    console.log("you can vote");
    console.log("you can drive");
}

let firstName = "sarir";

if(firstName == "sarir"){
    console.log(`welcome ${firstName}`);
}


// trafic light system using javascript

let light = "🟢"

if(light == "🔴"){
    console.log(" Stop");
}
if(light == "🟡"){
    console.log(" Slow Down");
}
if(light == "🟢"){
    console.log("Go")
}

// else if 

// grading system

let grade = 40;

if(grade >= 90){
    console.log("Your Grade is A+ 😲")
}
else if (grade >=80 && grade >=90){
    console.log("Your grade is A 👏")
}
else if (grade >=70 && grade >=80){
    console.log("Your grade is B 😇")
}else if (grade >=60 && grade >=70){
    console.log("Your grade is C😀")
}else if (grade >=50 && grade >=50){
    console.log("Your grade is D 😩")
}else if (grade <= 40){
    console.log("You Faild, and Jailed😥")
}

// with elase statement

let day = 1;

if(day == 1){
    console.log("Today is Sunday")
}else if(day ==2){
    console.log("Today is Tuesday")
}else if (day ==3){
    console.log("Today is Wednesday")
}else if (day == 4){
    console.log("Today is Thursday")
}else if (day == 5){
    console.log( "Today is Friday")
}else if (day == 6){
    console.log("Today is Saturday")
}else{
    console.log("Please inter day between 1 and 6");
}

// Practice Questions 
/*
Create a system to calculate popcorn prices based on the size customer asked for
if size is 'XL' price is Rs. 250
if size is 'L' price is Rs.200
if size is 'M' rice is Rs.100 
if size is 'S' price is Rs.50
*/

let size = "Xl";

if (size == 'Xl'){
    console.log("Price is Rs 250")
}else if (size == 'L'){
    console.log("Price is Rs 200")
}else if (size == 'M'){
    console.log("Price is Rs 100")
}else if (size == 'S'){
    console.log("Price is Rs 50")
}else {
    console.log("Size not avaiable")
}

// Nested else if 

let marks = 80;

if(marks >=33){
    console.log("Pass")
    if(marks >=80){
        console.log("You scored Grade: A")
    }else {
        console.log("You Scored Grade: F")
    }
}else{
    console.log("Failed")
}