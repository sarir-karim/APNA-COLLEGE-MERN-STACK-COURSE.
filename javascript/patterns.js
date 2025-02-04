// /*
// Practicing Patterns using javascript
// 1: square pattern
// ****
// ****
// ****
// */

// /*
// rows   j1 n1 check star*
// 1       0<4  true  ****
// 2       1<4  true  ****
// 3       2<4  true  ****
// 4       3<4  true  ****
// 5       5<4 false  loop stops
// */

// let n1 = 4;
// let i1; let j1;

// for(i1 = 0; i1<n1; i1++){
//     let row = "";
//     for(j1 = 0; j1<n1; j1++){
//         row+="*";
//     }
//     console.log(row)
// }

// console.log("\n triangle pattern")
// console.log("\n")

// // this will be a triangle pattern;
// /*
// *
// **
// ***
// ****
// */

// /*
// rows     i 1  star*
// 1        0+1 = 1  *
// 2        1+1 = 2  **
// 3        2+1 = 2  ***
// 4        3+1 = 4  ****
// */

// let n2= 4;
// let i2, j2;

// for(i2 = 0; i2<n2; i2++){
//     let row2 = ""
//     for(j2 =0; j2<i2+1; j2++){
//         row2+="*"
//     }
//     console.log(row2)
// }

// console.log("\n reverse triangle pattern")
// console.log("\n")

// // this will be a reverse triangle
// /*
// ****
// ***
// **
// *

// */

// /*
// rows     n3 i  star*
// 1        4-0 = 4  ****
// 2        4-1=  3  ***
// 3        4-2 = 2; **
// 4        4-3 = 1  *
// */

// let n3= 4;
// let i3, j3;

// for(i3=0; i3<n3; i3++){
//     let row3 = "";
//     for(j3 = 0; j3<n3-i3; j3++){
//         row3+="*";
//     }
//     console.log(row3)
// }

// // printing numbers in square pattern

// console.log("\n number squrea pattern")

// /*
// 1234
// 1234
// 1234
// 1234

// */

// let n4 = 4;
// let i4,j4;

// for(i4=0; i4<n4; i4++){
//     let row4 = "";
//     for(j4 = 1; j4<=n4; j4++){
//         row4+=j4
//     }
//     console.log(row4)
// }

// console.log("\n characters squrea pattern")

// /*
// characters in square formate
// abcd
// abcd
// abcd
// */

// let n5 = 4;
// let i5,j5;
// let ch = 65;

// for(i5= 0; i5<n5; i5++){
//     let row5 = ""
//     for(j5=0; j5<n5; j5++){
//         row5+= String.fromCharCode(ch);
//         ch++;
//     }
//     console.log(row5)
// }

// //combine desgin of triangle and reverse triangle
// /*
// *
// * *
// * * *
// * * * *
// * * * *
// * * *
// * *
// *

// */

// let n6 = 4;
// let i6,j6;

// for(i6=0; i6<n6; i6++){
//     let result = ""
//     for(j6 = 0; j6<i6+1; j6++){
//         result+="* ";
//     }
//     console.log(result)
// }
// for(i6=0; i6<1; i6++){
//     let result = "";
//     for(j6 = 0; j6<5; j6++){
//         result+="* "
//     }
//     console.log(result)
// }

// for(i6 = 0; i6<n6; i6++){
//     let result = "";
//     for(j6= 0; j6<n6-i6; j6++){
//         result+="* "
//     }
//     console.log(result)
// }

//printing starts in a butterfly form

/*
*      *
**    **
***  ***
********
********
***  ***
**    **
*      *


*/

let n = 4;
let i, j;

for (i = 0; i < n; i++) {
  let result = "";
  for (j = 0; j < i + 1; j++) {
    result += "*";
  }
  for (j = 1; j < 2 * n - i-i-1; j++) {
    result += " ";
  }
  for (j = 0; j < i + 1; j++) {
    result += "*";
  }

  console.log(result);
}

for (i = 0; i < n; i++) {
  let result = "";
  for (j = 0; j < n - i; j++) {
    result += "*";
  }
  for (j = 1; j < 2 * i + 1; j++) {
    result += " ";
  }
  for (j = 0; j < n - i; j++) {
    result += "*";
  }
  console.log(result);
}
