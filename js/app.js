/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById('btn__reset')

//resets game, creates a new game, and starts game on button click
startButton.addEventListener('click', e => {
    resetGame()
    game = new Game
    game.startGame()
})

const keysCollect = document.getElementsByClassName('key');
const keys = [...keysCollect]

// adds listener to all keyboard keys
keys.forEach(key => key.addEventListener('click', event => { game.handleInteraction(event.target.innerHTML) }));

// allows selection of button with enter key
keys.forEach(key => key.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        game.handleInteraction(event.target.innerHTML)
    }
}))

// creates funciontality of the physical keyboard to select the onscreen keys
document.addEventListener('keydown', event => {
    const regEx = /^[a-z]$/g
    if (regEx.test(event.key)) {
        console.log('works')
        game.handleInteraction(event.key)
    }
})

// replenishes hearts, resets button states, removes previously active phrase
function resetGame() {
    document.getElementById('phrase').firstElementChild.innerHTML = ''

    let hearts = document.getElementsByTagName('img')
    let heartsArr = [...hearts]
    heartsArr.forEach(heart => heart.src = "images/liveHeart.png")

    const buttons = document.getElementsByTagName('button')
    for (let button of buttons) {
        if (button.disabled === true) {
            button.className = 'key';
            button.disabled = false
        }
    }
}