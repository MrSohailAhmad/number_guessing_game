import * as readline from "readline-sync";

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const guessGame = () => {
  console.log("Wellcome to the Number Guessing Game");

  const min: number = 1;
  const max: number = 100;

  const randomNumber = generateRandomNumber(min, max);

  let guessNumber: number | undefined;

  let attempts: number = 0;
  let scoure: number = 0;
  let maxRound: number = 5;

  for (let round = 1; round <= maxRound; round++) {
    while (guessNumber !== randomNumber) {
      console.log(`Round ${attempts} of ${maxRound}`);
      attempts++;

      guessNumber = parseInt(
        readline.question(`Guess the number between ${min} and ${max} : `),
        10
      );

      if (isNaN(guessNumber)) {
        console.log("Please Enter valid number");
        continue;
      }

      if (guessNumber < randomNumber) {
        console.log(`Too low! try again ${randomNumber}`);
      } else if (guessNumber > randomNumber) {
        console.log(`Too High! Try again ${randomNumber}`);
      } else {
        console.log(
          `Congratulation! You guessed the number in ${attempts} attemps`
        );
        scoure++;
        break;
      }
    }
  }
  guessNumber: undefined;
};

guessGame();
