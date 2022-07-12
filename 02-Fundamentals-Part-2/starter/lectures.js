'use strict';
// JavaScript Fundamentals - Part 2




/*
ACTIVATING STRICT MODE

'use strict'; // activates strict mode for the entire script

let hasDriversLicense = false;
const passTest = true; // remember default to use const

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = 'Audio'; // JavaScript reserving this word for potential use in the future
// const private = 534;
*/




/*
FUNCTIONS

function logger() {
    console.log(`My name is Alex`);
}

logger(); // invoking the function, calling the function, or running the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // the called function holds the value of juice, need to capture that value, captures the value for later use
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // does not capture the value but simply logs the result

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/




/*
FUNCTION DECLARATIONS VS. EXPRESSIONS

function calcAge1(birthYear) { // Function Declaration
    return 2037 - birthYear;
}

const age1 = calcAge1(1998); // calling, invoking or running the function
console.log(age1);

const calcAge2 = function (birthYear) { // Function Expression
    return 2037 - birthYear;
}

const age2 = calcAge2(1999);
console.log(age1, age2);
*/




/*
ARROW FUNCTIONS

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years!`;
}
console.log(yearsUntilRetirement(1998, 'Alex'));
console.log(yearsUntilRetirement(1999, 'Montana'));
*/




/*
FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));
*/




/*
REVIEWING FUNCTIONS

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired! 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1998, 'Alex'));
console.log(yearsUntilRetirement(1999, 'Montana'));
*/




/*
INTRODUCTION TO ARRAYS

const friend1 = 'Michael';
const friend2 = 'Austin';
const friend3 = 'Caleb'; // this is how we would do it without arrays

const friends = ['Michael', 'Austin', 'Caleb']; // best practice for creating arrays
console.log(friends);

const y = new Array(1998, 1999, 2004, 2021); // alternative way to create arrays

console.log(friends[0]); // arrays have a 0 based index, so in the first position the index value will be 0
console.log(friends[2]);

console.log(friends.length); // will give us the amount of elements in an array (not 0 based)
console.log(friends[friends.length - 1]); // will give us the last element in an array

friends[2] = 'Cal'; // array can still be mutated even if it's created with const
console.log(friends);
// friends = ['Bob', 'Alice'] // we cannot however change the entire array

const firstName = 'Alex'
const alex = [firstName, 'Standfield', 2037 - 1998, 'programmer', friends];
console.log(alex);
console.log(alex.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1998, 1999, 2004, 2010, 2018];

calcAge(years); // this will not work because the function expects a single value not an array

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); // we usually want to store information from an array into a new array so this is not best practice unless the situation calls for it

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge([years[years.length - 1]])]; // the array expects an expression so as long as it is returning a value it will work
console.log(ages);
*/




/*
BASIC ARRAY OPERATIONS (METHODS)

const friends = ['Michael', 'Austin', 'Caleb'];

// Add Elements
const newLength = friends.push('Micah');
console.log(friends);
console.log(newLength);

friends.unshift('Montana');
console.log(friends);

// Remove Elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Austin')); // will return the index position of 'Austin'
console.log(friends.indexOf('Bob')); // retuns - 1

friends.push(23);
console.log(friends.includes('Austin')); // will return TRUE
console.log(friends.includes('Bob')); // will return FALSE
console.log(friends.includes(23)); // will return TRUE

if (friends.includes('Michael')) {
    console.log(`You have a friend called Michael.`)
}
*/




/*
INTRODUCTION TO OBJECTS

const alex = {
    firstName: 'Alex',
    lastName: 'Standfield',
    age: 2037 - 1998,
    job: 'programmer',
    friends: ['Michael', 'Austin', 'Caleb']
};
*/




/*
DOT VS. BRACKET NOTATION

const alex = {
    firstName: 'Alex',
    lastName: 'Standfield',
    age: 2037 - 1998,
    job: 'Programmer',
    friends: ['Michael', 'Austin', 'Caleb']
};
// console.log(alex);

// Dot Noatation
console.log(alex.lastName);
// Bracket Notation
console.log(alex['lastName']);

const nameKey = 'Name';
console.log(alex['first' + nameKey]);
console.log(alex['last' + nameKey]);

// console.log(alex.'last' + nameKey); // This will not work, this is why we need bracket notation

const interestedIn = prompt('What do you want to know about Alex? Choose between firstName, lastName, age, job, and friends.');

if (alex[interestedIn]) {
    console.log(alex[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends.`)
}

alex.location = 'The United States of America';
alex['twitter'] = '@AlexStandfield';
console.log(alex);

// Challenge
// 'Alex has 3 friends, and his best friend is called Michael'
console.log(`${alex.firstName} has ${alex.friends.length} friends, and his best friend is called ${alex.friends[0]}`);
*/




/*
OBJECT METHODS

const alex = {
    firstName: 'Alex',
    lastName: 'Standfield',
    birthYear: 1998,
    job: 'programmer',
    friends: ['Michael', 'Austin', 'Caleb'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear
    // } // we would have to pass in the birthYear as an argument for this method

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // } // now we don't have to pass it in as an argument but it will grab the value from the alex object

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    }, // this is the most efficient solution because it will grab the birthYear from the alex object and store now store the age as a Key Value Pair in the object that can be used later

    // driversLicense: function () {
    //     if (this.hasDriversLicense) {
    //         return `has a driver's license`
    //         // this.driversLicenseString = `has a drivers license`;
    //         // return this.driversLicenseString;
    //     } else {
    //         return `has no driver's license`
    //         // this.driversLicenseString = `has no drivers license`;
    //         // return this.driversLicenseString
    //     }
    // },

    // getSummary: function () {
    //     this.driversLicense();
    //     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and ${this.driversLicense()}`;
    // }, // this was my way, not a good/effective way

    getSummary2: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    } // this was his way, goo and effective, TERNARY STATEMENT
};

console.log(alex.calcAge());
console.log(alex.age);
// console.log(alex['calcAge'](1998));

// Challenge
// 'Alex is a 39-year old programmer, and he has a/no drivers license'
// console.log(alex.getSummary());
console.log(alex.getSummary2());
*/




/*
ITERATION: THE FOR LOOP

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️'); // violates the don't repeat yourself principle

// 1st part sets the initial value (let rep = 1;)
// 2nd part sets the condition that will be checked before every iteration, the for loop will keep running while the condition is TRUE (re <= 10;)
// 3rd part sets the amount that it will increase by after each iteration   (rep++)

for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/




/*
LOOPING ARRAYS, BREAKING AND CONTINUING

const alex = [
    'Alex',
    'Standfield',
    2037 - 1998,
    'programmer',
    ['Michael', 'Austin', 'Caleb'],
    true
];

const types = [];

// console.log(alex[0]);
// console.log(alex[1]);
// ...
// console.log(alex[4]);

for (let i = 0; i < alex.length; i++) {
    // Reading from alex array
    console.log(alex[i], typeof alex[i]);

    // Filling types array
    // types[i] = typeof alex[i];
    types.push(typeof alex[i]); // This way is a little bit cleaner
}

console.log(types);

const years = [1998, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log(`--- ONLY STRINGS ---`)
for (let i = 0; i < alex.length; i++) {
    if (typeof alex[i] !== 'string') continue;

    console.log(alex[i], typeof alex[i]);
}

console.log(` --- BREAK WITH NUMBER ---`)
for (let i = 0; i < alex.length; i++) {
    if (typeof alex[i] === 'number') break;

    console.log(alex[i], typeof alex[i]);
}
*/




/*
LOOPING BACKWARDS AND LOOPS IN LOOPS

const alex = [
    'Alex',
    'Standfield',
    2037 - 1998,
    'programmer',
    ['Michael', 'Austin', 'Caleb']
];

// 0, 1, ..., 4 Regular For Loop

// 4, 3, ..., 0 Backwards For Loop
for (let i = alex.length - 1; i >= 0; i--) {
    console.log(i, alex[i]);
}

// Loops in Loops
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- Starting Exercise ${exercise} ---`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(` Exercise ${exercise}: Lifting Weight! 🏋️‍♀️ Repetition ${rep}`);
    }
}
*/




/*
THE WHILE LOOP

// Regular Loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// While Loop
let rep = 1; // Initial Value
while (rep <= 10) { // Condition
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++; // Amount Increase/Decrease
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...')
}
*/




// End of JavaScript Fundamentals - Part 2