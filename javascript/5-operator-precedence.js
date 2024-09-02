// Operator percedence is the general order of solving an expression
/*
Like in mathematics we use BODMAS rule which simpy says that first we can slolve the Brackets then Power Operation then division then Multiplication then addision and subtration.
---------------------
1- ()Bracket
2- ** Power Operator 
3- / Division
4- % modulo (remander)
5- * Multiplication
6- + Addision
7- - Subtration
---------------------
*/ 

let a = (5 +2) / 7 + 1 * 2;  // (7)/7+1*2 = 1+2 = 3
console.log(a);  // 3

let b = (2+1)*3  //3*3 = 9
console.log(b);

let c= 3/1+2**2;  //3/1+4 = 3+4 = 7
console.log(c);

let d = 4+1*6/2  // 4+1*3 = 4+3 = 7
console.log(d)