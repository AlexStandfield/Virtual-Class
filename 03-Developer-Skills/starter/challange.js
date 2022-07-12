// CODING CHALLENGE #1
// 1.
const printForecast = function (arr) {
  let sentence = '... ';
  for (let i = 0; i < arr.length; i++) {
    sentence += `${arr[i]} Celsius in ${arr.indexOf(arr[i]) + 1} days ... `;
  }
  return sentence;
};
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
// 2.
// A) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the X days? ANSWER: Index + 1

// B) Breaking up into sub-problemts
// - Transform array into string
// - Transform each element to string with Celsius
// - String needs to contain day 9(index + 1)
// - Add ... between elements, the start, and the end of the string
// - Log string to console
