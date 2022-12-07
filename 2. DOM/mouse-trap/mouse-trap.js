/**Instructions
Develop a trap to capture the elements when the mouse is getting too close to the center of the page.

Create the following functions:

createCircle: make it fire on every click on the page, and create a div at the position of the mouse on the screen, setting its background to white and its class to circle.

moveCircle: make it fire when the mouse moves, and get the last circle created and makes it move along with the mouse.

setBox: which creates a box with the class box in the center of the page. When a circle is inside that box, it has to be purple (use the CSS global variable var(--purple) as its background). Once a circle enters the box, it is trapped inside and cannot escape.

Hint: Be careful, a circle cannot overlap the box which has walls of 1px. It has to be trapped strictly inside.

 */
let box
let flag = true
let x
let y
let circle
export function createCircle() {
    addEventListener("click", function() {
        circle = document.createElement("div")
        circle.className = "circle"
        if (flag) {
            circle.style.background = "white"
            circle.style.left = x
            circle.style.top = y
        } else {
            circle.style.background = 'var(--purple)'
            circle.style.left = x
            circle.style.top = y
        }
        document.body.appendChild(circle)
        flag = true
    })
}
export function moveCircle() {
    addEventListener("mousemove", e => {
        document.querySelectorAll(".circleRem").forEach((elem) => {
            elem.remove()
        })
        x = e.clientX - 25 + "px"
        y = e.clientY - 25 + "px"
        let circle = document.createElement("div")
        circle.className = "circle"
        circle.classList.add("circleRem")
        if (flag) {
            circle.style.background = "white"
        } else {
            circle.style.background = 'var(--purple)'
        }
        circle.style.left = e.clientX - 25 + "px"
        circle.style.top = e.clientY - 25 + "px"

        document.body.appendChild(circle)
        if ((e.clientX >= box.getBoundingClientRect().left + 25 && e.clientX <= box.getBoundingClientRect().right - 25) && (e.clientY >= box.getBoundingClientRect().top + 25 && e.clientY <= box.getBoundingClientRect().bottom - 25)) {
            document.querySelector(".circle").style.background = 'var(--purple)'
            flag = false
        }
        if (!flag) {
            if (e.clientX - 25 < box.getBoundingClientRect().left) {
                circle.style.left = box.getBoundingClientRect().left + "px"
                document.querySelector(".circle").style.background = 'var(--purple)'
            }
            if (e.clientX + 25 > box.getBoundingClientRect().right) {
                circle.style.left = box.getBoundingClientRect().right - 50 + "px"
                document.querySelector(".circle").style.background = 'var(--purple)'
            }
            if (e.clientY - 25 < box.getBoundingClientRect().top) {
                circle.style.top = box.getBoundingClientRect().top + "px"
                document.querySelector(".circle").style.background = 'var(--purple)'
            }
            if (e.clientY + 25 > box.getBoundingClientRect().bottom) {
                circle.style.top = box.getBoundingClientRect().bottom - 50 + "px"
                document.querySelector(".circle").style.background = 'var(--purple)'
            }
        }
    })
}
export function setBox() {
    box = document.createElement("div")
    box.className = "box"
    document.body.appendChild(box)
    console.log(box.getBoundingClientRect().bottom)
}