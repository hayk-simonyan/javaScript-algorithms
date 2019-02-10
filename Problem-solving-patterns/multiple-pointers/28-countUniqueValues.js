// my code --- O(n)
const countUniqueValues = arr => {
    let i = 0;
    let j = 1;
    while ( j < arr.length ) {
        if ( arr[i] !== arr[j] ) {
            i++;
            arr[i] = arr[j];
        } 
        j++;
    }
    console.log(arr);
    return console.log(i+1);
}

countUniqueValues([1,1,1,2,3,3,4,4,5,6,44]);

countUniqueValues([]);

//colts solution --- O(n)
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

countUniqueValues([1,2,2,5,7,7,99])

// my refactored colts solution --- O(n)
const countUniqueValues = arr => {
    if(arr.length === 0) return console.log(0);
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return console.log(i + 1);
}

countUniqueValues([1,2,2,5,7,7,99])