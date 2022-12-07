/**
 * Instructions
Create a function named flat that works like Array.flat(), except its first argument is the array.

 */

// function flat(arr) {
//     let result = []; 
//     let main = arr,
//       first;
//     while (main.length > 0) {  
//       first = main[0];
//       if (Array.isArray(first)) {
//         Array.prototype.splice.apply(main, [0, 1].concat(first));
//       } else {
//         result.push(first);
//         main.splice(0, 1);
//       }
//     }
//     return result;
// }

const flat = (arr, deep) => {
  if(!deep) {
      return arr.reduce((acc, val) => acc.concat(val), []);
  } else if (deep == 'Infinity') {
      return flatDeep(arr);
  }
  for(let i = 1; i <= deep; i++) {
      arr = arr.reduce((acc, val) => acc.concat(val), []);
  }
  return arr
}
function flatDeep(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
};

// console.log(flat([1,3,5,[6,7,[8,9]]]));