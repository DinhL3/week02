let userA = {
    id: 123456,
    name: "Peter Parker",
    email: "peter.parker@gmail.com",
    role: "student",
    courseId: 112233,
    tasks: []
}

// Object.keys(object1) return array of key names
console.log("Number of pairs of keys:", Math.floor(Object.keys(userA).length / 2))
console.log(typeof (userA.id))
userA.email = "pparker@gmail.com"
console.log("New email:", userA.email)
function introduction(objectName) {
    console.log("Hello, my name is", objectName.name, "and I am a", objectName.role)
}
introduction(userA)

function sortTasks(objectName) {

    console.log("Not Started:")
    for (let taskIndex = 0; taskIndex < objectName.tasks.length; taskIndex++) {
        if (objectName.tasks[taskIndex].status == "Not Started") { console.log(objectName.tasks[taskIndex].name) }
    }
    console.log("In Progress:")
    for (let taskIndex = 0; taskIndex < objectName.tasks.length; taskIndex++) {
        if (objectName.tasks[taskIndex].status == "In Progress") { console.log(objectName.tasks[taskIndex].name) }
    }
    console.log("Done:")
    for (let taskIndex = 0; taskIndex < objectName.tasks.length; taskIndex++) {
        if (objectName.tasks[taskIndex].status == "Done") { console.log(objectName.tasks[taskIndex].name) }
    }
}


// Note this one for adding object into array inside another object

function generateFakeTasks(numberOfTasks) {
    function randomStatus() {
        let status;
        let randomNumber = Math.floor(Math.random() * 3)
        if (randomNumber == 0) { status = "Not Started" } else if (randomNumber == 1) { status = "In Progress" } else { status = "Done" }
        return status
    }
    for (let taskIndex = 0; taskIndex < numberOfTasks; taskIndex++) { userA.tasks.push({ name: `Task ${taskIndex + 1}`, status: `${randomStatus()}` }) }

}

generateFakeTasks(20)
// console.log(userA.tasks)
sortTasks(userA)