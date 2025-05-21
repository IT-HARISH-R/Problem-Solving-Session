// function swap(num1, num2) {
//   console.log(num1, num2);
//   let temp = num1;
//   num1 = num2;
//   num2 = temp;
//   console.log(num1, num2);
// }

// function swap(num1, num2) {
//     num1 = num1 + num2;
//     num2 = num1 - num2;
//     num1 = num1 - num2;
//     console.log(num1, num2);
// }

// function swap(num1, num2) {
//     num1 = num1 ^ num2;
//     num2 = num1 ^ num2;
//     num1 = num1 ^ num2;
//     console.log(num1, num2);
// }

// function swap(num1, num2) {
//     [num1, num2] = [num2, num1];
//     console.log(num1, num2)
// }
// function swap(num1, num2) {
//     console.log(num1, num2)
//     num1 = num1 + num2 - (num2 = num1);
//     console.log(num1, num2)
// }

// swap(10, 15);
// swapWithoutTemp(10, 15)

//? Day 2: Maths & Pattern Creation
//* Session Focus: Solving fundamental math problems and creating patterns.
//? Session Practice Questions:
//! Sum of digits in a number.
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
// console.log(sumOfDigits(1372))
//! Calculate the factorial of a number.
function fact(num) {
    // 5 => 5 * 4 * 3 * 2 * 1 = 120
    if (num == 0) return 1;
    let factorial = 1;
    for (let val = num; val > 0; val--) {
        factorial = val * factorial;
    }
    return factorial;
}

// console.log(fact(5));
//! Generate the Fibonacci sequence up to N terms.(Space Complexity)
// 0 1 1 2 3 5 8 13 21 34 55 89
function fibonacci(n) {
    //   let sequence = [0, 1];
    let x = 0;
    let y = 1;
    if (n < 1) return;
    if (n < 2) {
        console.log(0);
        return;
    }
    if (n < 3) {
        console.log(0);
        console.log(1);
        return;
    }
    for (let ind = 0; ind < n; ind++) {
        console.log(x);
        x = x + y;
        y = x - y;
    }
}
// for (let i = 0; i < 100; i++)
// console.log(...fibonacci(10));
//! Check if a number is prime. (Time Complexity)
function isPrime(num) {
    if (num < 2) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    //   let x = num / 2;
    //   for (let factor = 2; factor < num; factor++) {
    //   for (let factor = 2; factor < num/2; factor++) {
    //   for (let factor = 2; factor * factor <= num; factor++) {
    for (let factor = 3; factor * factor <= num; factor += 2) {
        if (num % factor == 0) return [factor, false];
    }
    return true;
}
// console.time("isPrime");
// const x = isPrime(1057438801);
// console.timeEnd("isPrime");
// console.log(x);
//! Print a hollow square pattern.
//! Print a right-angled triangle pattern of asterisks.

module.exports = { sumOfDigits };

// todo Post-Session Practice Questions:
// todo Find the LCM of two numbers.

function lcm(a, b) {
    let max = a > b ? a : b;

    while (true) {
        if (max % a === 0 && max % b === 0) {
            return max;
        }
        max++;
    }
}
let a = 12, b = 18;
console.log("---------LCM------------", lcm(a, b));

// todo Generate a pyramid pattern of numbers.

function numberPyramid(row) {
    for (let i = 1; i <= row; i++) {
        let str = " ".repeat(row - i);
        let num = "";
        for (let j = 1; j <= i; j++) {
            num += j + " ";
        }
        console.log(str + num)
    }
}

// numberPyramid(5)

// todo Calculate the GCD of two numbers.

function gcd(a, b) {
    let min = a < b ? a : b;
    while (min >= 1) {

        if (a % min === 0 && b % min === 0) {

            return min;
        }
        min--;
    }
}
// console.log("---------GCD------------", gcd(3, 7))
// todo Check if a number is a palindrome.

function palindromeOFNumber(num) {
    const ordernum = num
    let resnum = 0;
    console.log(resnum, num)

    while (num > 0) {
        let digit = num % 10;
        resnum = resnum * 10 + digit;
        num = Math.floor(num / 10);
    }
    return ordernum === resnum
}
// console.log(palindromeOFNumber(15051))

// todo Print an inverted triangle pattern of stars.

function invertedTriangle(n) {

    // * * * * *
    //  * * * *
    //   * * *
    //    * *
    //     *

    for (let row = n; row > 0; row--) {
        let line = ""
        for (let col = n; col >= 0; col--) {
            if (col >= row) {
                line += " ";
            } else {
                line += "* "
            }
        }
        console.log(line)
    }
}

// invertedTriangle(10)

// todo Check if two numbers are coprime.

function ifCoprime(num1, num2) {

    for (let i = 1; i <= num1; i++) {
        // console.log(i)
        if (num1 % i === 0 && num2 % i === 0) {
            hcf = i;
        }
    }

    return hcf === 1 ? true : false;
}
// console.log(ifCoprime(7,8))

// todo Print a diamond pattern of stars.

//    *   
//   ***  
//  ***** 
// *******
//  ***** 
//   ***  
//    *   

function diamondPattern(n) {
    let mid = Math.ceil(n / 2);
    console.log(mid)
    for (let row = 1; row <= n; row++) {
        let line = "";
        for (let col = 1; col <= n; col++) {
            if (row <= mid && col > mid - row && col < mid + row) {
                line += "*"
            }
            else if (row > mid && col > row - mid && col < mid - row + n + 1) {
                line += "*"
            }
            else {
                line += " "
            }
        }
        console.log(line)
    }
}
// diamondPattern(11)

// todo Print Pascal’s triangle up to N rows.

// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

function pascalsTriangle(n) {
    for (let row = 0; row < n; row++) {
        let line = "";
        let value = 1;

        line = " ".repeat(n - row)
        for (let col = 0; col <= row; col++) {
            line += value + " ";
            value = value * (row - col) / (col + 1);
        }
        console.log(line);
    }
}

// pascalsTriangle(5);

// todo Find all divisors of a number.

function divisorsNumbers(num) {
    let line = 1 + " ";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j < num; j++) {
            if (i * j === num) {
                line += i + " ";
            }
        }
    }
    console.log(line);
}
// divisorsNumbers(25)
// todo Print a checkerboard pattern.

// *.*.*.
// .*.*.*
// *.*.*.
// .*.*.*
// *.*.*.
// .*.*.*

function checkerboardPattern(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 1; j <= n; j++) {
            if ((i + j) % 2 == 0) {
                line += "."
            }
            else {
                line += "*"
            }
        }
        console.log(line)
    }
}
checkerboardPattern(7)


// ------------------xxxxxxxxxxxxxxx___END___xxxxxxxxxxxxxxx------------------