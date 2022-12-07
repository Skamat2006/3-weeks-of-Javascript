/**Instructions
Create a function named matchCron, which accepts a valid cron string, and a valid Date. Your function should return true if the pattern matches the Date.

You only need to implement numbers and *. Other complex patterns are not required.

Only valid patterns will be tested.

Example
matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
//         | | | | |
//         | | | | +- Day of the Week   (range: 1-7, 1 is Monday)
//         | | | +--- Month of the Year (range: 1-12)
//         | | +----- Day of the Month  (range: 1-31)
//         | +------- Hour              (range: 0-23)
//         +--------- Minute            (range: 0-59)
 */

function matchCron(pat, date) {
    pat = pat.split(' ')
    if (pat[0] !== '*' && date.getMinutes() !== Number(pat[0])) return false
    if (pat[1] !== '*' && date.getHours() !== Number(pat[1])) return false
    if (pat[2] !== '*' && date.getDate() !== Number(pat[2])) return false
    if (pat[3] !== '*' && date.getMonth() !== Number(pat[3]) - 1) return false

    if (Number(pat[4]) === 7) pat[4] = 0
    if (pat[4] !== '*' && date.getDay() !== Number(pat[4])) return false

    return true
}

