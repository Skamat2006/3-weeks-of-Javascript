/**
 * Instructions
Create a function named ionOut, that receives a string and returns an array with every word containing 'ion' following a 't'. The words should be returned without the 'ion' part.
 */

function ionOut(str){
    return str.match(/([a-z]+t)(?=ion)/gi)||[];
}

console.log(ionOut("notion"))