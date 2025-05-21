// reverseString 

function reverseString(str = '') {

    let result = [];

    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }

    return result.join('')
}

// console.log(reverseString("hello")); // Output: "olleh"



// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

// second largest number

function secondLargestNumber(arr = []) {
    if (arr.length == 0) return -1;

    let first = arr[0]
    let second = -Infinity

    // if (arr.length == 1) return arr[0] < arr[1] ? arr[1] : arr[0];;

    for (let num of arr) {

        if (num > first) {
            second = first;
            first = num;
        }

        if (second < num && num < first) {
            second = num
        }
    }
    return second === -Infinity ? -1 : second
}

// console.log(secondLargestNumber([10, 20, 4, 45, 99]))

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function isPalindrome(num) {
    if (num < 0) return false;
    let curr = num;
    let revarce = 0;
    while (num != 0) {
        revarce *= 10;
        revarce += num % 10;
        num = Math.floor(num / 10);
        console.log(num)
        console.log(revarce)
    }
    console.log(curr)
    console.log(revarce)
    return revarce === curr ? true : false;
}

// console.log(isPalindrome(121));
// console.log(isPalindrome(12321));
// console.log(isPalindrome(123));
// console.log(isPalindrome(1));
// console.log(isPalindrome(22));
// console.log(isPalindrome(1001));
// console.log(isPalindrome(1221));
// console.log(isPalindrome(123321));
// console.log(isPalindrome(10));
// console.log(isPalindrome(0));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(123456));

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function reversesTheWord(str = '') {
    let charArr = str.split(' ');
    let result = [];

    for (let i = charArr.length - 1; i >= 0; i--) {
        result.push(charArr[i])
    }

    return result.join(" ")

}

// console.log(reversesTheWord('I love JavaScript'))

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function longestConsecutive(arr = []) {
    if (arr.length === 0) return 0;
    arr.sort((a, b) => a - b);

    let count = 1;
    let mixSum = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 === arr[i]) {
            count++
        }
        else {
            console.log(count)
            mixSum = Math.max(mixSum, count)
            count = 1;
        }
    }
    return Math.max(mixSum, count)
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([1, 9, 3, 10, 4, 20, 2]));
// console.log(longestConsecutive([0, -1, 1, 2, -2, -3]));
// console.log(longestConsecutive([5, 5, 5, 5]));
// console.log(longestConsecutive([]));

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function nonRepeating(str = '') {
    let map = {};

    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        map[str[i]] = (map[str[i]] || 0) + 1;
    }
    console.log(map)

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === 1) return str[i]
    }

    return ""
}

// console.log(nonRepeating("swiss"));
// console.log(nonRepeating("aabbcc"));
// console.log(nonRepeating("abcdef"));
// console.log(nonRepeating("racecar"));
// console.log(nonRepeating(""));

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function pairTargetSum(arr = [], target = 0) {

    arr.sort((a, b) => a - b);

    let start = 0, end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === target) {
            return [start, end]
        }
        else if (sum < target) {
            start++;
        }
        else {
            end--
        }
    }
    return []
}

// Test Cases
// console.log(pairTargetSum([1, 2, 3, 4, 5], 5));
// console.log(pairTargetSum([2, 7, 11, 15], 9));
// console.log(pairTargetSum([3, 2, 4], 6));
// console.log(pairTargetSum([1, 5, 3, 7], 8));
// console.log(pairTargetSum([3, 3], 6));
// console.log(pairTargetSum([1, 2, 3, 4, 5], 10));
// console.log(pairTargetSum([], 5));
// console.log(pairTargetSum([1], 2));

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function maxSumIncreasingSubarray(arr = []) {
    if (arr.length === 0) return 0;
    let muxSum = 0;
    let curr = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            curr += arr[i];
        }
        else {
            muxSum = Math.max(muxSum, curr);
            curr = arr[i];
        }
    }
    return Math.max(muxSum, curr);

}

// console.log(maxSumIncreasingSubarray([2,1,4,7,3,6]))

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function fbi(n) {
    let x = 0, y = 1;
    for (let i = 0; i < n; i++) {
        x = x + y;
        y = x - y;
    }
    return x
}
// console.log(fbi(7))

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function revarceNum(num) {
    let revarce = 0
    while (num > 0) {
        revarce *= 10;
        revarce += num % 10
        num = Math.floor(num / 10);
    }
    return revarce;
}
// console.log(revarceNum(12345))

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv


function isLeapYear(num) {
    if (num % 4 === 0 && num % 100 !== 0 || num % 400 === 0) {
        return 'Leap Year'
    } else return 'not a Leap year'
}


// console.log(isLeapYear(2024)); // Output: 2024 is a Leap Year.
// console.log(isLeapYear(2023)); // Output: 2023 is not a Leap Year.
// console.log(isLeapYear(2000)); // Output: 2000 is a Leap Year.
// console.log(isLeapYear(1900)); // Output: 1900 is not a Leap Year.


// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
// table(5)

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function anagram(str1 = '', str2 = '') {
    if (!str1 || !str2) return false;

    str1.toLocaleLowerCase()
    str2.toLocaleLowerCase()

    const sortStr1 = str1.split("").sort().join("");
    const sortStr2 = str2.split("").sort().join("");
    const isAnagram = sortStr1 === sortStr2;

    const uniqueChars1 = new Set(str1);
    const uniqueChars2 = new Set(str2);
    const isPangram = [...uniqueChars1].every(char => uniqueChars2.has(char));

    return `${isAnagram} ${isPangram}`
}
// console.log(anagram("listen", "silent"))
// console.log(anagram("hello", "ohellox"))
// console.log(anagram("abcdef", "abcde"))

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function armstrongNumber(num) {
    let arr = [];
    let temp = num
    let result = 0;
    while (num > 0) {
        arr.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    for (let i = 0; i < arr.length; i++) {
        let math = Math.pow(arr[i], arr.length)
        result += math;
    }
    console.log(result)
    return result === temp
}

// console.log(armstrongNumber(153))
// console.log(armstrongNumber(9474))
// console.log(armstrongNumber(123))

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function perfect(num) {
    let sum = 1;

    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    return sum === num;
}

// console.log(perfect(28))
// console.log(perfect(6))
// console.log(perfect(12))

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function gcd(num1, num2) {
    let i = num1 > num2 ? num2 : num1;
    while (i > 0) {
        if (num1 % i == 0 && num2 % i === 0) {
            return i
        }
        i--
    }
}

// console.log(gcd(12, 18));
// console.log(gcd(48, 18));
// console.log(gcd(7, 13));
// console.log(gcd(100, 25));

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function lcm(num1, num2) {
    if (num1 === 0 || num2 == 0) return 0;
    let i = num1 < num2 ? num2 : num1
    while (true) {
        if (i % num1 === 0 && i % num2 === 0) return i;
        i++
    }
}

// console.log(lcm(4, 6));
// console.log(lcm(7, 5));
// console.log(lcm(12, 18));
// console.log(lcm(8, 10));
// console.log(lcm(1, 10));
// console.log(lcm(0, 5));
// console.log(lcm(0, 0));

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function sort(arr = []) {
    let i = 0;
    let isSwapHappend = false;
    do {
        isSwapHappend = false;
        for (let ind2 = 1; ind2 < arr.length - i; ind2++) {
            if (arr[ind2 - 1] > arr[ind2]) {
                isSwapHappend = true;
                [arr[ind2 - 1], arr[ind2]] = [arr[ind2], arr[ind2 - 1]]
            }
        }
        i++
    }
    while (isSwapHappend)

    return arr
}

// console.log(sort([5, 3, 4, 2, 1, 6, 7, 9, 8, 7, 2, 5]))
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function bubbleSort(arr) {
    let count = 0;
    let itr = 0;
    let isSwapHappend;
    do {
        isSwapHappend = false;
        for (let ind = 1; ind < arr.length - itr; ind++) {
            count++;
            if (arr[ind] < arr[ind - 1]) {
                isSwapHappend = true;
                let temp = arr[ind];
                arr[ind] = arr[ind - 1];
                arr[ind - 1] = temp;
            }
        }
        itr++;
    } while (isSwapHappend);

    console.log(count);
    return arr
}

// console.log(bubbleSort([5, 3, 4, 2, 1, 6, 7, 9, 8, 7, 2, 5]))

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Find the Majority Element

function majorityElement(arr = []) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
    for (let key in map) {
        console.log(key)
        if (Math.floor(arr.length / 2) < key) return key

    }
    return -1
}

// console.log(majorityElement([3, 3, 4, 2, 3]));
// console.log(majorityElement([1, 1, 2, 2, 3, 3])); 
// console.log(majorityElement([10]));
// console.log(majorityElement([5, 5, 5, 5, 5, 5, 5])); 
// console.log(majorityElement([8, 8, 8, 8, 1, 2, 3, 8])); 
// console.log(majorityElement([2, 2, 2, 3, 3, 3, 3])); 


// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function pairsSum(arr = [], target = 0) {
    const seen = new Set();
    const result = [];

    for (let num of arr) {
        let complement = target - num;

        if (seen.has(complement)) {
            result.push([complement, num]);
        }

        seen.add(num);
    }

    return result;
}


// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

// console.log(pairsSum([1, 2, 3, 4, 5], 5))
// console.log(pairsSum([3, 3, 4, 2, 5, 7], 6));
// console.log(pairsSum([1, 2, 3, 8], 20));
// console.log(pairsSum([1, 2, 3, 9], 10));
// console.log(pairsSum([5, 5, 5, 5], 10));

// console.log(pairsSum([1, 2, 3, 4, 5], 5));
// // Expected: [[2, 3], [1, 4]]

// console.log(pairsSum([3, 3, 4, 2, 5, 7], 6));
// // Expected: [[3, 3], [2, 4]]

// console.log(pairsSum([-2, -1, 3, 4], 2));
// // Expected: [[-2, 4], [-1, 3]]

// console.log(pairsSum([1, 2, 3, 8], 20));
// // Expected: []

// console.log(pairsSum([5, 5, 5, 5], 10));
// // Expected: [[5, 5]]

// console.log(pairsSum([-3, 0, 3, 5, -5], 0));
// // Expected: [[-3, 3], [-5, 5]]

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function isNumeric(str = '') {
    return /^\d+$/.test(str)
}


// console.log(isNumeric("12345"));     // true (valid digits)
// console.log(isNumeric("000123"));    // true (leading zeros allowed)
// console.log(isNumeric("12a34"));     // false (contains non-digit character)
// console.log(isNumeric(""));          // false (empty string)
// console.log(isNumeric(" 123 "));     // false (spaces are not allowed)
// console.log(isNumeric("-123"));      // false (negative numbers are not pure digits)
// console.log(isNumeric("12.34"));     // false (decimal numbers are not pure digits)
// console.log(isNumeric("12e3"));      // false (scientific notation is not allowed)

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function multiple(num, mul) {
    if (mul === 0) return false;
    return num % mul === 0 ? true : false
}

// console.log(multiple(15, 5))
// console.log(multiple(4, 2))
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function longestConsecutive(arr = []) {
    arr.sort((a, b) => a - b);

    let i = 1;
    let maxLength = 1, curr = 1;

    while (i < arr.length) {

        if (arr[i - 1] === arr[i] - 1) {
            curr++
        }
        else {
            maxLength = Math.max(maxLength, curr)
            curr = 1
        }
        i++
    }
    return maxLength = Math.max(maxLength, curr)

}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// Output: 4 (sequence: [1, 2, 3, 4])

// console.log(longestConsecutive([9, 1, 4, 7, 3, 2, 6, 8, 5]));
// // Output: 9 (sequence: [1, 2, 3, 4, 5, 6, 7, 8, 9])

// console.log(longestConsecutive([10, 20, 30]));
// // Output: 1 (no consecutive numbers)

// console.log(longestConsecutive([5, 6, 7, 8, 1, 2, 3, 4]));
// // Output: 8 (sequence: [1, 2, 3, 4, 5, 6, 7, 8])

// console.log(longestConsecutive([]));
// // Output: 0 (empty array)

// console.log(longestConsecutive([1, 1, 1, 1]));
// // Output: 1 (only one unique number)

function maxSubarraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let start = 0, end = 0, s = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = s;
            end = i;
        }

        if (currentSum < 0) {
            currentSum = 0;
            s = i + 1;
        }
    }

    return {
        maxSum,
        subarray: arr.slice(start, end + 1)
    };
}

//  console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


function isValidParentheses(str = '') {
    let stack = [];
    let pair = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let char of str) {
        console.log(char)
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char in pair) {
            if (stack.length === 0 || stack.pop() !== pair[char]) {
                return false
            }
        }
    }
    return stack.length === 0

}








console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
console.log(isValidParentheses("(([]){})")); // true
console.log(isValidParentheses("]")); // false
console.log(isValidParentheses("")); // true (empty string is valid)




function zzz(arr = []) {
    for (let i = 0; i < arr.length-1; i++) {
        let ind = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[ind]) {
                ind = j;
            }
        }

        if (ind !== i) {
            [arr[i], arr[ind]] = [arr[ind], arr[i]]
        }
    }

    console.log(arr)
}

zzz([4, 3, 1, 5, 6, 7, 14, 243, 6]);

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the minimum element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example usage
let arr = [4, 3, 1, 5, 6, 7, 14, 243, 6];
console.log("Unsorted array:", arr);
console.log("Sorted array:", selectionSort(arr));

// --------------------------------------------------------------------------------------




function sortSumma(arr=[]){
    return arr.sort((a,b)=>a-b)
}

console.log(sortSumma([7,4,5,2,4,67,89,34,344,5]))

