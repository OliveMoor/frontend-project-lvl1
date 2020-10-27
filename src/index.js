import promptly from 'promptly';

export const getRandomNum = (min = 0, max = 100) => {
  const value = Math.floor(Math.random() * (max - min) + 1) + min;
  return value;
};

const startGame = async (description, generateData) => {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  let acc = 0;
  while (acc < 3) {
    acc += 1;
    const [question, correctAnswer] = generateData();

    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } if (acc === 3) {
      console.log(`Congratulations, ${name}!`);
    } else if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      break;
    }
  }
};

export default startGame;
