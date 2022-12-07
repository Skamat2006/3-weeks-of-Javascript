/**
 * Instructions
Create a function named groupPrice, that can find prices in a given string.

Your function will return 2D array with the full price breakdown.

If there is no match, your function should return an empty array.

Example
Given price of USD12.31:

[["USD12.31", "12", "31"]]

 */

function groupPrice(str) {
    let reg = /(USD|\$)[\d]{1,2}.[\d]{1,2}/g
    let prices = str.match(reg) || []
    for (const i in prices) {
        let num1 = prices[i].match(/(?<=(USD|\$))\d+(?=.)/g)
        let num2 = prices[i].match(/(?<=.)\d+$/g)
        prices[i] = [prices[i], num1[0], num2[0]]
    }
    return prices
}

console.log(groupPrice("Given price of USD12.31"))