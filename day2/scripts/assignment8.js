let yearRange = []
let result = []

function getLeapYears(start, end) {
    for (let yearToAddIntoRange = start; yearToAddIntoRange <= end; yearToAddIntoRange++) {
        yearRange.push(yearToAddIntoRange)
    }

    // forEach call function for every value, with name of each value is "year"
    yearRange.forEach(
        function (year) {
            if (testLeapYear(year)) { result.push(year) }

        }
    )
    return result
}


function testLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }

}


console.log(getLeapYears(1990, 2021))



