// ? Day 4: Arrays & Array Manipulations
// * Session Focus: Array creation, traversal, and manipulation techniques.
// ? Session Practice Questions:
// ! Calculate the sum of elements in an array.
function sumOfArr(arr = []) {
  let sum = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    sum += arr[ind];
  }
  return sum;
}

// ! Find the maximum and minimum elements in an array.
function maxAndMin(arr = []) {
  let min = arr[0];
  let max = arr[0];

  for (let ind = 0; ind < arr.length; ind++) {
    if (min > arr[ind]) {
      min = arr[ind];
    }
    if (max < arr[ind]) {
      max = arr[ind];
    }
  }
  return [min, max];
}
// ! Find the second-largest element in an array.

function secondLargest(arr = []) {
  // console.log(arr);
  let max = arr[0];
  let secLargest = -Infinity;
  for (let ind = 1; ind < arr.length; ind++) {
    if (max < arr[ind]) {
      secLargest = max;
      max = arr[ind];
    }
    if (arr[ind] < max && secLargest < arr[ind]) {
      secLargest = arr[ind];
    }
  }
  return secLargest;
}

// console.log(secondLargest([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5]));
// ! Rotate an array to the left by one position.
function rotate(arr = []) {
  // O(n)
  let temp = arr[0];
  for (let ind = 1; ind < arr.length; ind++) {
    arr[ind - 1] = arr[ind];
  }
  arr[arr.length - 1] = temp;
  return arr;
}
// rotate([1,2,3,4,5])
// ! Rotate an array to the left by K positions.
// function rotateByK(arr = [], k = 0) { // O(nk)
//   console.log(k);
//   k = k % arr.length;
//   console.log(k);
//   while (k > 0) {
//     rotate(arr);
//     k--;
//   }
//   console.log(arr);
// }
function reverse(arr = [], start = 0, end = arr.length - 1) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateByK(arr = [], k = 0) {
  // O(n)
  k = k % arr.length;
  reverse(arr, 0, k - 1);
  reverse(arr, k);
  reverse(arr);
  console.log(arr);
}
// rotateByK([1, 2, 3, 4, 5, 6, 7], 2);
// [2, 1, 3, 4, 5, 6, 7];
// [2, 1, 7, 6, 5, 4, 3];
// [3, 4, 5, 6, 7, 1, 2];
// ! Sort an array of integers.
function sort(arr = []) {
  // ASC => first <= second =>  start => end
  // DESC => first >= second => start => end
  // console.log(...arr);
  for (let ind = 0; ind < arr.length; ind++) {
    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind] > arr[ind1]) {
        let temp = arr[ind];
        arr[ind] = arr[ind1];
        arr[ind1] = temp;
      }
    }
  }
  // console.log(...arr);
  return arr;
}

// console.log(...sort(
//   Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
// ));

// ! Remove duplicates from a sorted array.
function removeDuplicates(arr = []) {
  console.log(arr);
  for (let ind = 0, slowInd = 0; ind < arr.length; ind++) {
    if (arr[ind] !== arr[slowInd]) {
      slowInd++;
      arr[slowInd] = arr[ind];
    }
    if (arr.length - 1 == ind) {
      slowInd++;
      arr.length = slowInd;
    }
  }
  return arr;
}
// console.log(
// removeDuplicates(
// sort(Array.from({ length: 25 }, () => Math.floor(Math.random() * 10)))
// )
// );

module.exports = { sumOfArr, maxAndMin };
// todo Post-Session Practice Questions:
// todo Find the number of occurrences of an element in an array.
function occurrencesArr(arr = [], taget = 0) {

  let count = 0;

  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] === taget) count++
  }
  return count
}
// console.log(occurrencesArr([1, 2, 4, 2, 5, 23, 5, 4, 5, 2], 5))
// console.log(occurrencesArr([10, 20, 30, 20, 40, 20, 50, 60, 20, 70], 20))
// console.log(occurrencesArr([100], 100))
// console.log(occurrencesArr())
// console.log(occurrencesArr())

// todo Merge two sorted arrays.

function mergeTwoSorted(arr1 = [], arr2 = []) {

  let left = 0;
  let right = 0;
  let sortedArr = [];
  for (let ind = 0; ind < arr1.length + arr2.length; ind++) {
    if (arr1[left] > arr2[right]) {
      sortedArr.push(arr2[right])
      right++
    }
    else if (arr1.length - 1 < left) {
      sortedArr.push(arr2[right])
      right++
    }
    else {
      sortedArr.push(arr1[left])
      left++
    }
  }
  return sortedArr;
}

// console.log(mergeTwoSorted([1, 3, 5, 7, 9], [0, 2, 4, 6, 8]))
// console.log(mergeTwoSorted([10, 20, 30], [5, 15, 25]))
// console.log(mergeTwoSorted([3], [5]))
// console.log(mergeTwoSorted([5], [3]))

// todo Reverse the elements in an array.

function reverseAnArr(arr = []) {
  let reversearr = [];

  for (let ind = arr.length - 1; ind >= 0; ind--) {
    reversearr.push(arr[ind])
  }

  return reversearr;
}
// console.log(reverseAnArr([5, 4, 3, 2, 1]))
// console.log(reverseAnArr([7, 6, 5, 4, 3, 2, 1]))
// console.log(reverseAnArr([1]))
// console.log(reverseAnArr([]))

// todo Search for an element in a sorted array.

function searchInSortedArr(arr = [], target = 0) {

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2)
    if (arr[mid] === target) {
      return mid;
    }
    else if (arr[mid] > target) {
      end = mid - 1
    }
    else {
      start = mid + 1
    }
  }
  return -1
}
// console.log(searchInSortedArr([-3, -1, 2, 3, 5, 8], 3))
// console.log(searchInSortedArr([1, 4, 7, 9, 10], 5))
// console.log(searchInSortedArr([-10, -5, -5, 0, 2, 2, 4, 7], -5))

// todo Find the cumulative sum of an array.

function cumulativeOfSum(arr = []) {

  for (let ind = 1; ind < arr.length; ind++) {

    arr[ind] += arr[ind - 1]
  }

  return arr;
}
// console.log(cumulativeOfSum([1, 2, 3, 4, 5]))
// console.log(cumulativeOfSum([-2, 5, -1, 3]))
// console.log(cumulativeOfSum([10, -10, 5]))

// todo Calculate the product of all elements in an array.

function CalculateTheProduct(arr = []) {
  if (arr.length === 0) return 0;
  let result = arr[0];
  for (let ind = 1; ind < arr.length; ind++) {
    if (arr[ind] === 0) return 0
    result *= arr[ind]
  }
  return result;
}
// console.log(CalculateTheProduct([1, 2, 3, 4, 5]))
// console.log(CalculateTheProduct([-2, 5, -1, 3]))
// console.log(CalculateTheProduct([10, -10, 0]))

// todo Check if an array is a palindrome.

function checkIsPalindromeArr(arr = []) {

  if (arr.length === 0) return false
  if (arr.length === 1) return false
  if (arr.length === 2) return arr[0] === arr[1]

  const mid = Math.floor((arr.length) / 2);
  for (let ind = 0; ind < mid; ind++) {
    if (arr[ind] !== arr[arr.length - ind - 1]) return false

  }
  return true
}
// console.log(checkIsPalindromeArr([1, 2, 3, 2, 1]))
// console.log(checkIsPalindromeArr([1, 2, 2, 3]))
// console.log(checkIsPalindromeArr([10, -10, 10]))
// console.log(checkIsPalindromeArr([0, 1, 2, 2, 1, 0]))


// todo Find the intersection of two arrays.

function intersectionOfTwoArr(arr1 = [], arr2 = []) {
  const count = {}
  const sectionArr = []

  for (let ind = 0; ind < arr1.length; ind++) {
    count[arr1[ind]] = (count[arr1[ind]] || 0) + 1;
  }

  for (let ind = 0; ind < arr2.length; ind++) {
    if (count[arr2[ind]] > 0) {
      sectionArr.push(arr2[ind]);
      count[arr2[ind]]--
    }
  }
  return sectionArr

}

// console.log(intersectionOfTwoArr([1, 2, 2, 1], [2, 2]));
// console.log(intersectionOfTwoArr([4, 9, 5], [9, 4, 9, 8, 4]));
// console.log(intersectionOfTwoArr([1, 2, 3], [4, 5, 6]));
// console.log(intersectionOfTwoArr([1, 2, 3, 3], [3, 3, 3, 3]));
// console.log(intersectionOfTwoArr([], [1, 2, 3]));
// console.log(intersectionOfTwoArr([1, 1, 1], [1, 1]));          
