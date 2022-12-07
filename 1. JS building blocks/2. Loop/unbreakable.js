/**
Instructions
Implement 2 functions:

split that works like String.split, but takes the string as its first argument.

join that works like Array.join, but take the array as its first argument.

 */

function split(str, splitter) {
    let tempArray = [];
    let tempStr = "";
    let checkStr = "";
    if (splitter == '') {
      for (let i = 0; i < str.length; i++) {
        tempStr += str[i];
        tempArray.push(str[i]);
        tempStr = "";
      }
      return tempArray;
    }
    if (splitter == undefined||str=='') {
      tempArray.push(str);
      return tempArray;
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] == splitter[0] && i < str.length - 1) {
        for (let j = i; j < i + splitter.length; j++) {
          checkStr += str[j]
        }
        if (checkStr != splitter) {
          tempStr += str[i];
          checkStr = ""
        } else {
          tempArray.push(tempStr);
          tempStr = "";
          checkStr = "";
          i = i + (splitter.length - 1);
          if (i >= str.length - 1) {
            tempArray.push(tempStr);
            return tempArray;
          }
        }
      } else if (i == str.length - 1) {
        if (str[i] == splitter) {
          tempArray.push(tempStr);
          tempArray.push('')
          return tempArray;
        } else {
          tempStr += str[i];
          tempArray.push(tempStr);
          tempStr = "";
        }
      } else {
        tempStr += str[i]
      }
    }
    return tempArray;
}

function join(arr, char) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      str += arr[i];
      if (i !== arr.length - 1) {
        str += char;
      }
    }
    return str;
}

// console.log(split("sonal kamat is a great dev !", " "))
// console.log(join(["sonal","kamat","is","a","great","dev","!"], " "))