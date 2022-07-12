/*
VALUES AND VARIABLES

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Alex';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'Jonas';
let PI = 4.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher'; // this is more descriptive and preferred then the code below

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);
*/




/*
DATA TYPES

let javaScriptIsFun = true; // Creates the box
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!'; // Takes the Data out of the box and puts a new one in
console.log(typeof javaScriptIsFun);

let year; // Declaring an empty variable will automatically hold the value of Undefined
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);

console.log(typeof null) // Will return as an object
*/




/*
LET, CONST AND VAR

let age = 30;
age = 31;

const birthYear = 1991; // Cannot mutate a variable assigned by const
// birthYear = 1990;

// const job; // Cannot assign a const with an empty variable

var job = 'programmer'; // Avoid using var
job = 'teacher';

lastName = 'Standfield';
console.log(lastName);
*/




/*
BASIC OPERATORS

// Math Operators
const now = 2037
const ageAlex = now - 1998;
const ageMontana = now - 1999;
console.log(ageAlex, ageMontana);

console.log(ageAlex * 2, ageAlex / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 -> 2 * 2 * 2

const firstName = 'Alex';
const lastName = 'Standfield';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // adds 1
x--; // subtracts 1
x--;
console.log(x);

// Comparison Operators
console.log(ageAlex > ageMontana); // >, <, >=, <=
console.log(ageMontana >= 18);

const isFullAge = ageMontana >= 18;

console.log(now - 1998 > now - 1999);
*/




/*
OPERATOR PRECEDENCE

const now = 2037
const ageAlex = now - 1998;
const ageMontana = now - 1999;

console.log(now - 1998 > now - 1999);

let x, y;
x = y = 25 - 10 - 5; // Math moves from left to right (x = y = 10) Assignment moves right to left that is why x = 10 instead of undefined
console.log(x, y);

const averageAge = (ageAlex + ageMontana) / 2;
console.log(ageAlex, ageMontana, averageAge);
*/




/*
STRINGS AND TEMPLATE LITERALS

const firstName = 'Alex';
const job = 'Computer Programmer';
const birthYear = 1998;
const year = 2037;

const alex = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old' + ' ' + job + '!';
console.log(alex)

const alexNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; // Much easier, preferred method
console.log(alexNew);

console.log(`Just a regular string...`); // Some developers always use `` when writing strings

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
mulitple
lines`); // use template literals when needing multiple lined strings
*/




/*
TAKING DECISIONS: IF / ELSE STATEMENTS

const age = 15;

if (age >= 18) {
    console.log('Montana can start her drivers licencse test 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Montana is too young, Wait another ${yearsLeft} years :)`);
} // called a control structure, allows us to have more control over how the code is executed

const birthYear = 1998;

let century;

if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)
*/




/*
TYPE CONVERSION AND COERCION

// TYPE CONVERSION
let inputYear = '1998';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Alex'));
console.log(typeof NaN);

console.log(String(23), 23);

// TYPE COERCION
console.log('I am ' + 23 + ' years old') // the plus operator triggers a coercion to a string, if a number and a string are being added it will be concatenated as a string
console.log('23' - '10' - 3); // the minus operators triggers a coercion of a string to a number
console.log('23' * '2');
console.log('23' / '2') // the multiplication and division operator also trigger a coercion of a string into a number
console.log('23' > '18'); // this will also convert the strings into a number

let n = '1' + 1;
n = n - 1;
console.log(n);
*/




/*
TRUTHY AND FALSY VALUES
*/
// Deleted




/*
EQUALITY OPERATORS: == VS. ===
*/
// Deleted




/*
BOOLEAN LOGIC
*/
// Deleted




/*
LOGICAL OPERATORS
*/
// Deleted




/*
THE SWITCH STATEMENT

const day = 'monday';

switch (day) {
    case 'monday': // day === `monday`
        console.log(`Work`);
        console.log(`Hang out with Montana`);
        break;
    case 'tuesday':
        console.log(`Work`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Hang out with Montana`);
        break;
    case 'friday':
        console.log(`Finish week`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend :D`);
        break;
    default:
        console.log(`Not a valid day`);
} // becoming less and less used but there is still a place for it

if (day === 'monday') {
    console.log(`Plan out week`);
    console.log(`Go to store`);
} else if (day === 'tuesday') {
    console.log(`Work`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Hang out with Montana`);
} else if (day === 'friday') {
    console.log(`Finish week`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend :D`);
} else {
    console.log(`Not a valid day`);
} // very repetitive code, Switch statement simplifies this problem
*/




/*
STATEMENTS AND EXPRESSIONS

// Expressions
3 + 4
1998
true && false ** !false

// Statements
if (23 > 10) {
    const str = '23 is bigger'; // the string itself is an expression, the whole line of code is a statement
}

const me = 'Alex'
console.log(`I'm ${2037 - 1998} years old ${me}`);
*/




/*
THE CONDITIONAL (TERNARY) OPERATOR

const age = 22
// age >= 18 ? console.log(`I like to drink juice 🧃`) : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? 'Juice 🧃' : 'Water 💧';

console.log(drink);

let drink2
if (age >= 18) {
    drink2 = 'Juice 🧃';
} else {
    drink2 = 'Water 💧';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Juice 🧃' : 'Water 💧'}`);
// Normal statements cannot be executed in this sceneriio
// Not thought as a replacement for if else statements
*/