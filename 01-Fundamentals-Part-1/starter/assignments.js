// VALUES AND VARIABLES
const country = 'The United States of America';
const continent = 'North America';
let population = 328;
const avgPopulation = 33;

// console.log(country);
// console.log(continent);
// console.log(population);




// DATA TYPES
const isIsland = false;
let language;

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)




// LET, CONST AND VAR
language = 'English';
// Changed country, continent and isIsland to const instead of let
// country = 'Canada'; // will receive on error since country was defined with const




// BASIC OPERATORS
// console.log(population / 2);
// 1. 164
// console.log(population + 1);
// 2. 329
// console.log(population > 6);
// 3. Yes
// console.log(population > 33);
// 4. No
const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
// console.log(description);




// STRINGS AND TEMPLATE LITERALS
// 1.
const descriptionNew = `${country} is in ${continent}, and its ${population} people speak ${language}`;
// console.log(descriptionNew);




// TAKING DECISIONS: IF / ELSE STATEMENTS
// population = 13;
// population = 130;
// population = 328;
// if (population > avgPopulation) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${avgPopulation - population} below average.`);
// }




// TYPE CONVERSION AND COERCION
// 1.
//      '9' - '5'; // -> 4
//      '19' - '13' + '17'; // -> '617'
//      '19' - '13' + 17; // -> 23
//      '123' < 53; // -> False
//      5 + 6 + '4' + 9 - 4 - 2; //  -> 1143
// 2.
// Got all of them Right




// EQUALITY OPERATORS: == VS. ===
// 1. Declare Variable
// const numNeighbors = Number(prompt(`How many neighbor countries does your country have?`)); // 7. Convert into a number

// 2. Create if statement
// if (numNeighbors === 1) { // 6. Change == to ===
//     console.log(`Only 1 border!`);
// } else if (numNeighbors > 1) {
//     console.log(`More than 1 border`); // 3. else-if block
// } else {
//     console.log(`No borders`); // 4. else block
// }
// 5. Test Code
//      1 returs Only 1 Border!
//      0 returns No Borders
// 6. Test Code after change
//      1 returns No Borders (Why?)
// Because the input we put in has a type of String, so it is loosely equal but not strictly equal
// 7. Test code after change
//      1 returns Only 1 Border!
// 8. Reflect
// We should always use === in these situations so we know we are dealing with the same type of data. If later on we tried to do something with that number (like addition) it would simply concatenate the number at the end of the string.




// LOGICAL OPERATORS
// 1. Comment out previous code
// 2. Speaks English, < 50 million people, not an island
// 3.
// if (language === 'English' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`) // 4.
// } else {
//     console.log(`${country} does not meet your criteria :(`)
// }
// 5. Change variables until they will meet the criteria




// THE SWITCH STATEMENT
// 1.
// switch (language) {
//     case 'Chinese':
//     case 'Mandarin':
//         console.log(`MOST number of native speakers`);
//         break;
//     case 'Spanish':
//         console.log(`2nd place in number of native speakers`);
//         break;
//     case 'English':
//         console.log(`3rd place`);
//         break;
//     case 'Hindi':
//         console.log(`Number 4`);
//         break;
//     case 'Arabic':
//         console.log(`5th most spoken language`);
//         break;
//     default:
//         console.log(`Great language too :D`);
// }




// THE CONDITIONAL (TERNARY) OPERATOR
// 1. Write the Ternary Operator
// 2. Change population to get both results
// population = 13
// population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);
// ALTERNATIVE SOLUTION
// console.log(
//     `${country}'s population is ${population > 33 ? 'above' :
//     'below'} average`,
//     );