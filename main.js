let animals = ["cats", "dogs", "monkeys"]
let colors = ["white", "black", "red"]

// pushing an item in an array. The push method pushes an item at the end of the array
animals.push("lion")
// console.log(animals)

// The pop method removes an item from the end
colors.pop()
// console.log(colors)

// The shift method removves from the start
animals.shift()
// console.log(animals)

// The unshift adds an item to the start
colors.unshift("purple")
// console.log(colors)

// The includes method return true if an item is in the array or false if not
animals.includes("dogs")
// console.log(animals)

// Joining two arrays
let arrayJoin = animals.concat(colors)
// console.log(arrayJoin)

// returns the index or position number in an array
arrayJoin.indexOf("blue")
// console.log(arrayJoin)

// The slice mathod copies an array
let names = ["brandon", "boris", "roger", "obi", "salim", "lucas"]
let cut = names.slice(2)
// console.log(cut)

let slicing = names.slice(0,3)
// console.log(slicing)

// The splice method changes the contents of an array by removing/replacing an existing elements and/or adding elements in place
var month = ["jan", "march", "april", "may", "june"]
// inserts at index 1
month.splice(1, 0, "feb")
// console.log(month)


// Multi-dimensional Array
const gameBoard = [
    ["X", "O", "X"],
    ["O", null, "X"],
    ["O", "O", "X"]
]
console.log(gameBoard[1][1])
