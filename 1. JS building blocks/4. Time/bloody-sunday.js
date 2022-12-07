/**Instructions
Let's get rid of Sundays, by removing them from the calendar. So now a week is only 6 days in length, from "Monday" to "Saturday".

Create a function named bloodySunday which accepts a Date, and returns teh weekday as a string.

01/01/0001 is a Monday.

 */

function bloodySunday(date) {
    const firstMondayEver = new Date('0001-01-01')
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const dayNum = (date.getTime() - firstMondayEver.getTime()) / (24 * 60 * 60 * 1000)

    return daysOfWeek[dayNum % 6]
}