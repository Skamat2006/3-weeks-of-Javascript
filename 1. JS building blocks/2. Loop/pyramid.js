/**
 * Instructions
Create a function named pyramid which works just like your triangle function. But, it should be pyramid shaped.

Output example
* character and depth of 5 :
    *
   ***
  *****
 *******
*********
 */

function pyramid(char, length) {
    let result = ""
    for (let i = 1; i <= length; i++) {
      if (i < length) {
        let str = ' '.repeat(char.length*(length - i));
        let str2 = char.repeat(i * 2 - 1)
        result += str + str2+ '\n';
      } else {
        let str = ' '.repeat(char.length*(length - i));
        let str2 = char.repeat(i * 2 - 1)
        result += str + str2;
      }
    }
    return result;
}

console.log(pyramid("s", 7))