

function linearSearch(arr = [], target) {
    console.log(...arr)
    for (let ind = 0; ind < arr.length; ind++) {
        if(arr[ind]===target){
            return ind
        }
    }
    return -1;
}

console.log(linearSearch([8, 3, 4, 5, 6, 9, 2], 5))