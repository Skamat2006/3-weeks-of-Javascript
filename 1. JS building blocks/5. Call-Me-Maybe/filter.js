/**Instructions
Create the following functions, which each take an array as the first argument, and a function as the second argument.

filter: that works like the [].filter method.

reject: that works like the reject function from lodash.

partition: that works like the partition function from lodash.

Code provided
The provided code will be added to your solution, and does not need to be submitted.

Array.prototype.filter = undefined
 */

let filter = (arr, func) => {
    const res = [];
    arr.forEach((val, index, arr) => (func(val, index, arr) ? res.push(val) : 0));
    return res;
  };


let reject = (arr, func) => {
    const res = [];
    arr.forEach((val, index, arr) => (func(val, index, arr) ? 0 : res.push(val)));
    return res;
  };
  

let partition = (arr, func) => {
    const res1 = [];
    const res2 = [];
    arr.forEach((val, index, arr) =>
      func(val, index, arr) ? res1.push(val) : res2.push(val)
    );
    return [res1, res2];
  };