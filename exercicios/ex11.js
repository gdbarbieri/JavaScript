function leapYear(year){
    return testLeapYear = (year<=0) || (year % 400 == 0) || (year % 100 ==0 ) || (year % 4 == 0) ? true : false
}
console.log(leapYear(1990))