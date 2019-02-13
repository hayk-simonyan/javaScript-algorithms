/***    Frequency Counter    ***/ 

// Write a function called sameFrequency
// Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

//  sameFrequency(182, 281) // true
//  sameFrequency(34, 14) // false
//  sameFrequency(3589578, 5879385) // true
//  sameFrequency(22, 222) // false

// solution - 1
const  sameFrequency = (int1, int2) => {
    let str1 = int1.toString();
    let str2 = int2.toString();

    if(str1.length !== str2.length) {
        return console.log('false')
    }

    frequencyCounter1 = {};
    frequencyCounter2 = {};

    for(let value of str1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    }
    
    for(let value of str2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return console.log('false');
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return console.log('false');
        }
        return console.log('ture');
    }

    
    console.log(frequencyCounter1, frequencyCounter2);
    console.log(str1, str2);
}


sameFrequency(345, 453)



// solution - 2
function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();
    
    if(num1.length !== num2.length) return false;

    let freqCount1 = {},
        freqCount2 = {};
    
    for(let val of num1) {
        freqCount1[val] = (freqCount1[val] || 0) + 1;
    }
    for(let val of num2) {
        freqCount2[val] = (freqCount2[val] || 0) + 1;
    }
    
    for(let key in freqCount1) {
        if(freqCount1[key] !== freqCount2[key]) {
            return false;
        }
    }

    return true;
}