function Letter(l) {
	this.letter = l;
	this.guessedCorrectly = false;
	this.display = function() {
		if (this.guessedCorrectly) {
			return(this.letter)
		} else {
			return("_ ")
		}
	}
}

module.exports = Letter;