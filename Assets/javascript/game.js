//initialize variables for game

// array of names to be used for guessing
var wrestlers = ["Goldust", "Matt Hardy", "The Miz", "Honky Tonk Man", "Beth Phoenix", "Bam Bam Bigelow", "Rockin Robin", "Lex Luger", "Goldberg", "Mickie James", "Kofi Kingston", "Trish Stratus", "The Dudley Boys", "Sid Vicious", "Lita", "Batista", "Chyna", "The Iron Sheik", "Legion of Doom", "Chris Benoit", "Mr Fuji", "Yokozuna", "CM Punk", "Booker T", "Sgt Slaughter", "Big Show", "John Bradshaw Layfield", "Razor Ramon", "Diesel", "Rey Mysterio", "Owen Hart", "Jeff Hardy", "Randy Orton", "The Ultimate Warrior", "Brock Lesnar", "Wendi Richter", "Kane", "Ric Flair", "Rowdy Roddy Piper", "Triple H", "Chris Jericho", "Edge", "Mick Foley", "Eddie Guerrero", "John Cena", "Ted DiBiase", "Kurt Angle", "Macho Man Randy Savage", "The Rock", "Bret Hart", "Andre The Giant", "The Undertaker", "Stone Cold Steve Austin", "Shawn Michaels", "Hulk Hogan"]

// Images for win screen
var wrestlerImg = ["Assets/images/goldust.jpg", "Assets/images/matt hardy.jpg", "Assets/images/the miz.jpg", "Assets/images/Honky Tonk Man.jpg", "Assets/images/Beth Phoenix.jpg", "Assets/images/bam bam bigelow.jpg", "Assets/images/Rockin Robin.jpg", "Assets/images/Lex Luger.jpg", "Assets/images/Goldberg.jpg", "Assets/images/Mickie James.jpg", "Assets/images/Kofi Kingston.jpg", "Assets/images/Trish Stratus.jpg", "Assets/images/the dudley boys.jpg", "Assets/images/Sid Vicious.jpg", "Assets/images/Lita.jpg", "Assets/images/Batista.jpg", "Assets/images/Chyna.jpg", "Assets/images/Iron Shiek.jpg", "Assets/images/Legion of Doom.jpg", "Assets/images/Chris Benoit.jpg", "Assets/images/Mr Fuji.jpg", "Assets/images/Yokozuna.jpg", "Assets/images/CM Punk.jpg", "Assets/images/Booker T.jpg", "Assets/images/Sgt Slaughter.jpg", "Assets/images/Big Show.jpg", "Assets/images/JBL.jpg", "Assets/images/Razor Ramon.jpg", "Assets/images/Diesel.jpg", "Assets/images/Rey Mysterio.jpg", "Assets/images/Owen Hart.jpg", "Assets/images/Jeff Hardy.jpg", "Assets/images/Randy Orton.jpg", "Assets/images/Ultimate Warrior.jpg", "Assets/images/Brock Lesnar.jpg", "Assets/images/Wendi Richter.jpg", "Assets/images/Kane.jpg", "Assets/images/Ric Flair.jpg", "Assets/images/Roddy Piper.jpg", "Assets/images/Triple H.jpg", "Assets/images/Chris Jericho.jpg", "Assets/images/Edge.jpg", "Assets/images/Mick Foley.jpg", "Assets/images/Eddie Guerrero.jpg", "Assets/images/John Cena.jpg", "Assets/images/Ted DiBiase.jpg", "Assets/images/Kurt Angle.jpg", "Assets/images/Macho Man.jpg", "Assets/images/The Rock.jpg", "Assets/images/Bret Hart.jpg", "Assets/images/Andre the Giant.jpg", "Assets/images/The Undertaker.jpg", "Assets/images/Steve Austin.jpg", "Assets/images/Shawn Michaels.jpg", "Assets/images/Hulk Hogan.jpg"];

// array of inputs that won't return an error alert
var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "SHIFT", "CAPSLOCK", "ENTER"];

// initializing variables to be used in game
var wins = 0;
var startGame = document.getElementById("instructions");
var winCount = document.getElementById("win-count");
var guessCount = document.getElementById("guesses-left");
var winLossScreen = document.getElementById("win-lose-screen");
var currentWord = document.getElementById("current-word");
var guessedLettersContainer = document.getElementById("letters-guessed");
var winLossMessage = document.getElementById("win-lose-message");
var winLossStory = document.getElementById("win-lose-text");

startGame.onclick = function () {
  // sets up wins, guesses, rest button, etc for game start on click
  var guessedLetters = [];
  var winCountStop = 0;
  winLossScreen.setAttribute("src", "Assets/images/Wrestler idle.gif");
  winLossMessage.innerHTML = "Start Guessing, Brother!";
  winLossStory.innerHTML = "";
  // removes focus from reset button so if "ENTER" is pushed, the game does not reset.
  startGame.blur();
  startGame.textContent = "Reset Game";
  guessesLeft = 10;
  guessCount.textContent = guessesLeft;
  winCount.textContent = wins;
  guessedLettersContainer.textContent = guessedLetters;

  // grabs Wrestler from array and sets that as the word to be guessed
  var grabWord = wrestlers[Math.floor(Math.random() * wrestlers.length)];
  //grabs Wrestler number for win screen based on random wrestler chosen from array.
  var wrestlerNum = wrestlers.indexOf(grabWord);
  //makes the grabWord variable uppercase. Have to do this after getting wrestler story variable because contents of wrestler array aren't uppercase and returned -1
  grabWord = grabWord.toUpperCase();
  // Takes grabbed Wrestler name and converts it to underscores and spaces
  var hiddenWord = [];
  for (var i = 0; i < grabWord.length; i++) {
    if (grabWord[i] === " ") {
      hiddenWord[i] = "\xa0";
    }
    else {
      hiddenWord[i] = "_";
    }
  }
  // displays the wrestler name as underscores on the document
  currentWord.textContent = hiddenWord.join(" ");

  // logs user choice on key up
  document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();

    // if user hits a key that is not a letter alerts them to pick a letter
    if (validInputs.indexOf(userGuess) === -1) {
      alert("Please press a letter");
    }

     // checks if userGuess is not in word and not guessed already.  decremnts guessesLeft by 1.
     if (grabWord.indexOf(userGuess) === -1 && guessedLetters.indexOf(userGuess) === -1 && guessesLeft > 0 && hiddenWord.join('') !== grabWord && validInputs.indexOf(userGuess) < 52 && validInputs.indexOf(userGuess) > -1) {
      guessesLeft--;
    }

     // pushes userGuess to guessedLetters array if it's a newly guessed letter
     if (guessedLetters.indexOf(userGuess) === -1 && validInputs.indexOf(userGuess) > -1 && validInputs.indexOf(userGuess) < 52 && guessesLeft > 0 && hiddenWord.join('') !== grabWord) {
      guessedLetters.push(userGuess);
      guessedLettersContainer.textContent = guessedLetters.join(",\xa0 ");
    }

    // if user guesses a letter that is in the word, replace underscore with the correct letter
    for (var i = 0; i < grabWord.length; i++) {
      if (grabWord[i] === " ") {
        hiddenWord[i] = " ";
      }
      else if (userGuess === grabWord[i] && guessesLeft > 0) {
        hiddenWord[i] = grabWord[i];
        currentWord.textContent = hiddenWord.join("\xa0");
      }
    }

    // once hidden word is revealed says you win and updates win count.
    if (hiddenWord.join('') === grabWord && winCountStop === 0) {
      winLossMessage.textContent = "YOU WIN!";
      winLossScreen.setAttribute("src", wrestlerImg[wrestlerNum]);
      winCountStop++;
      wins++;
      winCount.textContent = wins;
      startGame.textContent = "New Game!";
    }
    // if user loses all guesses left, says you lose and displays gif.
    guessCount.textContent = guessesLeft;
    if (guessesLeft === 0) {
      winLossScreen.setAttribute("src", "Assets/images/HellInACell.gif");
      winLossMessage.textContent = "YOU LOSE!";
      winLossStory.textContent = "OOF! That was painful .... But not as painful as Mankind plummeting 16 ft through an announcer's table when The Undertaker threw him off Hell IN A Cell in 1998."
    }
  }
}



