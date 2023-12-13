const button = window.document.getElementById("button")
button.addEventListener("click", roll)

function roll() {
    const dice = window.document.getElementById("image")
    const diceNumber = rollDice(6)

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

function rollDice(D = 6) {
    switch(D) {
        case 2:
            return ramdomNumber(1, 2)
            break
        case 4:
            return ramdomNumber(1, 4)
            break
        case 6:
            return ramdomNumber(1, 6)
            break
        case 10:
            return ramdomNumber(1, 10)
            break
        case 20:
            return ramdomNumber(1, 20)
            break
        default:
            return console.log("invalid side numbers")
            break
    }
}

function ramdomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}