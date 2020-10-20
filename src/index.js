import promptly from "promptly";

export const getRandomNum = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const startGame = async (description, generateData) => {
  console.log("Welcome to the Brain Games!");

  const name = await promptly.prompt("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);

  for (let i = 0; i < 3; i += 1) {
    const gameData = generateData();
    const [question, answer] = gameData;

    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt("Your answer: ");
    if (userAnswer === answer) {
      console.log("Correct!");
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${name}!`
      );
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
