/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// creates class Phrase
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.splitPhrase = this.phrase.split('');
        this.phraseNoSpaces = this.phrase.replace(/ /g, '')
        this.phraseDiv = document.getElementById('phrase');
        this.ul = this.phraseDiv.firstElementChild
        this.liList = this.ul.children;
    }

    // adds the created phrase to the game board
    addPhraseToDisplay() {
        this.splitPhrase.forEach(letter => {
            const li = document.createElement('li')
            if (letter === ' ') {
                li.classList = 'space';
            } else {
                li.classList = `hide letter ${letter}`
            }
            li.innerHTML = `${letter}`;
            this.ul.appendChild(li)
        });
    }

    // checks if guessed letter is present in activePhrase
    checkLetter(letter) {
        if (letter === '' || letter === ' ') {
            console.log('please guess a letter')
            return false
        } else if (this.phrase.includes(letter)) {
            return true
        } else {
            return false
        }
    }
    // reveals letter in gameboard.  
    showMatchedLetter(guess) {
        [...this.liList].forEach(li => {
            if (li.textContent === guess) {
                li.className = `show letter ${guess}`
            }
        })
    }
}
