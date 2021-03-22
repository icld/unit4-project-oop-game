/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['The Hubble Telescope', 'Interplanetary Exploration', 'Mars Rover', 'Space X', 'Super Nova'];
        this.activePhrase = null;
    }
    startGame() {
        const overLay = document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        gamePhrase.addPhraseToDisplay(this.activePhrase)
    }
    getRandomPhrase() {
        let randomPhraseNum = Math.floor(Math.random() * Math.floor(this.phrases.length))
        let phrase = this.phrases[randomPhraseNum];
        return phrase
    }
    handleInteraction() {
        let button = e.target;
        button.disabled = true
        let guessedLetter = button.innerHTML.toLowerCase()
        if (phrase.checkLetter(guessedLetter) === false) {
            button.classList = 'wrong';
            this.removeLife()
        } else if (phrase.checkLetter(guessedLetter) === true) {
            button.classList = 'chosen';
            phrase.showMatchedLetter(guessedLetter);
            checkForWin();
            if (this.checkForWin() === true) {
                this.gameOver()
            }
        }
    }
    removeLife() {
        const lives = document.getElementById('scoreboard').firstElementChild.children
        const found = lives.find(life => life.src === "images/liveHeart.png");
        found.src = "images/lostHeart.png"
        this.missed += 1
        if (this.missed === 5) {
            this.gameOver()
        }
    }
    checkForWin() {
        if (phrase.lettersLeft === 0) {
            this.gameOver();
            return true
        } else {
            return false
        }
    }
    gameOver() {
        const overLay = document.getElementById('overlay').style.display = '';
        const h1 = document.getElementById('game-over-message')
        if (this.checkForWin() === true) {
            h1.className = 'win';
        } else if (this.checkForWin() === false) {
            h1.className = 'lose'
        }
    }
}

