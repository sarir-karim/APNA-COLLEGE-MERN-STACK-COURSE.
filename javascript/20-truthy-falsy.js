//In javascript every thing has a truthy  or flasly values
// This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context 

// falsy values (false, 0 -0, on(Bitint value), "", null, undefined, NaN)
//truthy values Everything else


//examples
if(true){
    console.log("This is ture") //true
}else{
    console.log("This is false ")
}


if(false){
    console.log("This is true")
}else{
    console.log("this is false") //flase
}

if(1){
    console.log("this is ture") //ture
}else{
    console.log("this is false")
}
if(0){
    console.log("this is ture")
}else{
    console.log("this is false") //flase
}


if(""){
    console.log("this is ture")
}else{
    console.log("this is false") //flase
}

if("sarir"){
    console.log("this is ture") //true
}else{
    console.log("this is false") 
}


if(null){
    console.log("this is ture") 
}else{
    console.log("this is false") //flase
}

if(undefined){
    console.log("this is ture") 
}else{
    console.log("this is false") //false
}

if(NaN){
    console.log("this is ture") 
}else{
    console.log("this is false")  //flase
}