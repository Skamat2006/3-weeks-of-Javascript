/**
Instructions
Create the following functions which accept a Date:

isFriday: returns true if the Date is a Friday.
isWeekend: returns true if the Date is a weekend day.
isLeapYear: returns true if the year of the Date is a leap year.
isLastDayOfMonth: returns true if the Date represents the last day of the month.

 */

function isFriday(date){
    let d=new Date(date)
    if (d.getDay()===5){
        return true;
    }else{
        return false
    }
}

function isWeekend(date){
    let d=new Date(date)
    if (d.getDay()===6 || d.getDay()===0){
        return true;
    }else{
        return false
    }
}

function isLeapYear(date){
    let d=new Date(date)
    if (d.getFullYear()%4===0){
        return true;
    }else{
        return false
    }
}

function isLastDayOfMonth(date){
    let d=new Date(date)
    
    if (isLeapYear(d)&& d.getMonth()===1 &&  d.getDate()===29){
        return true
    }else if (!isLeapYear(d) && d.getMonth()===2 && d.getDate()===28){
        return true
    }else {
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        return d.getTime()===lastDay.getTime()
    }
}