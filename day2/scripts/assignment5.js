function getRandomInt(start, end) {
    let distance = end - start + 1
    let result = Math.floor(Math.random() * distance + start)
    return result;
}

// console.log(getRandomInt(5, 10))


function getRandomItem(itemsArray) {
    console.log("Number of items:", itemsArray.length)
    let lastIndex = itemsArray.length - 1;
    let index = getRandomInt(0, lastIndex)
    console.log(itemsArray[index]);
    return itemsArray[index]
}

getRandomItem(["a", "b", "c", "d", "e", "f"])