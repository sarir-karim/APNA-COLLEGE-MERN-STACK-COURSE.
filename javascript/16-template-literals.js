/**
 * Template literls are used to add or embed expressions in a string
 */ 

// without using template literals

let pencil = 10;
let earsor = 5;
let output = "The total price is  = "+ (pencil + earsor) +"Rupees"
console.log(output) // The total price is 15 Rupees.

// using template literls

let pen = 10;
let book = 200;
let output2 = `The Total prie is ${pen+book} Rupees`;
console.log(output2); //The Toal prie is 210 Rupees

// both output is same but when we use template literls it is shorter then the concatination version.