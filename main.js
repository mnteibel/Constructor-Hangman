var Word = require("./word")
var inquirer = require("inquirer")

var words = ["hello", "goodbye"]

var newWord = new Word(words[Math.floor(Math.random() * words.length)]);

var guesses = 10

newWord.playHangman();
newWord.displayLetters();

var play = function(){

	console.log("You have " + newWord.guesses + "guesses remaining!")

	inquirer.prompt([{
			name: "input",
			message: "Guess a letter!"
		}
		]).then(function(letter){
			newWord.checkLetters(letter.input);
			newWord.displayLetters();
			if (newWord.string === "h e l l o" || newWord.string === "g o o d b y e"){
				console.log("YOU WIN!!!!")
			} else if (newWord.guesses === 0) {
				console.log("YOU LOSE! Type in node main.js to play again!")
			} else {
				play();
			}					
		});
}

play();