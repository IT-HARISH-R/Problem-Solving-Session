// Getting input via STDIN
const readline = require("readline");
const { difference, checkNumber, perimeterOfRectangle, findLargest, average, countVowels, isUppercase, reverseStr, square } = require("./day1");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const arr = userInput[0].split(" ").map(Number);

  console.log(square(arr[0]))

  //end-here
});
// quokka