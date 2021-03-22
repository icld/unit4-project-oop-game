/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startButton = document.getElementById('btn__reset')

startButton.addEventListener('click', e => {
    const game = new Game
    game.startGame()

})
