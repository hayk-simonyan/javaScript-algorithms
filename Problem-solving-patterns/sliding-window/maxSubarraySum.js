// // refactored solution - 1 --- O(n)
// function maxSubarraySum(arr, n){
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < n) return null;
//     for (let i = 0; i < n; i++) {
//       maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for (let i = n; i < arr.length; i++) {
//       tempSum = tempSum - arr[i - n] + arr[i];
//       maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
//   }
  
//   maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  
// refactored solution - 2
const maxSubarraySum = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;
    for (let i = 0; i < n; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
      tempSum = tempSum - arr[i - n] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  