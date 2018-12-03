// read local text file into a JavaScript array
var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var input = text.split("\n")

// check-in with console.log!
console.log(input)
console.log('Array length: ' + input.length)

// Add numbers in string, convert to integer
function getSum (total, num) {
  return total + parseInt(num)
}

// use reduce to sum the array
var result = input.reduce(getSum, 0);

console.log(result);
