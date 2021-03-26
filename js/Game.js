/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


// creates Game class
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('The Hubble Telescope'),
            new Phrase('Interplanetary Exploration'),
            new Phrase('Mars Rover'),
            new Phrase('Space X'),
            new Phrase('Super Nova')
        ];
        this.activePhrase = null;
    }

    // sets new game phrase and styles the transtition to the board
    startGame() {
        const overLay = document.getElementById('overlay');
        overLay.style.transition = "all 1s"
        overLay.style.opacity = 0
        setTimeout(() => { overLay.style.display = 'none' }, 1000)

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay()
    }

    // selects a random phrase from list of phrases.   
    getRandomPhrase() {
        let randomPhraseNum = Math.floor(Math.random() * Math.floor(this.phrases.length))
        let phrase = this.phrases[randomPhraseNum];
        return phrase
    }

    // handles each letter selection, resulting action, and style changes
    handleInteraction(event) {

        let buttons = document.getElementsByClassName('key')
        let selected;
        for (let button of buttons) {
            if (button.innerHTML === event) {
                selected = button
                console.log(selected)
                button.disabled = true
                let checkedLetter = this.activePhrase.checkLetter(event)
                if (checkedLetter === false) {
                    selected.classList = 'wrong';
                    this.removeLife()
                } else if (checkedLetter === true) {
                    selected.classList = 'chosen';
                    this.activePhrase.showMatchedLetter(event);
                    this.checkForWin();
                    if (this.checkForWin() === true) {
                        this.gameOver()
                    }
                }
            }
        }
    }

    // changes heart imgs to reflect missed attempts
    removeLife() {
        let lives = document.getElementsByTagName('img');
        lives[this.missed].src = "images/lostHeart.png"
        console.log('heart removed', this.missed)
        this.missed += 1
        if (this.missed === 5) {
            this.gameOver()
        }
    }

    // compares letters revealed to the number of letters in the phrase.  
    checkForWin() {
        let lettersShown = 0
        let list = this.activePhrase.liList
        for (let li of list) {
            if (li.className.startsWith('hide') || this.missed === 5) {
                return false
            } else if (li.className.startsWith('show')) {
                lettersShown++
            } else if (li.className.startsWith('space')) {
                lettersShown++
            }
            if (lettersShown === list.length) {
                return true
            }
        }
    }

    // changes overlay appearnce/style.  notifies of win or loss
    gameOver() {
        const overLay = document.getElementById('overlay')
        overlay.style.display = '';
        overLay.style.opacity = 0
        overLay.style.transition = "all 1s"
        setTimeout(() => { overlay.style.opacity = 1 }, 100)

        const h1 = document.getElementById('game-over-message')
        if (this.checkForWin() === true) {
            h1.textContent = `YOU'RE A HUGE WINNER!`
            overlay.className = 'win';
        } else if (this.checkForWin() === false) {
            h1.textContent = `BUMMER YOU'RE NOT A HUGE WINNER!`
            overlay.className = 'lose'
        }
    }
}
