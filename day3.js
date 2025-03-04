//? Day 3: Strings & String Manipulation
//* Session Focus: Basic string operations, string traversal, and manipulation techniques.
//? Session Practice Questions:
//! Reverse a string.
function reverseStr(str = "") {
    // return str.split("").reverse().join("")
    let revStr = "";
    for (let ind = str.length; ind >= 0; ind--) {
        revStr += str.charAt(ind);
    }
    return revStr;
}
// console.log(reverseStr("Hello World!"));
//! Count vowels and consonants in a string.
function countVowAndCons(str) {
    const obj = { vowels: 0, consonants: 0 };
    for (let ind = 0; ind < str.length; ind++) {
        if ("aeiou".indexOf(str.charAt(ind)) != -1) {
            obj.vowels++;
        } else if (str.charCodeAt(ind) >= 97 && str.charCodeAt(ind) <= 122) {
            obj.consonants++;
        }
    }
    return obj;
}
// console.log(countVowAndCons("Convert a string to lowercase/uppercase."));
//! Convert a string to lowercase/uppercase.

function toLowerCase(str) {
    let res = "";
    for (let ind = 0; ind < str.length; ind++) {
        if (str.charCodeAt(ind) >= 65 && str.charCodeAt(ind) <= 90) {
            res += String.fromCharCode(str.charCodeAt(ind) + 32);
        } else {
            res += str.charAt(ind);
        }
    }
    return res;
}

function toUpperCase(str) {
    let res = "";
    for (let ind = 0; ind < str.length; ind++) {
        if (str.charCodeAt(ind) >= 97 && str.charCodeAt(ind) <= 122) {
            res += String.fromCharCode(str.charCodeAt(ind) - 32);
        } else {
            res += str.charAt(ind);
        }
    }
    return res;
}

function convertTo(str, toUpper = true) {
    let convertedStr = "";
    if (toUpper) {
        convertedStr = toUpperCase(str);
    } else {
        convertedStr = toLowerCase(str);
    }

    //   for (let ind = 0; ind < str.length; ind++) {
    //     const char = str[ind];
    //     if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    //       // checking char whether it is uppercase
    //       if (toUpper) {
    //         // needs to be changed uppercase?
    //         convertedStr += char;
    //       } else {
    //         // needs to be changed to lowercase?
    //         convertedStr += String.fromCharCode(char.charCodeAt(0) + 32);
    //       }
    //     } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    //       // checking char whether it is lowercase
    //       if (toUpper) {
    //         // needs to change to uppercase?
    //         convertedStr += String.fromCharCode(char.charCodeAt(0) - 32);
    //       } else {
    //         // to lowercase?
    //         convertedStr += char;
    //       }
    //     } else {
    //       // it is not an alphabet?
    //       convertedStr += char;
    //     }
    //   }

    return convertedStr;
}

// console.log(convertTo("Find the longest word in a sentence."));
// console.log(convertTo("Find the longest word in a sentence.", false));

//! Find the longest word in a sentence.
function findLongestWord(str) {
    let longest = "";
    for (let word of str.split(" ")) {
        if (word.length > longest.length) longest = word;
    }

    return longest;
}
// console.log(findLongestWord("Remove duplicates from a string"));
//! Check if a string is a palindrome.
function isPalindrome(str) {
    //   return str === reverseStr(str);
    // two pointers approach
    let left = 0,
        right = str.length - 1;
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("javascript"));
//! Remove duplicates from a string.
function removeDuplicates(str) {
    let uniqueStr = "";
    for (let char of str) {
        if (!uniqueStr.includes(char)) {
            uniqueStr += char;
        }
    }
    return uniqueStr;
}

// console.log(removeDuplicates("Find all substrings of a given string."));

//! Find all substrings of a given string.
function allSubstrings(str) {
    const substrings = [""];
    for (let itr = 0; itr < str.length; itr++) {
        let substring = "";
        for (let ind = itr; ind < str.length; ind++) {
            // nested loop for substring
            substring += str[ind];
            substrings.push(substring);
        }
    }
    return substrings;
}
// console.log(allSubstrings("string"));

// todo Post-Session Practice Questions:

// todo Concatenate two strings.

function concatenateTwoStr(str) {

    let newstr = "";
    for (let char of str) {
        if (char !== " ") {
            newstr += char
        }
    }

    return newstr
}
//   console.log(concatenateTwoStr("hello world"))

// todo Find the frequency of each character in a string.

function characterFrequency(str) {
    let frequency = {};
    let output = "";
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char !== " ") {
            if (!frequency[char]) {
                frequency[char] = 1;
                output += char;
            }
            else {
                frequency[char]++;
            }
        }
    }
    for (let i = 0; i < output.length; i++) {
        let char = output[i];
        console.log(`${char}: ${frequency[char]}`);
    }

}
// characterFrequency("hello world")

// todo Replace spaces in a string with %20.
function replaceSpaces(str = "") {

    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            newStr += "%20"

        } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            newStr += str[i]
        }
    }

    return newStr;
}
// console.log(replaceSpaces("Hello World"))
// console.log(replaceSpaces("  Leading and trailing spaces  "))
// console.log(replaceSpaces("OneTwoThree`"))
// console.log(replaceSpaces("This    has    multiple    spaces"))
// todo Check if a string is an anagram and panagram of another.

function anagramAndPanagram(str1 = "", str2 = "") {
    let result = false

    str1 = str1.split("").sort().join("")
    str2 = str2.split("").sort().join("")

    result = str1 === str2;

    return result ? 'Anagram' : "Pangram"

}

// console.log(anagramAndPanagram("listen", "silent"))
// console.log(anagramAndPanagram("The quick brown fox", "jumped over the lazy dog"))
// console.log(anagramAndPanagram("William Shakespeare", "I am a weakish speller"))
// console.log(anagramAndPanagram("hello", "world"))

// todo Count the number of words in a sentence.

function numberOfWords(str=""){

    if(str==="") return 0;

    return str.split(/\s+/).length;
}
// console.log(numberOfWords('Hello world'))
// console.log(numberOfWords('SingleWord'))
// console.log(numberOfWords('   Leading and trailing spaces    '))
// console.log(numberOfWords('5'))
// console.log(numberOfWords(''))

// todo Find the first non-repeating character in a string.

function firstNonRepeating(str="" ){
    
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char; 
        }
    }

    return "_"; 
}
// console.log(firstNonRepeating("aabbcdeff"));
// console.log(firstNonRepeating("racecar"));
// console.log(firstNonRepeating("xxyzxyz"));
// console.log(firstNonRepeating("Aabcddee"));
// console.log(firstNonRepeating("abcdabcde"));
// console.log(firstNonRepeating("z"));
// todo Remove all vowels from a string.

function removeAllVowels(str=''){
    let newstr='';
    const vowels ='aeiouAEIOU';
    for(let char of str){
        if(!vowels.includes(char)){
            newstr+=char
        }
    }
    return newstr;
}

// console.log(removeAllVowels('hello world'))
// console.log(removeAllVowels('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
// console.log(removeAllVowels('aeiouAEIOU'))
// console.log(removeAllVowels('JavaScript is awesome!'))


// todo Find the shortest word in a sentence.

function shortestWord(str=''){
    let words = str.trim().split(/\s+/);

    return words.reduce((shortest, current) =>
        current.length < shortest.length ? current : shortest
    );
}

console.log(shortestWord("The quick brown fox jumps over the lazy dog"))
console.log(shortestWord("Hello world"))
console.log(shortestWord("   A tiny  cat runs  "))
console.log(shortestWord("programming coding debugging"))

// todo Count occurrences of a substring within a string.
function countOccurrences(str, subStr) {
    return str.split(subStr).length - 1;
}

console.log(countOccurrences("hello world, hello everyone", "hello")); 

console.log(countOccurrences("abababab", "ab")); 

console.log(countOccurrences("aaaaaa", "aa")); 
