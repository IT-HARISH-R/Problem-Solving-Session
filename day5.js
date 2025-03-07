

function linearSearch(arr = [], target) {
    console.log(...arr)
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] === target) {
            return ind
        }
    }
    return -1;
}

console.log(linearSearch([8, 3, 4, 5, 6, 9, 2], 5))

function binarySearch(arr = [], target = 0) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }

    }

    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5))