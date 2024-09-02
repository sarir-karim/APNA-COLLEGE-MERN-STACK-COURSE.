// NaN is a javascript property when is used to represent the Not a Number property;
/*
For example when we try to divide 0/0 in mathecatics then it doesn't give us the any valid number so for that reason javascript shows such values as NaN
0/0 = NaN;
NaN has actually a number type but the values it represents is NaN
*/

let a = 0
let b = 0;

let divide = 0/0;
console.log(divide) // NaN

console.log(typeof NaN) // number

let nan = NaN;

let add = nan + 1;
console.log(add)// NaN;
let multiply  = nan*1;
console.log(multiply) // NaN
let subtract = NaN -4;
console.log(subtract) // NaN

// whatever operation we try to perform with NaN is always NaN;
