// Write a function factorial which accepts a number and returns the factorial
// of that number. A factorial is the product of an integer and all the integers
// bellow it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 
// equals 24. factorial zero (0!) is always 1;

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// iterative solution
const factorial = num => {
    let multiply = 1;
    for(let i = num; i >= 1; i--) {
        multiply *= i;
    }
    return console.log(multiply);
}

// factorial(3);

// recursive solution
let total = 1;
const factorialRec = n => {
    console.log(total, n)
    // base case
    if(n === 1) return console.log(total);;
    // different input
    total *= n;
    n--;
    factorialRec(n);
}

// factorialRec(3)


// refactored recursive solution
function factorialRef(number) {
    if(number === 1) return 1;
    return number * factorialRef(number-1);
}

// factorialRef(4)

// function factorial(num){
//     return num === 0 ? 1 : num * factorial(--num);
//  }