/**
Instructions
Create a function named chunk which accepts an array and an integer representing a size.

Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.

If the array cannot be split evenly, the last sub-array will contain the remaining elements.
 */

function chunk(arr, chunkSize) {
    if (chunkSize <= 0) throw "Invalid chunk size";
    var result = [];
    for (let i=0,len=arr.length; i<len; i+=chunkSize)
    result.push(arr.slice(i,i+chunkSize));
    return result;
}


// console.log(chunk(["orange","pear", "banana", "apple", "mango", "pineapple"], 5 ) );