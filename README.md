```js
// type input.txt | node index.js

// Getting input via STDIN
const readline = require("readline");

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
  
  let result = userInput[0].split("");
  let output = result.join(",");
  console.log(output);

  //end-here
});

```