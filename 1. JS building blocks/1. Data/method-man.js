/**INSTRUCTIONS
 Write 5 functions:

    words: that takes a string, splits it by spaces, and returns an array of those substrings.
    sentence: that takes an array of strings, and joins them with spaces to return a single string.
    yell: that takes a string and returns it in upper case.
    whisper: that takes a string and returns it in lower case, surrounded by *.
    capitalize: that takes a string and transforms it so that the first character is upper case, and the subsequent characters are lower case.
 */

function words(text){
    let array =  text.split(' ');
    return array;
}
// console.log(words("hello world"))

function sentence(arr){
  let array = arr.join(' ');
  return array
}
// console.log(sentence(["hello", "world"]))

function yell(str){
    let string = str.toUpperCase()
    return string
}
// console.log(yell("hello"))

function whisper(str){
    let string = str.toLowerCase()
    return '*' + string + '*'
}
// console.log(whisper("HELLO"))

function capitalize(str){
    // return words(str)
    //     .map((a)=> a
    //         .split('')
    //         .map((char, i) => i === 0 ? char.toUpperCase() : char)
    //         .join(""))
    //     .join(" ");

    let split = words(str[0].toUpperCase()) + str.toLowerCase().substr(1)
    // const result = split.map(x => x[0].toUpperCase()+x.substr(1))
    return split
}

// console.log(capitalize('hello WORLD'))