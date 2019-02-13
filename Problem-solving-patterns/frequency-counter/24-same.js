// solution -1 -- code only works if arrays sorted
// const same = ( arr1, arr2 ) => {
//     let result = 0;
//     if ( arr1.length = arr2.length ) {
//         for ( i = 0; i < arr1.length; i++ ) {
//             if ( arr1[i] === Math.sqrt(arr2[i]) ) {
//                 result++;
//             }
//         }
//     }
//     if ( result === arr1.length ) {
//         return console.log('true');
//     }
//     return console.log('false');
// };


// same( [1,2,3], [1,4,9] );

// // naive solution - 2 --- O(n^2)
// function same ( arr1, arr2 ) {
//     if ( arr1.length !== arr2.length ) {
//         return false;
//     }
//     for ( let i = 0; i < arr1.length; i++ ) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2 )
//         if ( correctIndex === -1 ) {
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

// same([1,2,3], [9,1,4]);

// // refactored solution - 3 --- O(n)
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1){
//         if(!(key ** 2 in frequencyCounter2)){
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }

// same([1,2,3,2,5], [9,1,4,4,11])


// refactored solution - 4 --- O(n)
const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return console.log('false');
    }
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)){
            return console.log('false');
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return console.log('false');
        }
    }
    return console.log('true');
}

same([1,2,3,2], [9,1,4,4])