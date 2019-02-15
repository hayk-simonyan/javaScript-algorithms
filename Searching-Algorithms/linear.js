// solution
const linearSearch = (arr, val) => {
    for(let value of arr) {
        if(val === value) { return console.log(arr.indexOf(val)); }
    }
    return console.log('-1')
}

linearSearch([1,5,3,9,7,81,99],99) 

// refactored solution
const linearSearch1 = (arr, val) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)