/**
 * Instructions
Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.

The string will denote the characters which construct the triangle, and the number denotes its height.

 */

function triangle(char,length) {
    var str = "";
    for (var i = 1; i <= length; i++) {
        if (i<length){
            str+=char.repeat(i)+"\n";
        }else{
            str+=char.repeat(i)
        }
    }
    return str;
  }

//   console.log(triangle("s", 7))