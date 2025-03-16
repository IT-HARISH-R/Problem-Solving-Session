// const { rotateByK } = require("./day4.js");

// ? Day 5: Searching Algorithms
// * Session Focus: Linear search and binary search techniques.
// ? Session Practice Questions:
// ! Implement a linear search to find an element in an array.
// * Algorithm
// * 0. You're having a function with 2 args, arr and target.
// * 1. Start from the first element of the array.
// * 2. Compare the target element with each element in the array.
// * 3. If the target element is found, return its index.
// * 4. If the target element is not found, return -1.

function linearSearch(arr = [], target = 0, start = 0) {
  for (let ind = start; ind < arr.length; ind++) {
    if (arr[ind] == target) {
      return ind;
    }
  }
  return -1;
}
// array with duplicate values
// console.log(
//   linearSearch([3, 4, 3, 3, 5, 23, 6, 8, 75, 76, 33, 6, 4, 89, 3], 3)
// );
// console.log(linearSearch([3, 4, 3, 3, 5, 23, 6, 8, 75, 76, 33, 6, 4, 89, 3], 3, 4))

// ! Implement a binary search on a sorted array.
// * Algorithm
// * 0. You're having a function with 2 args, arr and target.
// * 1. Start from the middle element of the array.
// * 2. Compare the target element with the middle element.
// * 3. If the target element is found, return its index of middle element.
// * 4. If the target element is greater than the middle element, search the right half of the array.
// * 5. If the target element is less than the middle element, search the left half of the array.
// * 6. Repeat the process until the target element is found or the array is empty.
// * 7. If the target element is not found, return -1.
function binarySearch(arr = [], target = 0) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

// console.log(
//   binarySearch(
//     Array.from({ length: 25 }, () => Math.floor(Math.random() * 100)).sort(
//       (a, b) => a - b
//     ),
//     Math.floor(Math.random() * 100)
//   )
// );
// ! Find the first and last occurrence of a target in an array.
function firstAndLastOccurrenceArr(arr = [], target = 0) {
  let first = -1;
  let last = -1;
  let count = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] == target) {
      last = ind;
      count++;
      if (first == -1) {
        first = ind;
      }
    }
  }
  return { count, first, last };
}

function firstAndLastOccurrenceSortedArr(arr = [], target = 0) {
  function findOccurrence(arr, target, isFirst = true) {
    let start = 0;
    let end = arr.length - 1;
    let foundInd = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] == target) {
        foundInd = mid;
        if (isFirst) end = mid - 1;
        else start = mid + 1;
      } else if (arr[mid] > target) end = mid - 1;
      else start = mid + 1;
    }
    return foundInd;
  }

  console.log(...arr);
  console.log(target);
  let first = findOccurrence(arr, target);
  let last = findOccurrence(arr, target, false);
  return { first, last };
}

// console.log(
//   firstAndLastOccurrenceSortedArr(
//     Array.from({ length: 25 }, () => Math.floor(Math.random() * 10)).sort(
//       (a, b) => a - b
//     ),
//     Math.floor(Math.random() * 10)
//   )
// );
// ! Count occurrences of a target using binary search.
function countOccurrences(arr, target) {
  const { first, last } = firstAndLastOccurrenceSortedArr(arr, target);
  return first == -1 ? 0 : last - first + 1;
}
// console.log(
//   countOccurrences(
//     Array.from({ length: 25 }, () => Math.floor(Math.random() * 10)).sort(
//       (a, b) => a - b
//     ),
//     Math.floor(Math.random() * 10)
//   )
// );

// ! Find the index where an element should be inserted in a sorted array.
function findInsertionIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return start;
}
// ! Find the peak element in a mountain array.
function peakElement(arr = []) {
  if (arr.length < 2) return -1;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (
      (mid == arr.length - 1 || arr[mid] > arr[mid + 1]) &&
      (mid == 0 || arr[mid] > arr[mid - 1])
    )
      return mid;
    else if (arr[mid] > arr[mid + 1]) end--;
    else start++;
  }
  return -1;
}
// console.log(peakElement([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]));
// console.log(peakElement([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1]));
// console.log(peakElement([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]));
// ! Search for a target in a rotated sorted array.

function searchRotated(arr = [], target = 0) {
  console.log(...arr);
  console.log(target);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target)
      return mid; // if target is equals with mid, return mid
    else if (arr[start] <= arr[mid]) {
      // if left side us sorted
      if (arr[start] <= target && target < arr[mid])
        end = mid - 1; // is taget within the range?
      else start = mid + 1; // if target is not in the sorted range
    } else {
      // if right side is sorted
      if (arr[mid] < target && target <= arr[end])
        start = mid + 1; // if target is in the right side ?
      else end = mid - 1; // what if it is not there?
    }
  }
  return -1;
}
// console.log(
//   searchRotated(
//     rotateByK(
//       Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).sort(
//         (a, b) => a - b
//       ),
//       Math.floor(Math.random() * 10)
//     ),
//     Math.floor(Math.random() * 10)
//   )
// );




// ---------------------------------------------------------------
// todo Post-Session Practice Questions:

// todo Find the floor and ceiling of a target in a sorted array.

function findFloorAndCeiling(arr = [], target = 0) {
  let floor = -1;
  let ceiling = -1;

  for (let ind = 0; ind < arr.length; ind++) {

    if (arr[ind] <= target) {
      floor = arr[ind]
    }
    if (arr[ind] >= target) {
      ceiling = arr[ind]
      break;
    }
  }
  return [floor, ceiling]
}

// console.log(findFloorAndCeiling([1, 2, 8, 10, 10, 12, 19], 5))
// console.log(findFloorAndCeiling([1, 2, 8, 10, 10, 12, 19], 20))
// console.log(findFloorAndCeiling([1, 2, 8, 10, 10, 12, 19], 0))
// console.log(findFloorAndCeiling([5, 5, 5, 5], 5))
// console.log(findFloorAndCeiling([3, 6, 9, 15], 7))

// todo Find the smallest missing element in a sorted array.

function findSmallestMissing(arr = []) {
  let find = 0;
  for (let num of arr) {
    console.log(num !== find)
    console.log(num, find)
    if (find !== num) return find;
    find++
  }
  return find
}


// console.log(findSmallestMissing(  [0, 1, 2, 6, 9])); 
// console.log(findSmallestMissing([1, 2, 3, 4, 5])); 
// console.log(findSmallestMissing([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); 
// console.log(findSmallestMissing([0])); 
// console.log(findSmallestMissing([])); 
// console.log(findSmallestMissing([0, 2, 3, 4, 5, 7, 8, 9])); 
// --------------------------------------------------------------------------------

// todo Perform ternary search on a sorted array.

function ternarySearch(arr = [], target = 0) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {

    let mid1 = start + Math.floor((end - start) / 3);
    let mid2 = end - Math.floor((end - start) / 3);

    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;

    if (target < arr[mid1]) {
      end = mid1 - 1;
    } else if (target > arr[mid2]) {
      start = mid2 + 1;
    } else {
      start = mid1 + 1;
      end = mid2 - 1;
    }
  }
  return -1;
}



// console.log(ternarySearch([1, 3, 5, 7, 9, 11, 13, 15], 9))
// console.log(ternarySearch([-10, -5, 0, 3, 6, 9, 12], 0))
// console.log(ternarySearch([2, 4, 6, 8, 10, 12, 14, 16], 7))

// ---------------------------------------------------------------------------
// todo Find the index of a target in an infinite array.

function searchInInfiniteArray(getElementAt, target) {
  let start = 0;
  let end = 1;


  while (getElementAt(end) !== undefined && getElementAt(end) < target) {
    start = end;
    end *= 2;
  }


  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midValue = getElementAt(mid);

    if (midValue === undefined) {
      end = mid - 1;
    } else if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}


function getElementAt(index) {
  const infiniteArray = [1, 3, 5, 7, 9, 11, 15, 18, 21, 25, 30];

  if (index < infiniteArray.length) {
    return infiniteArray[index];
  }


  return infiniteArray[infiniteArray.length - 1] + (index - infiniteArray.length + 1) * 5;
}


// console.log(searchInInfiniteArray(getElementAt, 7));   
// console.log(searchInInfiniteArray(getElementAt, 25));  
// console.log(searchInInfiniteArray(getElementAt, 50));  
// console.log(searchInInfiniteArray(getElementAt, 100)); 

// ---------------------------------------------------------------------------------
// todo Find the minimum element in a rotated sorted array.

function findMinInRotatedArr(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    // If the mid element is smaller than the last element, min is on the left side
    if (arr[mid] < arr[end]) {
      end = mid;
    }
    // Otherwise, min is on the right side
    else {
      start = mid + 1;
    }
  }

  return arr[start]; // The minimum element
}


// console.log(findMinInRotatedArr([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMinInRotatedArr([3, 4, 5, 1, 2]));
// console.log(findMinInRotatedArr([11, 13, 15, 17]));
// console.log(findMinInRotatedArr([7, 8, 9, 1, 2, 3, 4]));
// console.log(findMinInRotatedArr([2]));
// console.log(findMinInRotatedArr([1, 2, 3, 4, 5]));

// todo Count the frequency of elements using binary search.

function frequencyOfElements(arr = [], target) {
  let left = 0, right = arr.length - 1;
  let first = -1, last = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      console.log(mid)
      if (first === -1 || mid < first) first = mid;
      if (last === -1 || mid > last) last = mid;


      let tempLeft = mid - 1, tempRight = mid + 1;

      while (tempLeft >= left && arr[tempLeft] === target) {
        first = tempLeft;
        tempLeft--;
      }

      while (tempRight <= right && arr[tempRight] === target) {
        last = tempRight;
        tempRight++;
      }

      break;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return first === -1 ? 0 : last - first + 1;
}

// console.log(frequencyOfElements([5, 5, 5, 6, 6, 7, 8], 6))

// todo Find the closest element to a target in a sorted array.

function closestElementInArr(arr = [], target = 0) {

  let start = 0;
  let end = arr.length - 1;

  let find = -1

  while (start <= end) {

    let mid = Math.floor(start + (end - start) / 2)


    if (arr[mid] === target) {
      return arr[mid]
    }

    if (
      Math.abs(arr[mid] - target) < Math.abs(find - target) ||
      (Math.abs(arr[mid] - target) === Math.abs(find - target) && arr[mid] < find)
    ) {
      find = arr[mid];
    }
    else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1
    }
  }

  return find

}


// console.log(closestElementInArr([1, 3, 5, 7, 9], 6));  
// console.log(closestElementInArr([2, 5, 8, 12], 10));  
// console.log(closestElementInArr([-3, 0, 4], -1));  
// console.log(closestElementInArr([1, 2, 4, 6, 8, 10], 5));  
// console.log(closestElementInArr([1, 3, 7, 9], 15));  
// console.log(closestElementInArr([1, 3, 6, 8], 5));  
// console.log(closestElementInArr([2, 5, 8, 12], 1));  
// console.log(closestElementInArr([1, 3, 6, 8], 7));  
// console.log(closestElementInArr([1, 3, 6, 8], 6));  


// ------------------------------------------------------------------------
// todo Implement an exponential search.

function exponentialSearch(arr = [], target = 0) {
  let n = arr.length;
  if (n === 0) return -1
  let i = 1;

  while (i <= n && arr[i] < target) {
    i *= 2;
  }

  let start = Math.floor(i / 2);
  let end = Math.max(i, n - 1)


  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1
  }

  return -1

}
// console.log(exponentialSearch([1, 3, 7, 15, 20, 25, 30, 35], 25))
// console.log(exponentialSearch([2, 4, 6, 8, 10, 12, 14, 16], 6));  
// console.log(exponentialSearch([5, 10, 15, 20, 25, 30, 35, 40], 40));  
// console.log(exponentialSearch([1, 3, 5, 7, 9, 11, 13, 15], 2));   
// console.log(exponentialSearch([10], 10));  
// console.log(exponentialSearch([10], 5));   

// todo Find the peak index in a bitonic array.

function peakIndex(arr = []) {
  let start = 0;
  let end = arr.length - 1;

  console.log(arr.length)
  console.log(end)
  if (end === -1) return -1
  if (end === 0) return 0

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2)

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

    else if (arr[mid] < arr[mid + 1]) start = mid + 1;
    else end = mid - 1

  }

  return -1
}
console.log(peakIndex([1, 3, 8, 12, 4, 2]))
console.log(peakIndex([5, 10, 20, 15, 7, 2]));
console.log(peakIndex([2, 4, 6, 8, 10, 5, 1]));
console.log(peakIndex([1, 2, 3, 4, 5, 3, 1]));
console.log(peakIndex([1, 100, 50]));

// ------------------xxxxxxxxxxxxxxx___END___xxxxxxxxxxxxxxx------------------