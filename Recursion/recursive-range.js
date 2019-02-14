// Write a function called recursiveRange which accepts a number and
// adds up all the numbers from 0 to the number passed to the function

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// recursive solution
const recursiveRange = n => {
    if(n === 0) {return 0}
    return n + recursiveRange(--n)
}

recursiveRange(6)
 
// refactored recursive solution
function recursiveRangeRef(num){
    return num === 1 ? 1 : num + recursiveRangeRef(--num);
}