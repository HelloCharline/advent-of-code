// reads local text file into a JavaScript array
var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var input = text.split("\n")

// create new array with all reached frequencies
// var currentFreq = 0;
// var allFreq = input.map(change =>  currentFreq = currentFreq + parseInt(change));

// sets starting frequency to 0
  var currentFreq = 0

// creates an array to store reached frequencies
  var allFreq = []

// sets break in the loop
  var dupeFound = false
  var firstDupe = -1

    while (dupeFound === false) {
    for (let i = 0; i < input.length; i++) {

      // adds change of frequency from the input array
      var adds = input[i][0]
      var change = parseInt(input[i].substring(1))
      if (adds === '+') { currentFreq += change } else { currentFreq -= change }

      // if reached frequency is already stored in all frequency array, return that frequency
      if (allFreq.indexOf(currentFreq) > -1) {
        dupeFound = true
        firstDupe = currentFreq
        break
      }
      // else push to array gathering all frequencies
      else { allFreq.push(currentFreq) }
    }
  }
  console.log(firstDupe)
