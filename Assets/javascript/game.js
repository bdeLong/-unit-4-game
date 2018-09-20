//initialize variables for game

var guessesLeft = 10;
var wins = 0;
var wrestlers = ["Goldust", "Matt Hardy", "The Miz", "Honky Tonk Man", "Beth Phoenix", "Bam Bam Bigelow", "Rockin Robin", "Lex Luger", "Goldberg", "Mickie James", "Kofi Kingston", "Trish Stratus", "The Dudley Boys", "Sid Vicious", "Lita", "Batista", "Chyna", "The Iron Sheik", "Legion of Doom", "Chris Benoit", "Mr Fuji", "Yokozuna", "CM Punk", "Booker T", "Sgt Slaughter", "Big Show", "John Bradshaw Layfield", "Razor Ramon", "Diesel", "Rey Mysterio", "Owen Hart", "Jeff Hardy", "Randy Orton", "The Ultimate Warrior", "Brock Lesnar", "Wendi Richter", "Kane", "Ric Flair", "Rowdy Roddy Piper", "Triple H", "Chris Jericho", "Edge", "Mick Foley", "Eddie Guerrero", "John Cena", "Ted DiBiase", "Kurt Angle", "Macho Man Randy Savage", "The Rock", "Bret Hart", "Andre The Giant", "The Undertaker", "Stone Cold Steve Austin", "Shawn Michaels", "Hulk Hogan"]

var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "SHIFT", "CAPSLOCK", "ENTER"];
var startGame = document.getElementById("instructions");
var winCount = document.getElementById("win-count");
var guessCount = document.getElementById("guesses-left");
var winLossScreen = document.getElementById("win-lose-screen");
var currentWord = document.getElementById("current-word");
var guessedLettersContainer = document.getElementById("letters-guessed");
var winLossMessage = document.getElementById("win-lose-message");
var winLossStory = document.getElementById("win-lose-text");


startGame.onclick = function () {
  // sets up wins, guesses, rest button, etc for game start
  // removes focus from reset button so if "ENTER" is pushed, the game does not reset.
  var guessedLetters = [];
  winLossScreen.innerHTML = "";
  winLossMessage.innerHTML = "";
  winLossStory.innerHTML = "";
  startGame.blur();
  startGame.textContent = "Reset Game";
  guessesLeft = 12;
  guessCount.textContent = guessesLeft;
  winCount.textContent = wins;
  guessedLettersContainer.textContent = guessedLetters;

  // grabs Wrestler from array and sets that as the word to be guessed
  var grabWord = wrestlers[Math.floor(Math.random() * wrestlers.length)].toUpperCase();
  // Takes grabbed Wrestler name and converts it to underscores and dashes
  var hiddenWord = [];
  for (var i = 0; i < grabWord.length; i++) {
    if (grabWord[i] === " ") {
      hiddenWord[i] = "\xa0";
    }
    else {
      hiddenWord[i] = "_";
    }
  }
  currentWord.textContent = hiddenWord.join(" ");

  console.log(grabWord);
  console.log(hiddenWord);
  // logs user choice on key up
  document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();
    // checks if userGuess is not in word or guessed already.  decremnts guessesLeft by 1.
    if (grabWord.indexOf(userGuess) === -1 && guessedLetters.indexOf(userGuess)=== -1 && guessesLeft>0 && hiddenWord.join('') !== grabWord){
      guessesLeft--;
    }
    // pushes userGuess to guessedLetters array if it's a new letter
    if (guessedLetters.indexOf(userGuess) === -1 && validInputs.indexOf(userGuess) > -1 && validInputs.indexOf(userGuess) < 52 && guessesLeft > 0 && hiddenWord.join('') !== grabWord){
      guessedLetters.push(userGuess);
      guessedLettersContainer.textContent = guessedLetters.join(",\xa0 ");
    }
// if user hits a key that is not a letter alerts them to pick a letter
    if (validInputs.indexOf(userGuess) === -1 && userGuess ) {
      alert("Please press a letter");
    }
    for (var i = 0; i < grabWord.length; i++) {
      if (grabWord[i] === " ") {
        hiddenWord[i] = " ";
      }
      else if (userGuess === grabWord[i]) {
        hiddenWord[i] = grabWord[i];
        currentWord.textContent = hiddenWord.join("\xa0");
        guessedLettersContainer.textContent = guessedLetters.join(",\xa0 ");
      }
    }

    if (hiddenWord.join('') === grabWord){
      winLossMessage.textContent = "YOU WIN!";
      wins++;
      winCount.textContent = wins;
    }

    guessCount.textContent = guessesLeft;
    if (guessesLeft === 0){
      winLossScreen.innerHTML = "<img src=\"Assets/images/HellInACell.gif\">";
      winLossMessage.textContent = "YOU LOSE!";
      winLossStory.textContent = "OOF! That was painful .... But not as painful as Mankind plummeting 16 ft through an announcer's table when The Undertaker threw him off Hell IN A Cell in 1998."
    }
  }
}



