/**Instructions
You've been given the task of finding the main architect of the Tower of Pisa before he achieves his plans; avoiding all those lame pictures of people pretending to stop it from falling.

You arrive at the architects' chamber, but all you have in front of you is a bunch of unknown people.

Step by step, gather information and figure out by elimination who he is.

Launch the provided HTML file in the browser to begin your investigation.

At the top of the webpage, each of the four buttons fires a function:

Complete the body of the following functions. The first three functions return an array containing two arrays of HTML elements:

getArchitects:

1st array: the architects, all corresponding to a <a> tag.
2nd array: all the non-architects.

getClassical:

1st array: the architects belonging to the classical class.
2nd array: the non-classical architects.

getActive:

1st array: the classical architects who are active in their class.
2nd array: the non-active classical architects.

The last function is getBonannoPisano. It returns an array containing:

the HTML element of the architect you're looking for, whose id is BonannoPisano.
an array containing all the remaining HTML elements of active classical architects.

From now on, don't forget to export all the expected functions, so that they can be imported to be tested.

export const getArchitects = () => {...}

Files
You only need to create & submit the JS file get-them-all.js. We're providing you the following files to download. You may test them locally:

the HTML file get-them-all.html to open in the browser, which includes:

    the JS script running some code, and which will allow you to run your code.
    some CSS pre-styled classes: feel free to use those as they are, or modify them.
    an import of the data.

the data file get-them-all.data.js used to generate content in the HTML.

 */

export const getArchitects = () => {
    let architects = Array.from(document.body.getElementsByTagName('a'))
    let others = Array.from(document.body.getElementsByTagName('span'))
    return [architects, others]
}

export const getClassical = () => {
    let architects = getArchitects()[0]
    let classical = architects.filter(el => el.classList.contains('classical'))
    let others = architects.filter(el => !classical.includes(el))

    return [classical, others]
}

export const getActive = () => {
    let classical = getClassical()[0]
    let active = classical.filter(el => el.classList.contains('active'))
    let others = classical.filter(el => !active.includes(el))

    return [active, others]
}


export const getBonannoPisano = () => {
    return [document.getElementById('BonannoPisano'), getActive()[0]]
}

