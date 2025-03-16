//? Day 1: Problem Statements & Systematic Approaches
//* Session Focus: Interpreting problem statements, breaking down problems systematically.
//? Session Practice Questions:
//! Determine if a number is positive or negative.
function isPositive(num) {
  if (num > 0) {
    return "Positive";
  } else if (num == 0) {
    return "Zero";
  } else {
    return "Negative";
  }
}
//! Find the sum of two integers.
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}
//! Identify the maximum, middle and minimum of three numbers.
function max(num1, num2) {
  return num1 < num2 ? num2 : num1;
}
function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
function maxMiddleMin(num1, num2, num3) {
  let maximum = max(max(num1, num2), num3);
  let minimum = min(min(num1, num2), num3);
  let middle = num1 + num2 + num3 - maximum - minimum;

  return [maximum, middle, minimum];
}

// console.log(maxMiddleMin(1, 2, 3));
// console.log(maxMiddleMin(3, 2, 1));
// console.log(maxMiddleMin(2, 3, 1));
// console.log(maxMiddleMin(2, 1, 3));
// console.log(maxMiddleMin(1, 3, 2));
// console.log(maxMiddleMin(3, 1, 2));
//! Count the number of digits in a number.
function countDigits(num) {
  if (num == 0) return 1;
  if (num < 0) return countDigits(-num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

//! Check if a string contains only alphabets.
// function isAlphabetOnly(str) {
//   let regex = /^[a-zA-Z]+$/;
//   return regex.test(str);
// }
function isAlphabetOnly(str) {
  if (str.length == 0) return false
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (
      !(charCode >= 65 && charCode <= 90) &&
      !(charCode >= 97 && charCode <= 122)
    ) {
      return false;
    }
  }
  return true;
}

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
// console.log("A".charCodeAt(0));
// console.log("Z".charCodeAt(0));
//! Calculate the area of a circle with a given radius.
function areaOfCircle(rad) {
  return ((22 / 7) * rad * rad).toFixed(2);
}
//! Check if a character is a vowel.
function isVowel(char) {
  // return char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'
  return "aeiouAEIOU".indexOf(char) !== -1;
}

// todo Post-Session Practice Questions:
// todo Calculate the difference between two integers.

function difference(num1, num2) {

  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }

}

// todo Check if a number is even or odd.
function checkNumber(num) {
  return num % 2 === 0 ? "even" : "odd"
}

// todo Calculate the perimeter of a rectangle.

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

// todo Find the largest of four numbers.

function findLargest(a, b, c, d) {
  let largest = a;

  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  if (d > largest) {
    largest = d;
  }
  return largest;
}

// todo Calculate the average of three numbers.

function average(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3
  return avg.toFixed(2)
}

// todo Count the number of vowels in a string.

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {

    if (vowels.includes(char)) {
      count++
    }

  }
  return count
}

// todo Determine if a character is uppercase.

function isUppercase(str) {
  if (str.length === 0) return false;

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (!(charCode >= 65 && charCode <= 90)) {
      return false;
    }
  }

  return true;
}
// todo Print the reverse of a string.

function reverseStr(str) {
  let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// todo Find the square of a number.
function square(num) {
  return num ** 2;
}

module.exports = {
  isPositive,
  sumOfTwoNumbers,
  maxMiddleMin,
  countDigits,
  isAlphabetOnly,
  areaOfCircle,
  isVowel,
  difference,
  checkNumber,
  perimeterOfRectangle,
  findLargest,
  average,
  countVowels,
  isUppercase,
  reverseStr,
  square
};

// ------------------xxxxxxxxxxxxxxx___END___xxxxxxxxxxxxxxx------------------