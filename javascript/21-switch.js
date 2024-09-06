// switch is also used to check the value of varible with a fiexed value


let color = "red"

switch(color){
    case "red":
        console.log("stop");
        break;
    case "Yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go")
    default:
        console.log("No lights")
}

/*
Practice Question
use a swtich statment to print a day of the week using a number varible 'day' with values 1 to 7;
*/ 


let day = 1

switch(day){
    case 1:
        console.log("Today is Sunday - sleep well");
        break;
    case 2: 
        console.log("Today is Monday - Go to work");
        break;
    case 3:
        console.log("Today is Tuesday - Go to work");
        break;
    case 4: 
        console.log("Today is wednesday - Go to work");
        break;
    case 5: 
        console.log("Today is Thursday - Go to work");
        break;
    case 6: 
        console.log("Today is friday - go to work");
        break;
    case 7: 
        console.log("Today is Saturday - Rest Day");
        break;
    default: 
        console.log("Please select day between 1 and 7")
}