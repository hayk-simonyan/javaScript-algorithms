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
const factorialRef => (number) {
    if(number === 1) return 1;
    return number * factorialRef(number-1);
}

// factorialRef(4)