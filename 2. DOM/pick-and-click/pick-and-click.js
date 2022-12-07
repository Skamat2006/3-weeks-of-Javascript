/**Instructions
Today, you're going to create your own color picker.

Write the function pick which turns the screen into a hsl color picker. It will vary the hue and luminosity according to the position of the mouse.

The background color of the body will change based on the position of the mouse on the screen.

The X axis will vary the hue value between 0 and 360.
The Y axis will vary the luminosity value between 0 and 100.
You'll need to display these three values:

The full hsl value in a div, which has the class hsl in the middle of the screen.
The hue value in a div with the class hue and text in the top right corner of the screen.
The luminosity value will be displayed in the bottom left corner of the screen, in a div with the class luminosity and text.
When the mouse is clicked, the value of the hsl will need to be copied to the clipboard.

Two SVG lines with ids axisX and axisY will need to follow the cursor, like really long cross hairs.

the axisX attributes x1 and x2 need to be set to the X position of the cursor.
the axisY attributes y1 and y2 need to be set to the Y position of the cursor.
The formatting of a hsl value: hsl(45, 50%, 35%).

Use Math.round() to round the values.

 */

export const pick = (e) => {
    if (!e) return
    let hue = e.x
    let lum = e.y
    hue = Math.round(hue / window.innerWidth * 360)
    lum = Math.round(lum / window.innerHeight * 100)
    let hsl = `hsl(${hue}, 50%, ${lum}%)`

    tHue.innerHTML = `hue\n${hue}`
    tLum.innerHTML = `${lum}\nluminocity`
    tHsl.innerHTML = hsl
    axisX.setAttribute('x1', e.x)
    axisX.setAttribute('x2', e.x)

    axisY.setAttribute('y1', e.y)
    axisY.setAttribute('y2', e.y)

    document.body.style.background = hsl
    return hsl
}

document.addEventListener('mousemove', pick)

document.addEventListener('mousedown', (e) => {
    navigator.clipboard.writeText(pick(e))
})


let tHsl, tHue, tLum

let axisX, axisY
document.addEventListener("DOMContentLoaded", function (event) {
    tHsl = document.createElement('div')
    tHue = document.createElement('div')
    tLum = document.createElement('div')
    tHsl.classList.add('text')
    tHue.classList.add('text')
    tLum.classList.add('text')

    axisX = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    axisY = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    axisX.id = 'axisX'
    axisY.id = 'axisY'

    axisX.setAttribute('y1', '-10000')
    axisX.setAttribute('y2', '10000')

    axisY.setAttribute('x1', '-10000')
    axisY.setAttribute('x2', '10000')

    tHsl.classList.add('hsl')
    tHue.classList.add('hue')
    tLum.classList.add('luminosity')

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.append(axisX, axisY)

    document.body.append(tHsl, tHue, tLum, svg)

    // puppeteer clipboard bug bypass
    // let clipboardText = null;
    // window.navigator.clipboard.readText = () => new Promise(resolve => resolve(clipboardText))
    // window.navigator.clipboard.writeText = (text) => new Promise(() => clipboardText = text)

});