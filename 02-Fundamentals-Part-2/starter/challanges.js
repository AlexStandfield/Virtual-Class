'use strict';
// Coding Challanges for JavaScript Fundamentals - Part 2




/*
CODING CHALLENGE #1 (FUNCTIONS)
// 1.
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
// 2.
const dolphinsScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(65, 54, 49);
console.log(dolphinsScore, koalasScore);
const dolphinsScore2 = calcAverage(85, 54, 41);
const koalasScore2 = calcAverage(23, 34, 27);
console.log(dolphinsScore2, koalasScore2);
// 3.
const checkWinner = function (dolphinsAvg, koalasAvg) {
    if (dolphinsAvg >= koalasAvg * 2) {
        return `Dolphins win with an average score of ${dolphinsAvg}!`;
    } else if (koalasAvg >= dolphinsAvg * 2) {
        return `Koalas win with an average score of ${koalasAvg}!`;
    } else {
        return `Nobody Wins`
    }
}
// 4.
console.log(checkWinner(dolphinsScore, koalasScore));
console.log(checkWinner(dolphinsScore2, koalasScore2));
*/




/*
CODING CHALLENGE #2(ARRAYS)

// 1. // Likes to give arrays plural names because there are multiple values
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(calcTip(100)); // returns 15
// 2.
const bills = [125, 555, 44];
// 3.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
// 4. BONUS
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/




/*
CODING CHALLANGE #3 (OBJECTS)
// 1.
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    // 2.
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    // 2.
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
// 3.
mark.calcBMI();
john.calcBMI();
console.log(`${john.fullName}'s BMI (${john.bmi}) ${john.bmi > mark.bmi ? 'is higher' : 'is lower'} than ${mark.fullName}'s BMI (${mark.bmi})`);
// Alternate Solution
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
*/




/*
CODING CHALLENGE #4
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
// 1.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 2.
const tips = [];
const totals = [];
// 3.
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip([bills[i]]));
    totals.push(bills[i] + tips[i]);

    // Alternate Solution

    // const tip = calcTip(bills[i]);
    // tips.push(tip);
    // totals.push(tip + bills[i]);
}
console.log(tips, totals);
// 4. BONUS
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));
*/
