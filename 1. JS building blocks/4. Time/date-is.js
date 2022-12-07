/**
 * Instructions
Create the following functions:

isValid: accepts a Date, and returns false if the Date is invalid.
isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.

 */
function isValid(date) {
    return (date !== 'Invalid Date' && !isNaN(date) && date !== '')
}
  
function isAfter(date1,date2){
    return date1>date2
}
  
function isBefore(date1,date2){
    return date1<date2
}

function isFuture(date){
    return isValid(date) && isAfter(date,Date.now())
}

function isPast(date){
    return isValid(date) && isBefore(date,Date.now())
}
