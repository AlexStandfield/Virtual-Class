/*
CODING CHALLENGE #1
// 1.
const massMarkOne = 78;
const heightMarkOne = 1.69;
const massJohnOne = 92;
const heightJohnOne = 1.95;

const massMarkTwo = 95;
const heightMarkTwo = 1.88;
const massJohnTwo = 85;
const heightJohnTwo = 1.76
// 2.
const MarkOneBMI = massMarkOne / heightMarkOne ** 2;
const JohnOneBMI = massJohnOne / heightJohnOne ** 2;
const MarkTwoBMI = massMarkTwo / heightMarkTwo ** 2;
const JohnTwoBMI = massJohnTwo / heightJohnTwo ** 2;
// console.log(MarkOneBMI, JohnOneBMI);
// Mark One's BMI = 27.309968138370508
// John One's BMI = 24.194608809993426
// console.log(MarkTwoBMI, JohnTwoBMI);
// Mark Two's BMI = 26.87867813490267
// John Two's BMI = 27.44059917355372
// 3.
const markOneHigherBMI = MarkOneBMI > JohnOneBMI;
// console.log(markOneHigherBMI);
// Is True
const markTwoHigherBMI = MarkTwoBMI > JohnTwoBMI;
// console.log(markTwoHigherBMI);
//Is False
*/




/*
CODING CHALLENGE #2
// 1.
if (MarkOneBMI > JohnOneBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!")
}
// returns Mark's BMI is higher than John's!
// 2.
if (MarkTwoBMI > JohnTwoBMI) {
    console.log(`Mark's BMI (${MarkTwoBMI}) is higher than John's (${JohnTwoBMI})!`);
} else {
    console.log(`John's BMI (${JohnTwoBMI}) is higher than Mark's (${MarkTwoBMI})!`);
}
// returns John's BMI (27.44059917355372) is higher than Mark's (26.87867813490267)!
*/




/*
CODING CHALLENGE #3
// 1.
let avgScoreDolphins = (96 + 108 + 89) / 3;
let avgscoreKoalas = (88 + 91 + 110) / 3;
//2.
if (avgScoreDolphins > avgscoreKoalas) {
    console.log(`Dolphins Win! 🏆`)
} else if (avgscoreKoalas > avgScoreDolphins) {
    console.log(`Koalas Win! 🏆`)
} else if (avgScoreDolphins === avgscoreKoalas) {
    console.log(`It's a Tie!`)
} // Could've also used an else block
// 3. (Bonus 1)
avgScoreDolphins = (97 + 112 + 101) / 3;
avgscoreKoalas = (109 + 95 + 123) / 3;
const minimumScore = 100;
if (avgScoreDolphins >= minimumScore && avgScoreDolphins > avgscoreKoalas) {
    console.log(`Dolphins Win! 🏆`)
} else if (avgscoreKoalas >= minimumScore && avgscoreKoalas > avgScoreDolphins) {
    console.log(`Koalas Win! 🏆`)
} else if (avgScoreDolphins <= minimumScore && avgscoreKoalas <= minimumScore) {
    console.log(`There is no Winner.`)
} else if (avgScoreDolphins === avgscoreKoalas) {
    console.log(`It's a Tie!`)
}
// 4. (Bonus 2)
avgScoreDolphins = (97 + 112 + 101) / 3;
avgscoreKoalas = (109 + 95 + 106) / 3;
if (avgScoreDolphins >= minimumScore && avgScoreDolphins > avgscoreKoalas) {
    console.log(`Dolphins Win! 🏆`)
} else if (avgscoreKoalas >= minimumScore && avgscoreKoalas > avgScoreDolphins) {
    console.log(`Koalas Win! 🏆`)
} else if (avgScoreDolphins >= minimumScore && avgScoreDolphins === avgscoreKoalas) {
    console.log(`It's a Tie!`)
} else if (avgScoreDolphins <= minimumScore && avgscoreKoalas <= minimumScore) {
    console.log(`There is no Winner.`)
}
*/




/*
CODING CHALLENGE #4
// 1.
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// 2.
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
// Test Data
// bill = 275 -> tip = 41.25
// bill = 40 -> tip = 8
// bill = 430 -> tip = 86
*/