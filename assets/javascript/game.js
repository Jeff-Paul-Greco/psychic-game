
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var wins = 0;
var losses = 0;
var remaining = 9;

var winsNumber = document.getElementById("wins");
var lossesNumber = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-remaining");
var guessed = document.getElementById("guessed");


function gameStart() {

    remaining = 9;
    guessesLeft.textContent = "Guesses Remaining: " + remaining;
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    

document.onkeyup = function(event) { 

    var userGuess = event.key;
    guessed.textContent = userGuess;
        
             if (userGuess === computerGuess) {
                 wins++;
                 winsNumber.textContent = "Wins: " + wins;
                 gameStart();
                 
             } else if (remaining > 1) {
                 remaining--;
                 guessesLeft.textContent = "Guesses Remaining: " + remaining;
                 
             } else {
                 losses++;
                 lossesNumber.textContent = "Losses: " + losses;
                 gameStart();
             }
        
            }
        }
    






   







gameStart();