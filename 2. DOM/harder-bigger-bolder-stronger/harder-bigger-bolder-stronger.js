/**Instructions
Being stuck at home, bored, desperate and coming up with a lot of weird ideas, a friend asks you to develop a tool to measure his ocular skills. One of those Monoyer charts that ophthalmologists use.

Generate a board where each new letter is harder, bigger, bolder and stronger.

Write the function generateLetters which creates 120 div elements, each containing a letter randomly picked through the uppercase alphabet, and whose style properties have to be increased:

each letter's font-size has to grow from 11 to 130 pixels.
font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third.
 */

export const generateLetters = function () {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement('div')
        letter.innerHTML = getLetter()
        letter.style.fontSize = `${i + 11}px`
        
        if (i < 40) letter.style.fontWeight = '300'
        else if (i < 80) letter.style.fontWeight = '400'
        else letter.style.fontWeight = '600'

        document.body.append(letter)
    }
}

function getLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}