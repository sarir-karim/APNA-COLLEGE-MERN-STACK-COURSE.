/**
 * loops in javascript: loops are initially used to iterate the a peace of code in javascript.
 * for loop
 * for loop is used to interate over a peace of code
 * example;
 */

// for(let i = 0; i <10; i++){
//     console.log(i);
// };

// //runnig loop in backward.


// for(let i=10; i >=1; i--){
//     console.log(i)
// }

// for (let i=30; i >=5; i=i-3){
//     console.log(i)
// }

//printing odd numbers using loops


for(let i=1; (i<=15);i=i+2){
    console.log(i)
}


//printing evern numbers from 2 to 10;

for (let i =2; i <=10; i = i+2){
    console.log(i)
}

//backward printing

for (let i = 10; i >=1; i = i-2){
    console.log(i)
}

//infinite loops. we must not write initinite loops because they will run inifinitly and browser will crash.

// for( let i = 0; ; i++){
//     console.log(i)
// }


for( let i = 0; i<=50; i = i+5){
    console.log(i)
}


// let number = 5;

// for (let i = number; i < number*10; i = i+number){
//     console.log(i)
// }

/// nested loopss

// for( let i = 0; i<=3; i++){
//     console.log(`outer loop ${i}`)
//     for(let j = 0; j<=3; j++){
//         console.log(j)
//     }
// }
