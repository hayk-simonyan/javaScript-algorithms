// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()
// - do not worry about negative bases and exponents

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16


// using math.pow()
const power = (base, exponent) => {
    return console.log(Math.pow(base, exponent));
}

power(2,4)

// power iterative solution
const power2 = (base, exponent) => {
    let result = 1;
    for(let i = exponent; i > 1; i--) {
        result *= base
    }
    console.log(result)
}

// power recursive solution
const power3 = (base, exponent) => {
    // base case
    if(exponent === 0) {return 1};

    console.log(base, exponent);
    return base*power3(base, --exponent);
}

power3(2,4)


// refactored solution
function power4(base, exponent){
    return exponent === 0 ? 1 : base * power4(base, --exponent);
}