/**
 * Instructions
Create a function named firstDayWeek, which accepts a specific week in a given year:

number: representing a week of the year (between 1 and 53).
string: representing a year.
Your function should return a string representing the date of the first day of that specific week in the format dd-mm-yyyy.

Week 1 is in all cases, the week which contains the 1st of January.

The first day of a week is a Monday.

If the start of the week is in the previous year, then your function should return the first day of the specified year.
 */

function firstDayWeek(week, year) {
    
    if(week==1) {
        //console.log('01-01-'+year)    
        return ('01-01-'+year);
    }

    let tempDate = new Date(year) //first date (01-01-yyyy) of the year provided

    let firstMonday = new Date(tempDate.getTime() + ((week - 1) * 7 * 24 * 60 * 60 * 1000))

    // if(year<=1000) {
    //     //console.log(firstMonday.getDay())
    //     while (firstMonday.getDay() !== 0) { // 0 is Monday somehow prior to 1000
    //         firstMonday.setDate(firstMonday.getDate() - 1)
    //     }
    //     //console.log(formatDate(firstMonday))
    //     return formatDate(firstMonday)
    // }

    while (firstMonday.getDay() !== 1) { // 1 is Monday
        firstMonday.setDate(firstMonday.getDate() - 1)
        //console.log(formatDate(firstMonday))
    }

    //console.log(formatDate(firstMonday))
    return formatDate(firstMonday)
}

function formatDate(d) {
    return d.toISOString().slice(0, 10).split('-').reverse().join('-')
}

/*
firstDayWeek(1, "1000")
firstDayWeek(52, "1000")
firstDayWeek(2, "0001")
firstDayWeek(43, "1983")
firstDayWeek(23, "0091")
firstDayWeek(2, "2017") 
*/