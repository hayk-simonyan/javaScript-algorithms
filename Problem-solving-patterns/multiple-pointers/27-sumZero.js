// my code - time compl---O(n^2), space compl---O(n)
const sumZero = ( arr ) => {
    const result = [];
    const checked = [];
    for ( let index in arr ) {
        checked.push(arr[index]);
        searching = 0 - arr[index];
        if ( checked.includes(searching) && searching !== 0 ) {
            console.log('in if statement');
            result.push(arr[index]);
            result.push(searching);
            return console.log(result);
        }
    }
    return console.log('undefined')
}

sumZero([-3,-1,0,2,3,4])

// colts refactored + from me --- time compl --- O(n) , space compl --- O(1)
const sumZero = arr => {
    let left = 0;
    let right = arr.length - 1;
    while ( left < right ) {
        let sum = arr[left] + arr[right];
        if ( sum === 0 ) {
            return console.log([arr[left], arr[right]]);
        } else if ( sum > 0 ) {
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])