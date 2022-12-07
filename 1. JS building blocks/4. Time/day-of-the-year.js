
/**Instructions
Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.
 */


function dayOfTheYear(date) {
    let firstDayOfYear = new Date(date)

    firstDayOfYear.setDate(1)
    firstDayOfYear.setMonth(0)

    //console.log(date)
    //console.log(firstDayOfYear)

    return 1 + Math.round((date.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000))
}

/*
console.log(dayOfTheYear(new Date('0001-01-01')))
console.log(dayOfTheYear(new Date('1664-08-09')))
console.log(dayOfTheYear(new Date('1600-12-31')))
console.log(dayOfTheYear(new Date('2020-06-22')))
console.log(dayOfTheYear(new Date('2048-12-08')))
console.log(dayOfTheYear(new Date('2048-11-08')))
*/