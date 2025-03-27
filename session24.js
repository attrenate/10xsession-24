// 1. Batman’s Night Patrol (If Statements & Boolean Conditions)
function batmanPatrol(signalOn){
    if(signalOn){
        console.log('Batman is on patrol!');
     } else {
         console.log('Gotham is quiet tonight');
    }
}
batmanPatrol(true);
batmanPatrol(false);

// 2. Sorting Avengers (Truthy & Falsy Values)
function availableAvengers(avengers){

    function availableAvengers(avengers) {
        return avengers.filter(Boolean);
    }
    
console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));  
}
availableAvengers();

// 3. Spider-Man’s Mask Check (Negation !)
function canRemoveMask(peopleAround){
    if(peopleAround === 0){
        console.log('Safe to remove mask!');
    } else {
        console.log('Keep the mask on!');
    }
}
canRemoveMask(0);  // Output: "Safe to remove mask!"
canRemoveMask(3);  // Output: "Keep the mask on!"


// 4. Naruto’s Chakra Levels (Ternary Operator)
function checkChakra(level) {
    return level > 80 ? "Full Power" 
         : level >= 50 ? "Still Fighting" 
         : "Need Ramen Recharge";
}

// Test cases
console.log(checkChakra(90)); // "Full Power"
console.log(checkChakra(60)); // "Still Fighting"
console.log(checkChakra(30)); // "Need Ramen Recharge"


// 5. Jedi Academy: Light vs. Dark Side (Comparison & Logical Operators)
function isJediMaster(angerLevel, wisdomLevel){
    if(angerLevel < 30 && wisdomLevel > 70){
        return true;
    } else {
        return false;
    }
}

console.log(isJediMaster(20, 80)); // true
console.log(isJediMaster(50, 90)); // false

// 6. One Piece Treasure Hunt (Boolean Coercion & Conditionals)
function isTreasureSpot(content){
    return Boolean(content);
}


console.log(isTreasureSpot("gold")); // true
console.log(isTreasureSpot(0)); // false


// 7. Doctor Strange’s Multiverse Passcode (Coercion & Quirky Comparisons)
function strangePasscode(code1, code2) {
    if (code1 == code2 && code1 !== code2) {  // true under coercion but not strict equality
        return true;
    }
    return false;
}

console.log(strangePasscode(null, undefined)); // true
console.log(strangePasscode("0", 0)); // true
console.log(strangePasscode(0, false)); // true
console.log(strangePasscode(0, 0)); // false



// 8. Loki’s Illusions (Object Comparison & Identity)
function isSameLoki(loki1, loki2){
    if(loki1 === loki2){
        return true;
    }
    return false;
    
}

 let lokiA = { name: "Loki" };
 let lokiB = { name: "Loki" };
 let lokiC = lokiA;
console.log(isSameLoki(lokiA, lokiB)); // false
console.log(isSameLoki(lokiA, lokiC)); // true


// 9. Schrödinger’s Cat (Advanced Boolean Logic & Edge Cases)
function schrodingerCat(state1, state2) {
    if ((!!state1 === !!state2)) {
        return true; 
    }
    return false;
}

console.log(schrodingerCat("alive", "dead")); // true
console.log(schrodingerCat(10, undefined)); // false
console.log(schrodingerCat(1, "yes")); // true
console.log(schrodingerCat("cat", 0)); // false


// Coding Challenge #1 
let markWeight = 95;
let markHeight = 188;

let johnWeight = 92;
let johnheight = 1.95;

let marksBMI = markWeight / markHeight * markHeight;
let johnBMI = johnWeight / johnheight * johnheight;

if(marksBMI > johnBMI){
    console.log('Mark has higher BMI.');
} else {
    console.log('John has higher BMI.');
}


// Coding Challenge #2
function BMI(){
    let markWeight = 95;
    let markHeight = 188;

    let johnWeight = 92;
    let johnheight = 1.95;

    let marksBMI = markWeight / markHeight * markHeight;
    let johnBMI = johnWeight / johnheight * johnheight;

    if(marksBMI > johnBMI){
        console.log(`Mark has higher BMI: ${marksBMI}`

        );
    } else {
        console.log(`John has higher BMI: ${johnBMI}`);
    }
}

BMI();


// Coding Challenge #3 
// Test data
let dolphinsData1 = [96, 108, 89];
let koalasData1 = [88, 91, 110];

let dolphinsDataBonus1 = [97, 112, 101];
let koalasDataBonus1 = [109, 95, 123];

let dolphinsDataBonus2 = [97, 112, 101];
let koalasDataBonus2 = [109, 95, 106];

// 1. Function to calculate average score
function calculateAverage(scoreArray) {
    let sum = 0;
    for (let score of scoreArray) {
        sum += score;
    }
    return sum / scoreArray.length;
}

// 2. Function to compare averages and determine the winner
function determineWinner(dolphinsScores, koalasScores) {
    let dolphinsAvg = calculateAverage(dolphinsScores);
    let koalasAvg = calculateAverage(koalasScores);

    if (dolphinsAvg > koalasAvg) {
        console.log("Dolphins win!");
    } else if (koalasAvg > dolphinsAvg) {
        console.log("Koalas win!");
    } else {
        console.log("It's a draw!");
    }
}

// 3. Bonus 1: Include requirement for a minimum score of 100
function determineWinnerWithMinimumScore(dolphinsScores, koalasScores) {
    let dolphinsAvg = calculateAverage(dolphinsScores);
    let koalasAvg = calculateAverage(koalasScores);

    if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
        console.log("Dolphins win with a minimum score of 100!");
    } else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
        console.log("Koalas win with a minimum score of 100!");
    } else {
        console.log("No winner, one team doesn't meet the minimum score of 100.");
    }
}

// 4. Bonus 2: Minimum score also applies to a draw
function determineWinnerWithDraw(dolphinsScores, koalasScores) {
    let dolphinsAvg = calculateAverage(dolphinsScores);
    let koalasAvg = calculateAverage(koalasScores);

    if (dolphinsAvg >= 100 && koalasAvg >= 100 && dolphinsAvg === koalasAvg) {
        console.log("It's a draw with both teams scoring at least 100!");
    } else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log("Dolphins win with a score of at least 100!");
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log("Koalas win with a score of at least 100!");
    } else {
        console.log("No winner, neither team meets the conditions.");
    }
}

// Testing with the test data
console.log("Testing Data 1:");
determineWinnerWithDraw(dolphinsData1, koalasData1);

console.log("\nTesting Bonus Data 1:");
determineWinnerWithDraw(dolphinsDataBonus1, koalasDataBonus1);

console.log("\nTesting Bonus Data 2:");
determineWinnerWithDraw(dolphinsDataBonus2, koalasDataBonus2);


// Coding Challenge #4 
function total(bill) {
    let tip; 
    if (bill < 50) {
        tip = 15 / 100; 
    } else {
        tip = 1 / 5; 
    }

    let b1ll = bill + (bill * tip); 
    console.log(`Total is: ${b1ll}`);
}

total(275); 



// Coding Challenge #5 Dynamic Calculator
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Error: Division by zero is not allowed!";
            } else {
                return a / b;
            }
        case "%":
            return a % b;
        case "**":
            return a ** b;
        default:
            return "Invalid operator";
    }
}

console.log(calculate(5, 3, '+'));


// Coding Challenge #5 Rock, Paper, Scissors
function playgame(player1, player2){
    if(player1 === 'rock' && player2 === 'paper'){
        console.log('Player2 won!');
    } else if(player1 === 'rock' && player2 === 'scissors'){
        console.log('player1 won!');
    } else if(player1 === player2){
        console.log("It's a tie!");
    } else if(player1 === 'scissors' && player2 === 'paper'){
        console.log('player1 won!');
    } else if(player1 === 'paper' && player2 === 'rock'){
        console.log('player1 won!');
    }
}

playgame('rock', 'paper')