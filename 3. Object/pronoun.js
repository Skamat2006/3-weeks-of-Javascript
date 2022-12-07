/** Instructions
Create a function named pronoun that accepts a string parameter. This function returns an object that will have all the personal pronouns, present in the string, as keys. Each key will have a sub object with the first word after each of the personal pronouns found in the string.

You must also a count property to the sub object, with the amount of occurrences of the pronoun.

Pronouns:

    i
    you
    he
    she
    it
    they
    we
    
Example
const ex = 'Using Array Destructuring, you you can iterate through objects easily.'

{ you: { word: [ 'can' ], count: 2 } }

const ex = 'If he you want to buy something you have to pay.'

{
  he: { word: [], count: 1}
  you: { word: [ 'want', 'have' ], count: 2 }
}
*/


function pronoun(str) {
    const words = str.split(/[\s,]+/)
    const res = {}
    words.forEach((word, index) => {
        word = word.toLowerCase()
        if (isPronoun(word)) {
            if (!res[word]) res[word] = {word: [], count: 0}
            if (index !== words.length - 1 && !isPronoun(words[index + 1])) {
                res[word].word.push(words[index + 1])
            }
            res[word].count++
        }
    })
    return res
}

function isPronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they']
    for (const key in pronouns) {
        if (pronouns[key].toLowerCase() === str.toLowerCase()) return true
    }
    return false
}