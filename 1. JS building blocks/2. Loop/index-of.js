/**INSTRUCTIONS
Create 3 functions which accept an array to be searched, and a value to be matched.

    indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
    lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
    includes: which returns true if the value was found in the array, and false otherwise.

    Of course you must not use any of Array.indexOf(), Array.lastIndexOf() or Array.includes(). 
 */

//const indexOf = (arr) => arr[0]

function indexOf(arr, val, index = 0) {
    for (let i = index; i < arr.length; i++) {
    if (arr[i] == val) {
        return i;
    }
    }
    return -1;
}
// console.log(indexOf(["arnold", "natasha",'alexandra']))

function lastIndexOf(arr, val, index = arr.length - 1) {
    for (let i = index; i >= 0; i--) {
    if (arr[i] === val) {
        return i;
    }
    }
    return -1;
}
//console.log(lastIndexOf(["c", "b", "c"], "c", 1));

function includes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
        return true;
    }
    }
    return false;
}
/*
const includes = (array, val) => {
    for (const value of array) {
        if (value === val) {
        return true;
        }
    }
    return false;
    };
*/
//console.log(includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 3));