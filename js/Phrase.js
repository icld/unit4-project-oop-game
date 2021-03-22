/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.splitPhrase = this.phrase.split('');
        this.phraseDiv = document.getElementById('phrase');
        this.ul = this.phraseDiv.firstElementChild
        this.liList = this.ul.children;
        this.lettersLeft = 0
        this.lettersPlayed = 0;
    }

    addPhraseToDisplay() {
        console.log(this.splitPhrase);
        console.log(this.liList)
        this.splitPhrase.forEach(letter => {
            const li = document.createElement('li')
            if (letter === ' ') {
                li.classList = 'space';
            } else {
                li.classList = `hide letter ${letter}`;
                this.lettersLeft++
            }
            li.innerHTML = `${letter}`;
            this.ul.appendChild(li)
        });
    }

    checkLetter(guess) {
        if (guess === '' || guess === ' ') {
            console.log('please guess a letter')
            return false
        } else if (this.phrase.includes(guess)) {
            this.lettersPlayed++
            return true
        } else {
            return false
        }
    }
    showMatchedLetter(guess) {
        [...this.liList].forEach(li => {
            if (li.textContent === guess) {
                li.className = `show letter ${guess}`
                console.log(`correctly guessed ${guess}`)
            }
        })
    }
}

// const gamePhrase = new Phrase('hello eat me')
// guess = 'h'
// gamePhrase.addPhraseToDisplay()
// gamePhrase.checkLetter(guess)
// gamePhrase.showMatchedLetter(guess)

