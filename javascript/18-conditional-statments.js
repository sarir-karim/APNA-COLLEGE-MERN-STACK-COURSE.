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