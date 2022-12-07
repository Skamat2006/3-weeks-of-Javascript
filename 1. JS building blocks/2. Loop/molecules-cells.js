/**Instructions
Create two functions which accept a string, and return a string:

RNA: that converts a DNA strand into its compliment RNA strand.
DNA: that converts an RNA strand into its compliment DNA strand.
Compliments:

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U
Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.
*/

function RNA(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            newStr += 'C'
        } else if (str[i] === 'C') {
            newStr += 'G'
        } else if (str[i] === 'T') {
            newStr += 'A'
        } else if (str[i] === 'A') {
            newStr += 'U'
        } else if(str === '') {
            return str
        }
    }
    return newStr
}

function DNA(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'C') {
            newStr += 'G'
        } else if (str[i] === 'G') {
            newStr += 'C'
        } else if (str[i] === 'A') {
            newStr += 'T'
        } else if (str[i] === 'U') {
            newStr += 'A'
        } else if (str === '') {
            return str
        }
    }
    return newStr
}

console.log(RNA("ATCG"))
console.log(DNA("ATCG"))