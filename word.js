var Letter = require("./letter")

function Word(w) {
	
	this.word = w;
	this.lettersArr = [];
	this.guesses = 8
	this.playHangman = function() {
		for (var i = 0; i < this.word.length; i++) {
			this.lettersArr.push(new Letter(this.word[i]))
		}
	}
	this.checkLetters = function(input) {

		var boolean = false
		for (var i = 0; i < this.word.length; i++) {
			if (this.lettersArr[i].letter === input.toLowerCase()) {
				this.lettersArr[i].guessedCorrectly = true
				boolean = true;
			}
		}
		if (boolean === false) {
			this.guesses--
		}
	}
	this.displayLetters = function() {
		this.displayArr = [];
		for (var i = 0; i < this.word.length; i++) {
			this.displayArr.push(this.lettersArr[i].display())
		} 
		this.string = this.displayArr.join(" ")
		console.log(this.string)
	}
}

module.exports = Word;