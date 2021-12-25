//A little guessing game with if / else if

function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 11);
  let guess;
  console.log(randomNumber);

  do {
    guess = prompt("Guess a number between 1-10!");
    console.log(guess);
    if (guess <= 0 || guess > 10 || isNaN(guess)) {
      alert("Please only enter a numeric value >0 & <10");
    } else if (randomNumber > guess) {
      alert("Too low");
    } else if (randomNumber < guess) {
      alert("Too high");
    }
  } while (guess != randomNumber);
  // add a way to exit on window.prompt.
  alert("You won!");
}

//Country facts with switch statement

function countryFacts() {
  let greeting = "Hi! Enter a country and you'll get some facts in return.";
  alert(greeting);

  while (window.prompt != null) {
    let countryInput = prompt("Please enter a country").toLowerCase();

    switch (countryInput) {
      case "usa":
        alert(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora."
        );
        break;
      case "sweden":
        alert(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora."
        );
        break;
      case "spain":
        alert(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora."
        );
        break;
      case "finland":
        alert(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora."
        );
        break;
      case "portugal":
        alert(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora."
        );
        break;
      case "germany":
        alert(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora."
        );
        break;
      case "japan":
        alert(
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora."
        );
        break;
      default:
        alert("Unkown country for me, try again!");
    }
  }
}
