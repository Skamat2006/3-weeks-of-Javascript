/**Instructions
Like an inspired Beethoven who's about to write his Moonlight Sonata, you're about to compose a colorful symphony of letters with your keyboard.

Write the function compose:

Make it fire every time a key is pressed.
Create a new div with the class note when a letter of the lowercase alphabet is pressed. It should have a unique background color generated using the key of the event. It should also display the corresponding pressed character.
When Backspace is pressed, delete the last note.
When Escape is pressed, clear all the notes.
 */

export const compose = (event) => {
    let key = event?.key
    let notes = document.getElementsByClassName('note')

    if (key === 'Backspace') {
        if (notes.length > 0) Array.from(notes).pop().remove()
    } else if (key === 'Escape') {
        if (notes.length > 0) {
            Array.from(document.getElementsByClassName('note')).forEach(el => {
                el.remove()
            })
        }
    } else if (key) {
        let div = document.createElement('div')
        div.classList.add('note')
        div.innerHTML = key
        document.body.append(div)
        div.style.backgroundColor = `rgb(10, ${key.charCodeAt(0)}, 10)`
    }
}

document.addEventListener('keydown', compose);