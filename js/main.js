function roll() {
    const dice = window.document.getElementById("image")
    const random = Math.floor(Math.random() * 6) + 1

    switch(random) {
        case 1:
            dice.src = "imgs/dice-1.png"
            break
        case 2:
            dice.src = "imgs/dice-2.png"
            break
        case 3:
            dice.src = "imgs/dice-3.png"
            break
        case 4:
            dice.src = "imgs/dice-4.png"
            break
        case 5:
            dice.src = "imgs/dice-5.png"
            break
        case 6:
            dice.src = "imgs/dice-6.png"
            break
        default:
            console.log("ERRO")
            break
    }
}
