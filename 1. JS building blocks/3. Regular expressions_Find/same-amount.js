/**
Instructions
Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.

The objective is to confirm that the regular expressions match the string the same number of times.
 */

function sameAmount(str,reg1,reg2){
    let one = new RegExp(reg1.source, reg1.flags + "g");
    let two = new RegExp(reg2.source, reg2.flags + "g");
    if (str.match(one) === null) {
      one = [];
    }
    if (str.match(two) === null) {
      two = [];
    }
    return ((str.match(one)).length === (str.match(two)).length);
}

 console.log(sameAmount(`hello sonal`, /s/, /h/))