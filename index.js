/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18;
let age = 22;
if (age > 18) {
    console.log('true');

}
else {
    console.log('false');
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let varOne = 12;
const varTwo = 24;
if (varOne = varTwo * 0.5) {
    varOne = varOne * 2;
    console.log(varOne);
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let numberToString = '1999';
Number(numberToString);
console.log(numberToString);




//Task d: Write a function to multiply a*b 
function multiplyNumbers(a, b) {
    const product = (a * b);
    return product;
}
const newProduct = multiplyNumbers(4, 8);
console.log(newProduct);





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(humanAge) {
    let dogAge = humanAge * 7;
    return dogAge;
}
console.log(dogYears(23));


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
function dogFeeder(a, b) {
    let age = a;
    let weight = b;
    let food = 0;
    if (age > 0.167 && age < 0.333) {
        food = weight * 0.10;
    }
    else if (age > 0.333 && age < 0.583) {
        food = weight * 0.05;
    }
    else if (age > 0.583 && age < 1) {
        food = weight * 0.04;
    }
    else if (age >= 1 && weight <= 5) {
        food = weight * 0.05;
    }
    else if (age >= 1 && (weight >= 6 && weight <= 10)) {
        food = weight * 0.04;
    }
    else if (age >= 1 && (weight >= 11 && weight <= 15)) {
        food = weight * 0.03;
    }
    else if (age >= 1 && weight > 15) {
        food = weight * 0.02;
    }
    return food;
}

console.log(dogFeeder(0.39, 18));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperScissors(playerChoice) {
    let computer = Math.random();
    let winOrLose = 0;
    if (playerChoice === 'rock') {
        playerChoice = 0.33;
        if (playerChoice === 0.33 && (computer > 0.33 && computer < 0.67)) {
            winOrLose = 'You Lose!';
        }
        else if (playerChoice === computer) {
            winOrLose = 'Draw';
        }
        else {
            winOrLose = 'You Win!';
        }
    }
    if (playerChoice === 'paper') {
        playerChoice = 0.67;
        if (playerChoice === 0.67 && (computer > 0.67 && computer < 0.99)) {
            winOrLose = 'You Lose!';
        }
        else if (playerChoice === computer) {
            winOrLose = 'Draw';
        }
        else {
            winOrLose = 'You Win!';
        }

    }
    if (playerChoice === 'scissors') {
        playerChoice = 0.99;
        if (playerChoice === 0.99 && (computer > 0 && computer < 0.33)) {
            winOrLose = 'You Lose!';
        }
        else if (computer === playerChoice) {
            winOrLose = 'Draw';
        }
        else {
            winOrLose = 'You Win!';
        }
    }
    return winOrLose;
}

console.log(rockPaperScissors('rock'));



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmToMiles(kilometers) {
    return kilometers * 0.621371;
}
console.log(kmToMiles(45));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCm(feet) {
    return feet * 30.48;
}
console.log(feetToCm(20));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(bottles) {
    for (let i = bottles; i > 0; i--) {
        console.log(`${i} bottles of soda on the wall ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`)
    }
}
annoyingSong(8);




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function grading(percent) {
    let grade = 0;
    if (percent >= 90) {
        grade = 'A';
    }
    else if (percent >= 80 && percent <= 89) {
        grade = 'B';
    }
    else if (percent >= 70 && percent <= 79) {
        grade = 'C';
    }
    else if (percent >= 60 && percent <= 69) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }
    return grade;
}
console.log(grading(27));


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function vowelCounter (str){
    const vowelList = 'AEIOUaeiou';
    let numVowels = 0;
    for (let i = 0; i < str.length; i++){
        if (vowelList.indexOf(str[i]) !== -1){
            numVowels = numVowels + 1;
        }
    }
    return numVowels;
}
console.log(vowelCounter('Washington County'));



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


function rockPaperScissors2(playerChoice) {
    let computer = Math.random();
    let winOrLose = 0;
    if (playerChoice === 'rock') {
        playerChoice = 0.33;
        if (playerChoice === 0.33 && (computer > 0.33 && computer < 0.67)) {
            winOrLose = 'You Lose!';
        }
        else if (playerChoice === computer) {
            winOrLose = 'Draw';
        }
        else {
            winOrLose = 'You Win!';
        }
    }
    if (playerChoice === 'paper') {
        playerChoice = 0.67;
        if (playerChoice === 0.67 && (computer > 0.67 && computer < 0.99)) {
            winOrLose = 'You Lose!';
        }
        else if (playerChoice === computer) {
            winOrLose = 'Draw';
        }
        else {
            winOrLose = 'You Win!';
        }

    }
    if (playerChoice === 'scissors') {
        playerChoice = 0.99;
        if (playerChoice === 0.99 && (computer > 0 && computer < 0.33)) {
            winOrLose = 'You Lose!';
        }
        else if (computer === playerChoice) {
            winOrLose = 'Draw';
        }
        else {
            winOrLose = 'You Win!';
        }
    }
    return winOrLose;
}

console.log(rockPaperScissors2(prompt('Enter rock, paper, or scissors')));


