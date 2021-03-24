// // 2. Area of a circle
// declare a function
// function assignment1() {
//     console.log("Area of a circle")
//     var pi = 3.14
//     console.log(typeof pi)
//     var radius = 5
//     console.log(typeof radius)
//     var area = pi * radius ** 2
//     console.log("The area of a circle given the radius", radius, "(m) is", area, "(m2)")
//     var radius = 7
//     var area = pi * radius ** 2
//     var resultstring = `This is the pi: ${pi}, radius: ${radius}(m), area: ${area}(m2)`
//     console.log(resultstring)
//     return
// }
// call a function
// assignment1()


// 3. Operators & Comparison
// console.log(10+24,"= 10 + 24")
// console.log("10" + "24",'="10" + "24"')
// console.log("Hello" + " " + 2021,'= "Hello" + " " + 2021')
// console.log(1 + 2 * 3,"= 1 + 2 * 3")
// console.log((1 + 3) ** 2,"= (1 + 3) ** 2")
// console.log(1 / 0,"= 1 / 0")
// console.log(6 % 2,"= 6 % 2")
// console.log(5.5 % 2,"= 5.5 % 2")
// console.log(Number("123"),'= Number("123")')
// console.log(typeof(1 + ""),'= typeof(1 + "")')

// console.log(5 == "5",'= 5 == "5"')
// console.log(5 === "5",'= 5 === "5"')
// console.log(8 != 8.0,'= 8 != 8.0')
// console.log(8 !== 8.0,'= 8 !== 8.0')
// console.log("true" === true,'= "true" === true')
// console.log(4 <= 4.0,'= 4 <= 4.0')
// console.log(7 >= 7,'= 7 >= 7')
// console.log(true && true,'= true && true')
// console.log(true && false,'= true && false')
// console.log(true || true,'= true || true')
// console.log(false || true,'= false || true')
// console.log(!true,'= !true')
// console.log(!false,'= !false')
// console.log(false && (true || true),'= false && (true || true)')
// console.log(false && true || true,'= false && true || true')

// 4. Conditionals

// function PosNeg(x) {
//     if (x == 0) { console.log(x, "is zero") }
//     else if (x < 0) { console.log(x, "is a negative number") }
//     else { console.log(x, "is a positive number") }
//     return
// }
// PosNeg()

// function MinMax(a, b, c) {
//     if (a == b || a == b || b == c) {
//         console.log("Numbers must be unique");
//         return
//     }
// }

// MinMax(0, 0, 0)


// 5. Loops   
// function assignment5a(a, b) {
//     for (var i = a; i <= b; i++) { console.log(i) }
// }

// assignment5a(1, 99)

// function assignment5b(x, y) {
//     var sum = 0
//     for (var i = x; i <= y; i++) { sum = sum + i }
//     console.log(sum)
//     return
// }
// assignment5b(1, 10)

// function assignment5c(x) {
//     var sum = 0
//     // means while x still a number
//     while (x) {
//         sum += x % 10
//         x = Math.floor(x / 10)
//     }
//     console.log(sum)
// }

// assignment5c(6969)

// 6. Functions

// function assignment6c(myName) {
//     console.log(`My name is ${myName}`)
//     return;
// }

// assignment6c("Dinh")

// 7. Swapping values of two variables

// 9. Random number
// var res = Math.floor(Math.random() * 10)
// console.log(res)



function checkPrime(number) {
    for (let step = 2; step < number); step++) { if (number % step == 0) { return false } }
    return true;

}

console.log(checkPrime())