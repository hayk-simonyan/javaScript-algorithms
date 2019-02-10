my solution --- O(n)
const validAnagram = ( str1, str2 ) => {
    if ( str1.length !== str2.length ) {
        return console.log('false')
    } 
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for ( let key in frequencyCounter1 ) {
        if ( !(key in frequencyCounter2) ) {
            return console.log('false')
        }
        if ( frequencyCounter1[key] !== frequencyCounter2[key] ) {
            return console.log('false')
        }
        return console.log('true')
    }

}

validAnagram('gago', 'oakg')

colts solution --- O(n)
function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')

// my refactored colts solution --- O(n)
const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return console.log('false')
    }
  
    const lookup = {};
  
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return console.log('false')
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return console.log('true')
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagram', 'nagaram')