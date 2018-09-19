//initialize variables for game

var guessesLeft = 12;
var wins = 0;
var wrestlers = ["Goldust", "Matt Hardy", "The Miz", "Honky Tonk Man", "Beth Phoenix", "Bam Bam Bigelow", "Rockin Robin", "Lex Luger", "Goldberg", "Mickie James", "Kofi Kingston", "Trish Stratus", "The Dudley Boys", "Sid Vicious", "Lita", "Batista", "Chyna", "The Iron Sheik", "Legion of Doom", "Chris Benoit", "Mr Fuji", "Yokozuna", "CM Punk", "Booker T", "Sgt Slaughter", "Big Show", "John Bradshaw Layfield", "Razor Ramon", "Diesel", "Rey Mysterio", "Owen Hart", "Jeff Hardy", "Randy Orton", "The Ultimate Warrior", "Brock Lesnar", "Wendi Richter", "Kane", "Ric Flair", "Rowdy Roddy Piper", "Triple H", "Chris Jericho", "Edge", "Mick Foley", "Eddie Guerrero", "John Cena", "Ted DiBiase", "Kurt Angle", "Macho Man Randy Savage", "The Rock", "Bret Hart", "Andre The Giant", "The Undertaker", "Stone Cold Steve Austin", "Shawn Michaels", "Hulk Hogan"]

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var startGame = document.getElementById("instructions");
var winCount = document.getElementById("win-count");
var guessCount = document.getElementById("guesses-left");
var winLossScreen = document.getElementById("win-lose-screen");
var currentWord = document.getElementById("current-word");

startGame.onclick = function (event) {
  startGame.textContent = "Reset Game";
  wins = 0;
  guessesLeft = 12;
  guessCount.textContent = guessesLeft;
  winCount.textContent = wins;
  var grabWord = wrestlers[Math.floor(Math.random() * wrestlers.length)];
  var hiddenWord = [];
  for (var i = 0; i < grabWord.length; i++) {
    if (grabWord[i] === " ") {
      hiddenWord[i] = "-";
    }
    else {
      hiddenWord[i] = "_";
    }
    console.log(grabWord);
  }
  currentWord.innerHTML = hiddenWord.join(" ");

  console.log(grabWord);

  document.onkeyup = function (event) {
    var userGuess = event.key;
    for (var i = 0; i < grabWord.length; i++) {
      if (userGuess == grabWord[i]) {
        hiddenWord[i] = grabWord[i];
        currentWord.textContent = hiddenWord.join(" ");
      }
    }
    
    guessCount.textContent = guessesLeft;
  }
}



