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