/**Instructions
Today, your mission is to build a 3-column brick tower, maintain it and finally break it.

Create a function build which will create and display the amount of bricks passed as argument:

each brick has to be created as a div and added to the page at a regular interval of 100ms.
each brick will receive a unique id property, like the following:
<div id="brick-1"></div>
each brick in the middle column has to be set with the custom data attribute foundation, receiving the value true.
Each one of the two emojis in the top-right corner fires a function on click:

🔨: triggers the function repair. Write the body of that function. It receives any number of ids. For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.
🧨: triggers the destroy function. Write the body of that function. It removes the current last brick in the tower.
 */

export const build = function (num) {
    let id = 1

    const createBlock = () => {
        let block = document.createElement('div')
        block.id = `brick-${id}`
        if ((id + 1) % 3 === 0) {
            block.dataset.foundation = 'true'
        }
        document.body.append(block)
        if (id === num) clearInterval(interval)
        id++
    }

    let interval = setInterval(createBlock, 100)

}

export const repair = function (...e) {
    let ids = document.body.dataset.reparations.split(',')
    ids.forEach(id => {
        let el = document.getElementById(id)
        if (el && el.hasAttribute('data-foundation')) {
            el.dataset.repaired = 'in progress'
        } else if (el) el.dataset.repaired = 'true'
    })
}

export const destroy = function () {
    let lastBlock = Array.from(document.body.getElementsByTagName('div')).reverse()[0]
    if (lastBlock) lastBlock.remove()
}