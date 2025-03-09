const button = window.document.getElementById("button")
button.addEventListener("click", roll)

function roll() {
    const dice = window.document.getElementById("image")
    const diceNumber = ramdomNumber(1, 6)

    switch(diceNumber) {
        case 1:
            dice.src = "assets/images/dice-1.png"
            break
        case 2:
            dice.src = "assets/images/dice-2.png"
            break
        case 3:
            dice.src = "assets/images/dice-3.png"
            break
        case 4:
            dice.src = "assets/images/dice-4.png"
            break
        case 5:
            dice.src = "assets/images/dice-5.png"
            break
        case 6:
            dice.src = "assets/images/dice-6.png"
            break
        default:
            console.log("ERRO")
            break
    }
}

function ramdomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}