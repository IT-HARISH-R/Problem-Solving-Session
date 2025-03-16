//? Day 10: Advanced Techniques & Recap
//* Session Focus: Recap of Two-Pointer Technique, Sliding Window, Fast & Slow Pointers, and Hashing.
//? Session Practice Questions:
//! Find two numbers in a sorted array that add up to a target sum (two-pointer).
// Solution 1 -> TC O(n**2) -> SC O(n)
// function targetSum(arr = [], target = 0) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return [-1, -1];
// }

// Solution 1.1 -> TC -> O(n**2) -> SC-> O(1) -> Solution 1 and 1.1 both are same
// function targetSum(arr = [], target = 0) {
//     for (let ind = 0; ind < arr.length; ind++){
//         let anotherVal = target - arr[ind];
//         for (let j = ind + 1; j < arr.length; j++){
//             if (arr[j] == anotherVal){
//                 return [ind, j];
//             }
//         }
//     }
//     return [-1, -1];
// }

// Solution 2 -> TC -> O(n) -> SC -> O(n) -> HashMap

// function targetSum(arr = [], target = 0) {
//   let map = {};
//   for (let ind = 0; ind < arr.length; ind++) {
//     let anotherVal = target - arr[ind];
//     if (map[anotherVal] !== undefined) {
//       return [map[anotherVal], ind];
//     }
//     map[arr[ind]] = ind;
//   }
//   return [-1, -1];
// }

// Solution 3 -> Only for Sorted Arrays -> TC -> O(n) -> SC -> O(1)
function targetSum(arr = [], target = 0) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (currSum == target) {
      return [left, right];
    } else if (currSum > target) {
      right--;
    } else if (currSum < target) {
      left++;
    }
  }
  return [-1, -1];
}

const arr = Array.from({ length: 100 }, (_, i) =>
  Math.floor(Math.random() * 1000)
).sort((a, b) => a - b);

// console.log(
//   targetSum(
//     arr,
//     arr[Math.floor(Math.random() * 100)] +
//       arr[Math.floor(Math.random() * 100)] +
//       Math.floor(Math.random() * 50)
//   )
// );
//! Find the first non-repeating character in a string (hashing).
// O(1), O(logn), O(nk) or O(nm), O(nlogn), O(n**2), O(n**3), O(n!)
// TC -> O(n) -> SC -> O(n)
function firstNonRepeatingChar(str = "") {
  if (str == "") return -1;
  const map = {}; // O(n)
  for (const char of str) {
    // O(n)
    if (map[char] == undefined) {
      map[char] = 1;
    } else {
      map[char] += 1; // map[char] = map[char] + 1;
    }
  }
  for (let ind = 0; ind < str.length; ind++) {
    //O(n)
    if (map[str[ind]] == 1) {
      return ind;
    }
  }
  return -1;
}
// console.log(
//     firstNonRepeatingChar("abracadabra")
// )
//! Find the length of the longest substring without repeating characters (sliding window).
function longestSubstringWithoutRepeating(str = "") {
  if (str == "") return 0;
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let set = new Set();
  while (right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right]);
      right++;
      maxLen = Math.max(maxLen, set.size);
    } else {
      while (set.has(str[right])) {
        set.delete(str[left]);
        left++;
      }
    }
  }
  return maxLen;
}
// console.log(longestSubstringWithoutRepeating("abracadabra"));
//! Find the maximum sum of a subarray of size k (sliding window).
function maxSumSubarray(arr = [], k = 0) {
  if (arr.length < k || arr.length == 0 || k == 0) return 0;
  let maxSum = -Infinity;
  let currSum = 0;
  for (let ind = 0; ind < k; ind++) {
    currSum += arr[ind];
  }
  maxSum = Math.max(maxSum, currSum);
  for (let ind = k; ind < arr.length; ind++) {
    currSum = currSum + arr[ind] - arr[ind - k];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
// console.log(maxSumSubarray([-4, -2, -3, 5, -7, -4], 3));
//! Find the longest subarray with a sum equal to k (sliding window).
function longestSubArrayWithSumK(arr = [], k = 0) {
  if (arr.length == 0) return -1;
  let longestSubArray = [];
  let prefixSum = {};
  let currSum = 0;
  prefixSum[0] = -1;
  for (let ind = 0; ind < arr.length; ind++) {
    currSum += arr[ind];
    if (prefixSum[currSum - k] != undefined) {
      let subArraylen = ind - prefixSum[currSum - k];
      if (longestSubArray.length < subArraylen) {
        longestSubArray = arr.slice(prefixSum[currSum - k] + 1, ind + 1);
      }
    }
    if (prefixSum[currSum] == undefined) {
      prefixSum[currSum] = ind;
    }
  }
  return longestSubArray.length > 0 ? longestSubArray : -1;
}
// console.log(longestSubArrayWithSumK([1, -1, 5, -2, 3], 3)); // Output: [1, -1, 5, -2]
// console.log(longestSubArrayWithSumK([1, 2, 3, 4, 5], 11)); // Output: [3, 4, 5]
// console.log(longestSubArrayWithSumK([1, 2, 3], 7)); // Output: -1
// console.log(longestSubArrayWithSumK([], 5)); // Output: -1
// console.log(longestSubArrayWithSumK([1, 2, 3, -1, -2, 4], 5)); // Output: [1, 2, 3, -1]

//! Check if a permutation of one string is a substring of another (hashing).

function checkInclusion(s1 = "", s2 = "") {
  if (s2.length > s1.length) return false;
  let map1 = Array(26).fill(0);
  let map2 = Array(26).fill(0);

  for (let ind = 0; ind < s2.length; ind++) {
    map1[s1.charCodeAt(ind) - 97]++;
    map2[s2.charCodeAt(ind) - 97]++;
  }
  console.log(map1.join("")); //guvi
  console.log(map2.join("")); //give
  if (map1.join("") == map2.join("")) return true;
  for (let ind = s2.length; ind < s1.length; ind++) {
    map1[s1.charCodeAt(ind) - 97]++;
    map1[s1.charCodeAt(ind - s2.length) - 97]--;
    console.log("----------");
    console.log(map1.join(""));
    console.log(map2.join(""));
    if (map1.join("") == map2.join("")) return true;
  }
  return false;
}

// console.log(checkInclusion("guvigeeks", "give")); //vige

// ----------------------------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$---------------------------------------------------------

// // todo Post-Session Practice Questions:

//! Find all triplets in an array that sum up to zero (two-pointer).

function threeSum(arr = []) {
  arr.sort((a, b) => a - b);

  let result = [];


  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right]

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;

        left++;
        right--;
      }
      else if (sum < 0) {
        left++;
      }
      else {
        right--;
      }

    }
  }


  return result

}

// console.log(threeSum([-1, 0, 1, 2, -1, -4])); 


//! Find the maximum length of a subarray with equal 0s and 1s (sliding window).

function maxLengthEqual01(arr = []) {
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j] === 0 ? -1 : 1;

      if (sum === 0) {
        maxLength = Math.max(maxLength, j - i + 1)
      }

    }
  }

  return maxLength;
}

// console.log(maxLengthEqual01([0, 1]));
// console.log(maxLengthEqual01([0, 1, 0]));
// console.log(maxLengthEqual01([0, 0, 1, 0, 1, 1]));
// console.log(maxLengthEqual01([1, 1, 1, 0, 0]));
// console.log(maxLengthEqual01([1, 1, 1, 1]));
// console.log(maxLengthEqual01([0, 0, 0, 0]));
// console.log(maxLengthEqual01([0, 1, 0, 1, 0, 1]));



// // todo Merge two sorted arrays without using extra space (two-pointer).

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }

  return [...result, ...left.slice(i), ...right.slice(j)]

}
function mergeTwoArr(arr1 = [], arr2 = []) {
  const arr = [...arr1];

  for (let num of arr2) {
    arr.push(num);
  }
  return mergeSort(arr)
}
// console.log(mergeTwoArr([5, 2, 3,], [8, 1, 0. - 2, -5, -1, 0]))

// // todo Find the first missing positive integer in an array (hashing).

function firstMissingPositive(arr = []) {
  let arrSet = new Set(arr)

  console.log(arrSet)
  console.log(arrSet.has(3))

  for (let i = 1; i <= arr.length; i++) {
    if (!arrSet) {
      return i;
    }
  }

  return arr.length + 1;
}

// console.log(firstMissingPositive([3, 4, -1, 1])); 
// console.log(firstMissingPositive([1, 2, 0]));     
// console.log(firstMissingPositive([7, 8, 9, 11])); 
// console.log(firstMissingPositive([3, 4, -1, 1])); 
// console.log(firstMissingPositive([1, 2, 0])); 
// console.log(firstMissingPositive([7, 8, 9, 11, 12])); 
// console.log(firstMissingPositive([1, 2, 3, 4, 5])); 


// // todo Count the number of subarrays with a sum equal to zero (sliding window).

function countZeroSumSubarrays(nums) {
  let sumFrequency = new Map();
  let prefixSum = 0, count = 0;

  sumFrequency.set(0, 1);
  for (let num of nums) {
    prefixSum += num;

    if (sumFrequency.has(prefixSum)) {

      count += sumFrequency.get(prefixSum);
    }

    sumFrequency.set(prefixSum, (sumFrequency.get(prefixSum) || 0) + 1);
  }

  return count;
}


// console.log(countZeroSumSubarrays([1, -1, 2, -2, 3]));
// console.log(countZeroSumSubarrays([0, 0, 0, 0]   ));
// console.log(countZeroSumSubarrays( [4, -2, -2]  ));

// console.log(countZeroSumSubarrays([1, 2, -3, 3, 1, -4, 2, 2]));
// console.log(countZeroSumSubarrays([3, 4, -1, 1]));
// console.log(countZeroSumSubarrays([3, 4, -7, 5, -6, 2]));


// // todo Check if an array contains duplicate elements within k distances (sliding window).

function containsNearbyDuplicate(nums, k) {
  let map = new Set();

  for (let i = 0; i < nums.length; i++) {

    if (map.has(nums[i])) return true;

    map.add(nums[i]);

    if (map.size > k) map.delete(nums[i - k])

  }

  return false;

}

// console.log(containsNearbyDuplicate([4, 5, 6, 7, 8,], 3))
// console.log(containsNearbyDuplicate([1], 1))
// console.log(containsNearbyDuplicate([1, 2, 3, 4, 5], 3))
// console.log(containsNearbyDuplicate([1, 1, 1, 1, 1], 2))
// console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 10))

// // todo Find the longest mountain in an array (two-pointer).

function longestMountain(arr) {
  let n = arr.length;
  let maxLength = 0;
  let i = 1;

  while (i < n - 1) {

    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      let left = i - 1;
      let right = i + 1;

      while (left > 0 && arr[left - 1] < arr[left]) left--;

      while (right < n - 1 && arr[right] > arr[right + 1]) right++;

      maxLength = Math.max(maxLength, right - left + 1);

      i = right;
    } else {
      i++;
    }
  }

  return maxLength;
}

// console.log(longestMountain([2, 1, 4, 7, 3, 2, 5, 6, 7, 8, 4, 3]))
// console.log(longestMountain([1, 2, 3, 4, 5]))
// console.log(longestMountain([1, 2, 1]))


// // todo Sort an array by the parity of elements (two-pointer).

function sortArrayByParity(arr = []) {
  let left = 0, right = arr.length - 1;

  while (left < right) {

    if (arr[left] % 2 == 1 && arr[right] % 2 == 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
    }
    if (arr[left] % 2 == 0) left++;
    if (arr[right] % 2 == 1) right--;

  }
  return arr;
}

// console.log(sortArrayByParity([3, 1, 2, 4])); 
// console.log(sortArrayByParity([9, 7, 5, 3]));
// console.log(sortArrayByParity([0, 2, 1, 4])); 
// console.log(sortArrayByParity([2, 4, 6, 8])); 
// console.log(sortArrayByParity([1, 3, 5]));   



// // todo Find all pairs in an array with a difference equal to a target value (two-pointer).

function findPairsWithDifference(arr = [], target = 0) {
  arr.sort((a, b) => a - b);
  let result = [];

  let left = 0, right = 1;
  while (right < arr.length) {
    let sum = arr[right] - arr[left];

    if (sum === target && left !== right) {
      result.push([arr[left], arr[right]]);
      left++;
      right++;
    }
    else if (sum < target) {
      right++;
    } else {
      left++
    }

  }
  return result;
}

// console.log(findPairsWithDifference([1, 5, 3, 4, 2], 2));
// console.log(findPairsWithDifference([8, 12, 16, 4, 0, 20], 4));
// console.log(findPairsWithDifference([1, 2, 3, 4, 5], 1));
// console.log(findPairsWithDifference([10, 20, 30, 40], 15));
// console.log(findPairsWithDifference([5, 1, 5, 1], 4));


// // todo Find the longest subarray with at most two distinct characters (sliding window).

function longestSubarrayWithTwoDistinct(arr) {
  let left = 0, right = 0, maxLength = 0;
  let freq = new Map();

  while (right < arr.length) {
    // Expand the window by adding the rightmost character
    freq.set(arr[right], (freq.get(arr[right]) || 0) + 1);

    // If the window has more than 2 distinct elements, shrink from left
    while (freq.size > 2) {
      freq.set(arr[left], freq.get(arr[left]) - 1);
      if (freq.get(arr[left]) === 0) {
        freq.delete(arr[left]); // Remove character from map if frequency is zero
      }
      left++; // Shrink window
    }

    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
    right++; // Expand window
  }

  return maxLength;
}

// console.log(longestSubarrayWithTwoDistinct([1, 2, 1, 2, 3]));  
// console.log(longestSubarrayWithTwoDistinct([4, 4, 4, 5, 5, 6, 6, 6]));
// console.log(longestSubarrayWithTwoDistinct([1, 2, 3, 4, 5]));  
// console.log(longestSubarrayWithTwoDistinct([1, 1, 1, 1, 1]));  
// console.log(longestSubarrayWithTwoDistinct([0, 1, 2, 2]));  
// console.log(longestSubarrayWithTwoDistinct([]));  


// // todo Find the first non-repeating element in a stream of characters (hashing).

function firstNonRepeatingStream(S) {
  let count = {};
  let queue = [];
  let result = "";

  for (let char of S) {
    count[char] = (count[char] || 0) + 1;


    if (count[char] === 1) {
      queue.push(char);
    }


    while (queue.length > 0 && count[queue[0]] > 1) {
      queue.shift();
    }

    result += queue.length > 0 ? queue[0] : -1;
  }

  return result;
}
// console.log(firstNonRepeatingStream("aabc"));
// console.log(firstNonRepeatingStream("zzzyzx"));
// console.log(firstNonRepeatingStream("abacabad"));


// // todo Merge two sorted arrays without using extra space (two-pointer).

function mergeTwoSortArr(arr1 = [], arr2 = []) {

  let n = arr1.length, m = arr2.length;
  let i = n - 1, j = 0;

  while (i >= 0 && j < m) {
    if (arr1[i] > arr2[j]) {
      [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
    }
    i--;
    j++;
  }

  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)

  return [arr1, arr2]

}

// console.log(mergeTwoSortArr([1, 3, 5, 7], [2, 4, 6])); 
// console.log(mergeTwoSortArr([10, 12, 14, 16, 18], [1, 3, 8, 20])); 
// console.log(mergeTwoSortArr([5, 6, 7, 8], [1, 2, 3, 4])); 
// console.log(mergeTwoSortArr([1, 2, 3], [4, 5, 6])); 
// console.log(mergeTwoSortArr([2, 5, 7, 9], [1, 3, 6, 8])); 
// console.log(mergeTwoSortArr([100, 200, 300], [10, 20, 30])); 

// // todo Find the largest subarray with a sum less than or equal to a given value (sliding window).

function maxSubarrayLength(arr, S) {
  let start = 0, sum = 0, maxLength = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];


    console.log(sum)
    while (sum > S) {
      sum -= arr[start];
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// console.log(maxSubarrayLength([3, 1, 2, 1, 4, 5, 1, 1], 7)); 
// console.log(maxSubarrayLength([1, 2, 3, 4, 5], 9)); 
// console.log(maxSubarrayLength([5, 1, 1, 1, 1, 1, 1], 5)); 
// console.log(maxSubarrayLength([10, 20, 30, 40], 25)); 
// console.log(maxSubarrayLength([1, 1, 1, 1, 1, 1], 3));
// console.log(maxSubarrayLength([5, 10, 15, 20, 25], 50));
// console.log(maxSubarrayLength([100, 200, 300], 50)); 
// console.log(maxSubarrayLength([2, 3, 1, 2, 4, 3], 7));
// console.log(maxSubarrayLength([], 10)); 
// console.log(maxSubarrayLength([5], 5)); 


// ------------------xxxxxxxxxxxxxxx___END___xxxxxxxxxxxxxxx------------------