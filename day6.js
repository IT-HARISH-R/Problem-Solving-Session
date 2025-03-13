// ! Day 6: Sorting Algorithms
// * Session Focus: Introduction to sorting algorithms: bubble sort, selection sort, and insertion sort.
// ! Session Practice Questions:
// ? Implement bubble sort on an array of integers.

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
}
// bubbleSort([5, 4, 3, 2, 1])
// const arr = Array.from({ length: 1000000 }, (val, ind) => ind + 1);
// arr.push(1000000 - 1);
// bubbleSort(arr);
// ? Sort an array using selection sort.
function selectionSort(arr = []) {
  for (let ind = 0; ind < arr.length; ind++) {
    let minInd = ind;

    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind1] < arr[minInd]) {
        minInd = ind1;
      }
    }

    if (minInd != ind) {
      [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]];
    }
  }
  return arr;
}
// console.log(arr);
// console.log(selectionSort(arr));
// ? Implement insertion sort on an array of integers.
function insertionSort(arr = []) {
  for (let ind = 1; ind < arr.length; ind++) {
    let curr = arr[ind];
    let ind1 = ind - 1;
    while (ind1 >= 0) {
      if (curr < arr[ind1]) {
        arr[ind1 + 1] = arr[ind1];
      } else {
        break;
      }
      ind1--;
    }
    arr[ind1 + 1] = curr;
  }
  console.log(arr);
}
// console.log(arr);
// insertionSort(arr);
// ? Sort an array of integers in descending order.
function selectionSortDESC(arr = []) {
  for (let ind = 0; ind < arr.length; ind++) {
    let maxInd = ind;

    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind1] > arr[maxInd]) {
        maxInd = ind1;
      }
    }

    if (maxInd != ind) {
      [arr[maxInd], arr[ind]] = [arr[ind], arr[maxInd]];
    }
  }
  return arr;
}
// console.log(selectionSortDESC(arr));
const arr = Array.from({ length: 9 }, () => Math.floor(Math.random() * 1000));
// console.log(arr)
// console.log(selectionSort(arr))
// console.log(arr)
// ? Find the median of a sorted array.
function findMedian(arr = []) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 == 0) {
    console.log((arr[mid] + arr[mid - 1]) / 2);
  } else {
    console.log(arr[mid]);
  }
}
// findMedian(arr);
// ? Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).
function dutch(arr) {
  let left = mid = 0;
  let right = arr.length - 1;
  console.log(left, mid, right)
  while (mid <= right) {
    if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 0) {
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      mid++;
      left++;
    } else {
      [arr[right], arr[mid]] = [arr[mid], arr[right]];
      right--;
    }
  }
  console.log(arr)
}
// dutch([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2])
// ? Sort an array of strings by their lengths.

function stringSort(arr = []) {
  for (let ind = 0; ind < arr.length; ind++) {
    let minInd = ind;
    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind1].length < arr[minInd].length) {
        minInd = ind1;
      }
    }
    if (minInd != ind) {
      [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]];
    }
  }
  return arr;
  // return arr.sort((str1, str2) => str1.length - str2.length)
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// todo Post-Session Practice Questions:

// todo Sort an array using merge sort.
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));



  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

// console.log(mergeSort([4, 2, 1, 5, 3]));
// todo Implement quicksort on an array of integers.
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  let left = [], right = [];
  console.log(arr)
  console.log(pivot)


  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(quickSort([5, 3, 8, 1, 2, 7]));


// todo Perform a bucket sort on an array of decimals.

function insertionSort(bucket) {
  for (let i = 1; i < bucket.length; ++i) {
    let key = bucket[i];
    let j = i - 1;
    while (j >= 0 && bucket[j] > key) {
      bucket[j + 1] = bucket[j];
      j--;
    }
    bucket[j + 1] = key;
  }
}

function bucketSort(arr) {
  let n = arr.length;
  let buckets = Array.from({ length: n }, () => []);;

  for (let i = 0; i < n; i++) {
    let bi = Math.floor(n * arr[i]);
    buckets[bi].push(arr[i]);
  }
  console.log(buckets)
  for (let i = 0; i < n; i++) {
    if (buckets[i].length > 1) {
      insertionSort(buckets[i]);
    }
  }

  let sortedArray = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      sortedArray.push(buckets[i][j]);
    }
  }

  return sortedArray;
}

// console.log(bucketSort([0.42, 0.32, 0.23, 0.52, 0.73, 0.91, 0.05, 0.89]));


// todo Sort an array of integers by frequency of elements.

function sortByFrequency(arr = []) {
  let frequency = {};
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1
  }
  console.log(frequency)
  return arr.sort((a, b) => {
    if (frequency[a] === frequency[b]) return a - b;
    return frequency[b] - frequency[a];
  })
}

// console.log(sortByFrequency([4, 5, 6, 5, 4, 3, 2, 2, 8, 8, 8]))

// todo Sort an array of strings lexicographically.

function lexicographically(arr = []) {
  return arr.sort()
}
// console.log(lexicographically(["banana", "apple", "grape", "cherry", "date"]))

// todo Sort a matrix row-wise and column-wise.

function sortMatrix(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;


  for (let i = 0; i < rows; i++) {
    matrix[i].sort((a, b) => a - b);
  }


  for (let j = 0; j < cols; j++) {
    let column = [];


    for (let i = 0; i < rows; i++) {
      column.push(matrix[i][j]);
    }


    column.sort((a, b) => a - b);


    for (let i = 0; i < rows; i++) {
      matrix[i][j] = column[i];
    }
  }

  return matrix;
}

let matrix = [
  [10, 20, 30],
  [5, 15, 25],
  [1, 12, 22]
];

// console.log(sortMatrix(matrix));



// todo Find the kth smallest element in an array.

function kthSmallestElement(arr = [], target = 0) {
  if (target > arr.length || target < 1) return -1
  arr = arr.sort((a, b) => a - b)
  console.log(arr)
  return arr[target - 1]
}
// console.log(kthSmallestElement([3, 1, 2, 2, 4, 3, 5], 4))
// console.log(kthSmallestElement([1, 2, 3, 4, 5], 5))
// console.log(kthSmallestElement([2, 3, 4, 5], 1))

// todo Sort an array containing negative and positive numbers, with negatives coming first.

function sortNegPosInPlace(arr = []) {
  let positive = [];
  let negative = [];

  for (let num of arr) {
    if (num < 0) negative.push(num)
    else positive.push(num)
  }
  return [...negative, ...positive]
}
// console.log(sortNegPosInPlace([-1, 2, -3, 4, 5, -6]));
// console.log(sortNegPosInPlace([4, -2, -7, 5, -3, 6]));
// console.log(sortNegPosInPlace([1, -1, 2, -2, 3, -3]));
// console.log(sortNegPosInPlace([0, -1, -2, -3, 4, 5]));

// todo Sort an array using heap sort.
function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, n, largest)
  }

}

function heapSort(arr = []) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i] = arr[i], arr[0]]
    heapify(arr, i, 0)
  }

}
let summ = [4, 2, 5, 3, 1]
console.log(summ)
heapSort(summ)
console.log(summ)


// todo Sort a nearly sorted array (where each element is at most k places away from its target position).

console.log(summ)
console.log(summ.length)
console.log(Math.floor(summ.length / 2) - 1)
console.log(2 * 0 + 1)
console.log(2 * 0 + 2)