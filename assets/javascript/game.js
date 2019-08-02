
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var wins = 0;
var losses = 0;
var remaining = 9;

var winsNumber = document.getElementById("wins");
var lossesNumber = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-remaining");
var guessesed = document.getElementById("guessesed");


function gameStart() {

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(computerGuess)

document.onkeyup = function(event) { 

    var userGuess = event.key;
        
             if (userGuess === computerGuess) {
                 wins++;
                 console.log(wins)
             } else {
                 remaining--;
                 console.log(remaining)
             }
        
            }
        }
    






   







gameStart();