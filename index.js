var numbOfWon = 0;
var numbOfLost = 0;


for(var i = 1; i<= 5; i++)
{
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5"));

var randomNUmber = Math.floor(Math.random()*5) + 1;

if(guessNumber === randomNUmber){
    console.log("you have won");
    numbOfWon++;

}
else{
    console.log("You have lost. Random number was " + randomNUmber);
    numbOfLost++
}
}

document.write("Number of won = " + numbOfWon + "<br>");

document.write("Number of lost = " + numbOfLost + "<br>");


