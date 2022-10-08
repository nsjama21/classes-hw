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

// Constructors
// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {
    constructor(nickNameParam, hasAMissingLimbParam = true, landOfOriginParam) {
        this.nickName = nickNameParam
        this.hasAMissingLimb = hasAMissingLimbParam
        this.landOfOrigin = landOfOriginParam
        // this.jollyRogerPirateShip = []
    }


    // generatePirate() {
    //     const newPirate = new Pirate(this.nickName, this.hasAMissingLimb, this.landOfOrigin)
    //     // this.jollyRogerPirateShip.push(newPirate)

    // }

    robbing() {
        console.log("I will rob you blind!")
    }

    navigating() {
        console.log("I was born for the sea! I can sail anywhere!")
    }

    sailing() {
        console.log("Look ashore, fellow pirate, our destination is nigh!")
    }


}

const jollyRoger = [new Pirate("Jimmy", false, "Michigan"),

new Pirate("Preston", true, "Barbados"),

new Pirate("Rebecca", true, "Long Island")]


const blackPearl = [new Pirate("Steven", false, "Dominican Republic"),

new Pirate("Freddy", true, "WhiteLand"),

new Pirate("Stephanie", true, "Chicago")]


// shipCrew is name of function
// shipName(jollyRoger/blackPearl) is parameter (orange)
// /// pirates represents each thing inside an array

function shipCrew(shipName) {
    shipName.forEach((pirates) => {
        console.log(pirates)
    })

}

shipCrew(jollyRoger)
shipCrew(blackPearl)






// findPirate(index) {
//     return this.jollyRogerPirateShip[index]






// pirateOriginal.generatePirate()
// console.log(pirateOriginal)

// pirateTwo.generatePirate()
// console.log(pirateTwo)

// pirateThree.generatePirate()
// console.log(pirateThree)
// console.log(Pirate.nickName)

// console.log(loopThroughPirateArray(["pirateOne", "pirateTwo", "pirateThree"]))

// const final = pirateShipArray([pirateOriginal, pirateTwo, pirateThree])

// console.log(final)



// const pirateOne = new Pirate("Smithy", true, "Barbados", this.jollyRogerPirateShip)

// console.log(pirateOne)

// this.jollyRogerPirateShip.push(pirateOne)

// const pirateTwo = new Pirate("Jimmy", false, "Michigan", this.jollyRogerPirateShip)
// this.jollyRogerPirateShip.push(pirateTwo)

// const pirateThree = new Pirate("Rebecca", true, "Long Island", this.jollyRogerPirateShip)
// this.jollyRogerPirateShip.push(pirateThree)




// const pirateUno = new Pirate("HoneyBunches", false, "Ecuador", this.jollyRogerPirateShip.length)






// const pirate1 = new Pirate("Jimmy", false, "Michigan")
// console.log(pirateOne)
// pirateOne.generatePirate()
// console.log(pirateTwo)
// console.log(pirateThree)






