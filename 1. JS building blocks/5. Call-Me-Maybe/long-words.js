/**Instructions
Create three functions, which each accept an array as an argument.

longWords: returns true if every element of the array is a string with at least 5 characters.

oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.

noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.

 */

// let arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']
// let arr2 = ['double', 'afford', 'coalition', 'reaction', 'persist']
// let arr3 = ['leak', 'talk', 'bite', 'slip', 'free']
// let arr4 = ['fixture', 'opponent', 'coincide', 'residential', 'relaxation']

let longWords = (arr) => arr.every((elem) => elem.length > 4);

let oneLongWord = (arr) => arr.some((elem) => elem.length > 9);

let noLongWords = (arr) => arr.every((elem) => elem.length < 7);
// console.log(noLongWords(arr1))
// console.log(noLongWords(arr2))
// console.log(noLongWords(arr3))
// console.log(noLongWords(arr4))