// Write a function called productOfArray which takes in an array of numbers 
// and returns the product of them all

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// iterative solution
const productOfArray = arr => {
    result = 1;
    for(let val of arr) {
        result *= val
        console.log(val)
    }
    return console.log(result)
}

// recurcive solution
const productOfArray1 = arr => {
    if(arr.length === 0) {return 1}
    return arr[0] * productOfArray1(arr.slice(1))
}

// recursive solution2
function productOfArray2(arr) {
    return arr.length === 0 ? 1 : arr[0] * productOfArray2(arr.slice(1));
}


productOfArray2([2,5,5])