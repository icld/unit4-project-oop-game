/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startButton = document.getElementById('btn__reset')
let game = new Game

let h3 = document.createElement('h3')
h3.style.display = ''
h3.innerHTML = `use <strong>Tab</strong> to move to next button.  <br><strong>Shift-Tab</strong> to move back`
document.getElementById('banner').appendChild(h3)

//resets game, creates a new game, and starts game on button click
startButton.addEventListener('click', e => {
    resetGame()
    game = new Game
    game.startGame()
})

const keysCollect = document.getElementsByClassName('key');
const keys = [...keysCollect]

// adds listener to all keyboard keys
keys.forEach(key => key.addEventListener('click', event => { game.handleInteraction(event) }));

// allows selection of button with keyboard 
keys.forEach(key => key.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        game.handleInteraction(event)
    }
}))

// replenishes hearts, resets button states, removes previously active phrase
function resetGame() {
    document.getElementById('phrase').firstElementChild.innerHTML = ''

    let hearts = document.getElementsByTagName('img')
    let heartsArr = [...hearts]
    heartsArr.forEach(heart => heart.src = "images/liveHeart.png")

    const buttons = document.getElementsByTagName('button')
    for (button of buttons) {
        if (button.disabled === true) {
            button.className = 'key';
            button.disabled = false
        }
    }
}