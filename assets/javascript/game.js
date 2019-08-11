    // Create array for all possible choices
    var possChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // Function to generate random letter answer
    function generateAnswer(){
    return possChoices[Math.floor(Math.random() * possChoices.length)]
    }

    // Assigns random letter to answer variable for IF/ELSE statements for win/loss parameters
    var answer = generateAnswer() 
    console.log(answer);
    // var playerGuess =
      // Create variables for number of guesses and win / loss counts
      var wins = 0;
      var losses = 0;
      var guessesLeft = 9;
      var guessedLetters = [];

      var directionsText = document.getElementById("directions-text");
      var computerHintText = document.getElementById("computerhint-text")
      var userChoiceText = document.getElementById("userchoice-text");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");
      var guessesLeftText = document.getElementById("guessesLeft-text");

      
      document.onkeyup = function(event) {

        var userGuess = event.key;
        userGuess = userGuess.toLowerCase();
        
        console.log(guessedLetters);

        // Check to see if button pressed is a valid answer
        if( possChoices.indexOf(userGuess) == -1 ){
          return;
        }

        if( possChoices.indexOf(userGuess) > possChoices.indexOf(answer) ){
          var computerRespond = "Its a little closer to the beginning of the alphabet!"; 
        } else if ( possChoices.indexOf(userGuess) < possChoices.indexOf(answer) ){
          var computerRespond = "Try a little further down the alphabet!";
        }
        // Push User Guess into empty array to be displayed on screen
        guessedLetters.push(userGuess);

        if (userGuess === answer) {
          wins++;
          computerRespond = "You did it! You guessed right!";
          reset();


        } else if (guessesLeft === 0) {
          losses++;
          computerRespond = "Oh no, you didn't figure it out. Better luck next time!";
          reset();

        } else if (userGuess !== answer) {
          guessesLeft--;
        };
      
      // Displays each letter the user has guessed in the current game
      userChoiceText.textContent = "You've guessed: " + guessedLetters.join(", ");
      directionsText.textContent = computerRespond;
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;
      guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

      // RESET function will reset guesses left, guesses array, and generate a new letter following a win or loss 
      function reset(){
        guessesLeft = 9;
        answer = generateAnswer();
        guessedLetters = [];
        console.log (answer);
      }
      };
      

      
    
      