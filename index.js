console.clear();

const prompt = require("prompt-sync")({ sigint: true });
class BullsAndCowsGame {
  constructor() {
    this.secretNumber = "";
    this.count = 0;
    this.name = prompt("What is your name? ");
    this.gameType = prompt("Choose your difficulty level : [easy / medium / hard ]? ");
    this.easy = 29;
    this.medium = 14;
    this.hard = 4;
    
  }
  //! Create a method to generate a secret random number(unique, 4 digits)
  generateNumber() {
    let generatedNum = new Set();
    while (generatedNum.size !== 4) {
      generatedNum.add(Math.floor(Math.random() * 10));
    }
    return [...generatedNum].join("");
  }
  //! Analyze the input and give the player a hint(number of bulls and cows)
  getBullsAndCows(guessedNumber) {
    let cows = 0;
    let bulls = 0;
    const messages = [
      "You are never a loser until you quit trying.",
      "Losing a game is heartbreaking. Losing your sense of excellence or worth is a tragedy.",
      "Sometimes by losing a battle you find a new way to win the war.",
      "You're never a loser until you quit trying.",
      "I've failed over and over and over again in my life and that is why I succeed.",
    ];
    //! Checking if each digit of the input number exists and if it is placed in the right position
    for (let i = 0; i < guessedNumber.length; i++) {
      const num = guessedNumber[i];
      if (
        this.secretNumber.includes(num) &&
        this.secretNumber.indexOf(num) === i
      ) {
        bulls++;
      }
      if (
        this.secretNumber.includes(num) &&
        this.secretNumber.indexOf(num) !== i
      ) {
        cows++;
      }
    }
    //! Randomized message every time the user has no bulls and no cows (extra)
    if (bulls === 0 && cows === 0) {
      console.log(messages[Math.floor(Math.random() * messages.length)]);
    } else {
      console.log(
        `your guessed number contains ${cows} ${
          cows > 1 ? "cows" : "cow"
        } and ${bulls} ${bulls > 1 ? "bulls" : "bull"}. `
      );
    }
  }
  //! Compare the user’s input with the generated number
  startGame() {
    //! We declare this var to stop the game at a particular point
    let isCorrect = false;
    this.secretNumber = this.generateNumber();
    do {

      let guess = prompt("Guess a number? ");
      //! Convert the guess input to a unique number with Set
      let unique = new Set(guess);
      //! Validation of the user's input(4 digits, unique number)
      if (unique.size > 4 || unique.size < 4) {
        console.log("input is not valid");
      }
      
      //! Insert the user’s name in the congratulations message(extra)
      else if (guess === this.secretNumber) {
        console.log(`Congrats ${(this.name = "" ? "Player" : this.name)}`);
        //! Give the player the option to play again(extra)
        let question = prompt("Do you wanna play again? (Y/N) ");
        if (question.toUpperCase() === "Y") {
          isCorrect;
        } else {
          isCorrect = true;
        }
       
      }else {
        console.log("******Your guess is wrong*******");
        //! Number of attempts to guess the secret number(extra)
        this.count++;
        console.log(
          `You've tried ${this.count} ${this.count > 1 ? "times" : "time"}`
        );
        //! Call the bullsAndCows function and executes it
        this.getBullsAndCows(guess);
        console.log(
          `please try again ${(this.name = "" ? "Player" : this.name)}....`
        );
      }
       //! Choosing difficulty level(extra)
      if(this.gameType === "easy" && this.count=== this.easy){
        
        
        console.log(
          `Sorry ${(this.name = ""
            ? "Player"
            : this.name)} Game Over the number was ${this.secretNumber}`
        );
        isCorrect = true;
      }else if(this.gameType === "medium" && this.count === this.medium){
        this.count = this.medium;
        console.log(
          `Sorry ${(this.name = ""
            ? "Player"
            : this.name)} Game Over the number was ${this.secretNumber}`
        );
        isCorrect = true;
      }else if(this.gameType === "hard" && this.count === this.hard){
        this.count = this.hard;
        console.log(
          `Sorry ${(this.name = ""
            ? "Player"
            : this.name)} Game Over the number was ${this.secretNumber}`
        );
        isCorrect = true;
      }
    } while (!isCorrect);
  }
}
let game1 = new BullsAndCowsGame();
//console.log(game1.generateNumber());
game1.startGame();