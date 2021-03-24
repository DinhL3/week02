let workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7]
let rate = 25
let total = 0
for (let i = 0; i < workingHours.length; i++) {
    let income = rate * workingHours[i];
    total += income
    // console.log(`Peter earned $${income} today`)

}
// console.log(`Peter earned total of $${total}`)

function getRandomHours(start = 6, end = 8) {
    return Math.floor(Math.random() * (end - start + 1) + start)
}

let workingDaysInYear = 5 * 50
let workingHoursInYear = 0;
for (let day = 0; day < workingDaysInYear; day++) {
    let todayHours = getRandomHours();
    workingHoursInYear += todayHours
}
let estimatedYearlyIncome = rate * workingHoursInYear
console.log("Peter earned a yearly estimated $", estimatedYearlyIncome)