'use strict';
// Assignments for JavaScript Fundamentals - Part 2




// FUNCTIONS
// 1.
// function describeCountry(country, population, capitalCity) {
//     const countryDescribed = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
//     return countryDescribed;
// }
// 2.
// const denmark = describeCountry('Denmark', 6, 'Copenhagen');
// const phillipines = describeCountry('The Phillipines', 108, 'Manila');
// const usa = describeCountry('The United States of America', 328, 'Washington D.C.');
// console.log(denmark);
// console.log(phillipines);
// console.log(usa);




// FUNCTION DECLARATIONS VS EXPRESSIONS
// 1.
function percentageOfWorld1(population) {
    return population / 7900 * 100; // 2.
}
// 3.
// const usaWorldPop = percentageOfWorld1(328);
// const denmarkWorldPop = percentageOfWorld1(6);
// const phillipinesWorldPop = percentageOfWorld1(108);
// console.log(usaWorldPop);
// console.log(denmarkWorldPop);
// console.log(phillipinesWorldPop);
// 4.
// const percentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// }
// const englandWorldPop = percentageOfWorld2(56);
// const chinaWorldPop = percentageOfWorld2(1441);
// const franceWorldPop = percentageOfWorld2(67);
// console.log(englandWorldPop);
// console.log(chinaWorldPop);
// console.log(franceWorldPop);





// ARROW FUNCTIONS
// 1.
// const percentageOfWorld3 = population => population / 7900 * 100;
// const englandWorldPop2 = percentageOfWorld3(56);
// const chinaWorldPop2 = percentageOfWorld3(1441);
// const franceWorldPop2 = percentageOfWorld3(67);
// console.log(englandWorldPop2);
// console.log(chinaWorldPop2);
// console.log(franceWorldPop2);





// FUNCTIONS CALLING OTHER FUNCTIONS
// 1.
// const describePopulation = (country, population) => {
//     return `${country} has ${population} million people which is about ${percentageOfWorld1(population)}% of the world.`
// }
// 3.
// console.log(describePopulation('USA', 328));
// console.log(describePopulation('China', 1441));
// console.log(describePopulation('England', 56));






// INTRODUCTION TO ARRAYS
// 1.
const populations = [328, 108, 56, 6];
// 2.
// console.log(populations.length); // True
// 3.
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);






// BASIC ARRAY OPERATIONS (METHODS)
// 1.
// const neighbors = ['Canada', 'Mexico'];
// 2.
// neighbors.push('Utopia');
// 3.
// neighbors.pop();
// 4.
// if (neighbors.includes('Germany')) {
//     console.log(`Probably a central European Country`)
// } else {
//     console.log(`Probably not a central European Country :D`)
// }
// 5.
// console.log(neighbors.indexOf('Mexico'));
// neighbors[1] = 'Republic of Mexico';
// console.log(neighbors);





// INTRODUCTION TO OBJECTS
// 1.
// const myCountry = {
//     country: 'The United States of America',
//     capital: 'Washington D.C.',
//     language: 'English',
//     population: 328,
//     neighbors: ['Mexico', 'Canada']
// };





// DOT VS. BRACKET NOTATION
// 1.
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`);
// 2.
// console.log(myCountry.population + 2);
// console.log(myCountry['population'] - 2); // these solutions will change the population number but not save it, use the += or -= to also save the changes
// Better Solution
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population); // these solutions will change the population number AND save it.






// OBJECT METHODS
// const myCountry = {
//     country: 'The United States of America',
//     capital: 'Washington D.C.',
//     language: 'English',
//     population: 328,
//     neighbors: ['Mexico', 'Canada'],

// 1.
//     describe: function () {
//         return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors} neighboring countries and a capitol called ${this.capital}`;
//     },

// 3.
//     checkIsland: function () {
//         this.isIsland = this.neighbors.length === 0 ? true : false;

// this.isIsland = !Boolean(this.neighbors.length); // Simpler solution

//         return this.isIsland;
//     }
// };
// 2.
// myCountry.describe();
// console.log(myCountry.checkIsland());






// ITERATION: THE FOR LOOP
// 1.
// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }




// LOOPING ARRAYS, BREAKING AND CONTINUING
// 1.
// const populations2 = [328, 108, 56, 6];
// 2.
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));

// Alternate Solution (cleaner looking)
// const perc = percentageOfWorld1(populations[i]);
// percentages2.push(perc);
// }
// 3.
// console.log(percentages2);




// LOOPING BACKWARDS AND LOOPS IN LOOPS
// 1.
// const listOfNeighbors = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];
// 2.
// for (let i = 0; i < listOfNeighbors.length; i++) {
//     for (let z = 0; z < listOfNeighbors[i].length; z++) {
//         console.log(`Neighbor: ${listOfNeighbors[i][z]}`);
//      }
// }




// THE WHILE LOOP
// 1.
// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[i]));

//     // Alternate Solution
//     // const perc = percentageOfWorld1(populations[i]);
//     // percentages3.push(perc);

//     i++;
// }
// console.log(percentages3);
// 2.
// I like the While loop over the For loop. I think the While loop looks cleaner and it feels easier to read and more flexible. I like the space between the Inital Value, Condition, and Amount Increased in the While loop.