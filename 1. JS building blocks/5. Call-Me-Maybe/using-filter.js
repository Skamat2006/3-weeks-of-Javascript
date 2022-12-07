/**Instructions
Create the following functions:

Your solutions must use filter.

filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.

filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).

filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).

filter1DistinctVowel: accepts an array of strings, and returns only those which contain distinct vowels (a,e,i,o,u). For example, "Alabama" contains only 1 distinct vowel "a".

multiFilter: accepts an array of objects, and returns only those which:

the key capital contains at least 8 characters.
the key name does not start with a vowel.
the key tag has at least one vowel.
the key region is not "South"
 */

function filterShortStateName(arr){
    return arr.filter(element=>element.length<7)
}

function filterStartVowel(arr){
    return arr.filter(element=>/^[aeiou]/i.test(element))
}

const filter5Vowels = arr => arr.filter(word => word.match(/[aeiou]/gi).length >= 5)

const filter1DistinctVowel = array => array.filter(word => {
    let arr = word.match(/[aeiou]/gi)// this returns an array contain just the vowels contained within the string
    return arr.every(v => v.toLowerCase() === arr[0].toLowerCase())//if the slice of vowels only contains the vowel present in arr[0] return the word
})

const multiFilter = array => array.filter(obj=>{
    return obj.capital.length>=8 && /^[b-df-hj-np-tv-z]/gi.test(obj.name) && ((/[aeiouAEIOU]/g).test(obj.tag)==true) && obj.region!='South'
  })


