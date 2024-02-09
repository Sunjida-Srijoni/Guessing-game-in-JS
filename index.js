var guessNumber = parseInt(prompt("Enter a number from 1 to 5"));

var randomNUmber = Math.floor(Math.random()*5) + 1;

if(guessNumber === randomNUmber){
    console.log("you have won");

}
else{
    console.log("You have lost. Random number was " + randomNUmber);
}