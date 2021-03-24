function nestedLoop(length) {
    for (let i = 1; i <= length; i++) {
        // An empty string + number -> longer string
        let lineContent = ""
        for (let j = 1; j <= i; j++) {
            lineContent += i
        }
        console.log(lineContent)
    }
}
nestedLoop(4)