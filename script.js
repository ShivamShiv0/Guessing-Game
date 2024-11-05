let input = document.getElementById("input");
let btn = document.getElementById("btn");
let guesses = document.getElementById("guesses");
let wrng = document.querySelector(".wrng");

let answer = Math.floor(Math.random() * 100) + 1;

let numGuesses = 0;
btn.addEventListener("click", () => {
  guessesNumber();
});
function guessesNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrng.innerHTML = "Enter between 1 to 100";
  } else {
    numGuesses++;
    guesses.innerHTML = "No. of Guess : " + numGuesses;

    if (input.value > answer) {
      wrng.innerHTML = "You Guess Too High !";
      input.value = "";
    } else if (input.value < answer) {
      wrng.innerHTML = "You Guess Too Low !";
      input.value = "";
    } else {
      wrng.innerHTML = "Congratulations You Guessed Correct Answer ";

      setTimeout(() => {
        resetGame();
      }, 4000);
    }
  }
}
function resetGame() {
  numGuesses = 0;
  answer = Math.floor(Math.random() * 100) + 1;
  input.value = "";
  guesses.innerHTML = " No. of Guess : 0 ";
}
