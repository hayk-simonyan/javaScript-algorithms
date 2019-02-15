// solution
const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right)/2);
    while(left <= right && arr[middle] !== val) {
        if(arr[middle] < val) left = middle + 1;
        if(arr[middle] > val) right = middle - 1;
        middle = Math.floor((left + right)/2);
    }
    return arr[middle] === val ? console.log(middle) : console.log(-1);
}

binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20], 154)

// Original Solution
function binarySearch1(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch2(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
