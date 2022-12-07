/**
Instructions
Create a function named letterSpaceNumber that accepts a string; returning an array with every instance of a letter, followed by a space, followed by a number, only if that number has only one digit, and is not followed by any letter.
 */

function letterSpaceNumber(str){
    let found=str.match(/. \d((?=\W)|$)/g);
    if (found!==null){
    	return found;
    }
    return [];
}

console.log(letterSpaceNumber("sonal 1"))