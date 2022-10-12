//Your Code here
let firstAnswer = window.prompt("Do you head left or right?")

//User selects left
if (firstAnswer === "left") {
    console.log("You selected left")
    let secondAnswer = window.prompt("Do you go to the library of the kitchen?")
    //User selects library
    if (secondAnswer === 'library' || firstAnswer === "left") {
        console.log("You picked the right place! You win!")
    }
    //User selects kitchen
    else if (secondAnswer === 'kitchen') {
        console.log("You are now stuck in the kitchen, Sorry")
    }
    //User selects anything else
    else {
        console.log("Game over! Try again")
    }
}
//User selects right
else if (firstAnswer === "right") {
        console.log("You selected right")
        let secondAnswer = window.prompt("Do you go to the forest or the cave?")
        //User selects forest
        if (secondAnswer === 'forest') {
            console.log("You picked the right place! You win!")
        }
        //User selects cave
        else if (secondAnswer === 'cave') {
            console.log("You are now stuck in the cave with a werewolf. Sorry")
        }
        //User selects anything else
        else {
            console.log("Game over! Try again")
        }
    }       
//User selects anything else
else {
    console.log("Game over! Try again")

}