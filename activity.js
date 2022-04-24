//Activity 1

let backwards = (str) => {

return str.split("").reverse().join("")


}

console.log(backwards("allo"))


//Activity 2
//concat -method

let shoppingList = [
    "Banana",
    "Bread",
    "Rice"
]

let shoppingList2 = [
    "Butter",
    "Ham",
    "Pizza"
]

let shoppingList3 = [
    "Soda",
    "Milk",
    "Salt"
]

let fullList = shoppingList.concat(shoppingList2, shoppingList3)

console.log(fullList[5])

//Nested array -method

let list = [["Banana", "Bread", "Rice"],
           ["Butter", "Ham", "Pizza"],
           ["Soda", "Milk", "Salt"]]

console.log(list[1][2])

//Activity 3

let dataChecker = (string, rank) => {
    if (string == "codenation" && rank == 1) {
        return "All match"
    }
    else if (string == "codenation" && rank != 1) {
        return "Rank does not equal 1"
    }
    else if (string != "codenation" && rank != 1) {
        return "Both not equal"
    }
}

console.log(dataChecker("codenation", 3))