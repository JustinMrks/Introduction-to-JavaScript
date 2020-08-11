/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 19;

if(votingAge >= 18){
    console.log("true")
}
else{
    console.log("false")
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let max = "puppy";
const older = "dog";
max = older;
console.log("Max is a", max);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year = "1999";
console.log(Number(year));




//Task d: Write a function to multiply a*b 

function math(a,b){
    console.log(a*b);
}

math(7,3);



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function dogYears(age){
    console.log(age*7)
}

dogYears(21);

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  


function results(final){
    console.log("Your dog needs",final,"lbs of food")
}

function adult(weight){
    if (weight <= 5){
        results(weight * .05);
    }
    else if (weight <= 10){
        results(weight * .04);
    }
    else if (weight <=15){
        results(weight * .03);
    }
    else {
        results(weight * .02);
    }
}

function pup(age,weight){
    if (age >= .166666 && age <= .3333333){
        results(weight * .1);
    }
    if (age > .3333333 && age <=.583333){
        results(weight * .05);
    }
    else {
        results(weight * .04);
    }
}

function foodCalc(age,weight){
    if (age < 1) {
        pup(age,weight);
    }
    else{
        adult(weight);
    }
}

foodCalc(4,105);



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let computer = Math.random();
if (computer < .34){
    computer = "rock";
} 
else if (computer < .67){
    computer = "paper";
}
else {
    computer = "scissors"
}

function play (user,computer){
    if (user === computer){
        console.log("Its a tie");
    }
    else if (user === "rock"){
        if (computer === "paper"){
            console.log("paper wins!");
        } 
        else {
            console.log("rock wins!");
        }
    }
    else if (user === "paper"){
        if (computer === "scissors"){
            console.log("scissors win!");
        }
        else {
            console.log("paper wins!");
        }
    }
    else if (user === "scissors"){
        if (computer === "rock"){
            console.log("rock wins!");
        }
        else {
            console.log("scissors win!");
        }
    }
}

play ("scissors",computer);

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmtomi(km){
    console.log(km/1.609);
}

kmtomi(10)

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function fttocm(ft){
    console.log(ft*30.48);
}

fttocm(4.6)



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
for (let i = 99; i > 0;)  {
    console.log(String(i),"bottles of beer on the wall",String(i),"bottles of beer, take one down pass it around",String(i-1),"bottles of beer on the wall");
    i = i-1;
}  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalc(percent){
    if (percent >= 90){
        console.log("Your grade is an A");
    }
    else if (percent >= 80){
        console.log("Your grade is a B");
    }
    else if (percent >= 70){
        console.log("Your grade is a C");
    }
    else if (percent >= 60){
        console.log("Your grade is a D");
    }
    else{
        console.log("Your grade is an F");
    }
}

gradeCalc(73)
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


computer = Math.random();

user = (prompt("rock paper or scissors?"))

if (computer < .34){
    computer = "rock";
} 
else if (computer < .67){
    computer = "paper";
}
else {
    computer = "scissors"
}

function play (user,computer){
    if (user === computer){
        console.log("Its a tie");
    }
    else if (user === "rock"){
        if (computer === "paper"){
            console.log("paper wins!");
        } 
        else {
            console.log("rock wins!");
        }
    }
    else if (user === "paper"){
        if (computer === "scissors"){
            console.log("scissors win!");
        }
        else {
            console.log("paper wins!");
        }
    }
    else if (user === "scissors"){
        if (computer === "rock"){
            console.log("rock wins!");
        }
        else {
            console.log("scissors win!");
        }
    }
}

play (user,computer);


