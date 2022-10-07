// Creating Classes
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
    constructor(nameParam, ageParam, colorParam) {
        this.name = nameParam
        this.age = ageParam
        this.color = colorParam
    }

    napping() {
        console.log("Purrr! I am napping")
    }

    eating() {
        console.log("I enjoy eating catnip")
    }

    playing() {
        console.log("I like to play by catching mice")
    }
}

const catOne = new Cat("Tabby", "5", "black")
console.log(catOne)

catOne.napping()
catOne.eating()
catOne.playing()

const catTwo = new Cat("Fuzzy", "2", "golden")
console.log(catTwo)

catTwo.napping()
catTwo.eating()
catTwo.playing()

