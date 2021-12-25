//A little guessing game

function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 11);
  let guess;

  console.log(randomNumber);

  do {
    guess = prompt("Guess a number between 1-10!");
    console.log(guess);
    if (guess <= 0 || guess > 10 || isNaN(guess)) {
      alert("Please only enter a numeric value >0 & <10!");
    } else if (randomNumber > guess) {
      alert("too low");
    } else if (randomNumber < guess) {
      alert("to high");
    }
  } while (guess != randomNumber);
  alert("you won");
}
